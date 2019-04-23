<template>
        <bc-filter-group
            v-if="filter.criteria && filter.criteria[0]"
            class="bc-filter-group"
            ref="attribsGroup"
            :criteria-size="filter.criteria.length"
            :operator="filter.operator"
            @operator-changed="onOperatorChanged"
        >
        <component :is="bcFilterAttrib"
            v-for="(localCriteria, idx) in filter.criteria" :key="idx"
            @meta-attrib-selected="onMetaAttribSelected($event, idx)"
            @meta-attrib-removed="onAttribRemoved(idx)"
            :meta-attribs="localMetaAttribs"
            :criteria="localCriteria"
            :ui="ui" ref="attrib">
        </component>
        </bc-filter-group>
</template>

<script>
    import bcFilterGroup from './bc-filter-group.vue';
    import bcFilterAttrib from './bc-filter-attrib.vue';
    import bcService from './services/bc-services.js';

    export default {
        name: 'bc-attrib-group',
        components: {
            bcFilterGroup,
            bcService
        },
        props: {
            filter: Object,
            ui: String,
            selectedAttrib: Object,
            metaAttribs: Array
        },
        data() {
            return {
                localMetaAttribs: this.metaAttribs || [],
                localAttrib: this.selectedAttrib || {},
                bcFilterAttrib
            };
        },
        destroyed() {
            this.$delete(this.filter, 'criteria');
            this.$delete(this.filter, 'operator');
        },
        created() {
            if (this.ui) {
                this.getAttribsFromUI(this.ui);
            }

            this.mountCriteriaByOtherUI();

            this.$forceUpdate();
        },
        methods: {
            async getAttribsFromUI(ui) {
                this.localMetaAttribs = await bcService.getAttribsFromUI(ui);
                this.localMetaAttribs.sort((e1, e2) => {
                    const l1 = e1.label.normalize('NFD');
                    const l2 = e2.label.normalize('NFD');
                    return l1 < l2 ? -1 : (l1 > l2 ? 1 : 0);
                });

                for (const attrib of this.localMetaAttribs) {
                    if (this.filter.criteria) {
                        if (attrib.name === this.filter.criteria[0].attr) {
                            this.localAttrib = attrib;
                            break;
                        }
                    } else {
                        if (attrib.name === this.filter.attr) {
                            this.localAttrib = attrib;
                        }
                    }
                }
            },
            onOperatorChanged(operator) {
                this.filter.operator = operator;
                this.$emit('operator-changed', operator);
            },
            onMetaAttribSelected(localAttrib, idx) {
                let localCriteria = this.filter.criteria[idx];
                if (localAttrib.type === '_meta_ui') {
                    this.$delete(localCriteria, 'attr');
                    this.$delete(localCriteria, 'operator');
                    this.$delete(localCriteria, 'criteria');
                    this.$forceUpdate();
                }
                this.$set(localCriteria, 'attr', localAttrib.name);
                this.mountNewAttrib(localAttrib, localCriteria);
                const hashEmptyObject = this.filter.criteria.filter(obj => {
                    return !Object.entries(obj).length;
                });
                if (!hashEmptyObject.length) {
                    this.filter.criteria.push({});
                }

                // this.localMetaAttribs = [];
                //this.getAttribsFromUI(localAttrib.metaType);
            },
            onAttribRemoved() {
                console.log('onAttribRemoved');
            },
            mountNewAttrib(localAttrib, localCriteria) {
                if (localAttrib.type !== '_meta_ui') {
                    return;
                }
                if (!localCriteria.hash) {
                    this.$set(localCriteria, 'hash', Math.random());
                }
                this.$set(localCriteria, 'operator', 'and');
                this.$set(localCriteria, 'criteria', [{}]);
                this.$set(localCriteria, 'attr', localAttrib.name);

                this.$delete(localCriteria, 'oper');
                this.$delete(localCriteria, 'val');
            },
            mountCriteriaByOtherUI() {
                if (!this.filter.criteria) {
                    this.$set(this.filter, 'criteria', [{}]);
                    this.$set(this.filter, 'operator', 'and');
                    return;
                }
                // for (const criteria of this.filter.criteria) {
                //     const isOtherUI = criteria.attr.indexOf('.');
                //     if (isOtherUI === -1) {
                //         this.filter.criteria.push({});
                //         continue;
                //     }
                //     const ui = criteria.attr.substr(0, isOtherUI);

                //     this.$set(criteria, 'operator', 'and');
                //     this.$set(criteria, 'criteria', [{
                //         attr: criteria.attr.substr(isOtherUI + 1,
                //             criteria.attr.length),
                //         oper: criteria.oper,
                //         val: criteria.val
                //     }, {}]);
                //     this.$set(criteria, 'attr', ui);

                //     this.$delete(criteria, 'oper');
                //     this.$delete(criteria, 'val');
                // }
            },
            generateHash(item) {
                if (item.hash) {
                    return item.hash;
                }
                return item.hash = Math.random();
            }
        }
    };
</script>
