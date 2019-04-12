<template>
        <bc-filter-group
            v-if="filter.criteria[0]"
            class="bc-filter-group"
            ref="attribsGroup"
            :criteria-size="filter.criteria.length"
            :operator="filter.operator"
            @operator-changed="onOperatorChanged"
        >
            <bc-filter-attrib                                        
                v-for="(localCriteria, idx) in filter.criteria" :key="idx"
                @meta-attrib-selected="onMetaAttribSelected"
                @meta-attrib-removed="onAttribRemoved(idx)"
                :meta-attribs="metaAttribs" :criteria="localCriteria"
                :recursive-attrib="localAttrib"
                :ui="ui" ref="attrib">
            </bc-filter-attrib>
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
            bcFilterAttrib,
            bcService
        },
        props: {
            filter: Object,
            ui: String,
            selectedAttrib: Object
        },
        data() {
            return {
                metaAttribs: [],
                localAttrib: this.selectedAttrib || {}
            };
        },
        beforeCreate() {
            this.$options.components.bcFilterAttrib = require('./bc-filter-attrib.vue').default;
        },
        destroyed() {
            this.$delete(this.filter, 'criteria');
            this.$delete(this.filter, 'operator');
        },
        created() {
            if (!this.filter.criteria) {
                this.insertEmptyCriteria();
            }
            if (this.ui) {
                this.getAttribsFromUI();

                for (const attrib of this.metaAttribs) {
                    if (attrib.name === this.filter.criteria[0].attr) {
                        this.localAttrib = attrib;
                        break;
                    }
                }
            }
        },
        methods: {
            // insertEmptyCriteria() {
            //     this.$set(this.filter, 'operator', this.localOperator);
            //     this.$set(this.filter, 'attr', this.ui);
            //     this.$set(this.filter, 'criteria', [{}]);
            // },
            insertEmptyCriteria() {
                if (this.filter.criteria instanceof Array) return;
                for (let item of this.filter.criteria) {
                    if (!Object.entries(item).length) {
                        return;
                    }
                }
                if (this.filter.ui) {
                    this.filter.criteria.push({});
                }
            },
            async getAttribsFromUI() {
                this.metaAttribs = await bcService.getAttribsFromUI(this.ui);
                this.metaAttribs.sort((e1, e2) => {
                    const l1 = e1.label.normalize('NFD');
                    const l2 = e2.label.normalize('NFD');
                    return l1 < l2 ? -1 : (l1 > l2 ? 1 : 0);
                });
            },
            onOperatorChanged(operator) {
                this.filter.operator = operator;
                this.$emit('operator-changed', operator);
            },
            onMetaAttribSelected(localCriteria) {
                console.log('onMetaAttribSelected');
                this.$set(this.filter.criteria, 'attr', localCriteria.name);
                //this.insertEmptyCriteria();
            },
            onAttribRemoved() {
                console.log('onAttribRemoved');
            }
        }
    };
</script>
