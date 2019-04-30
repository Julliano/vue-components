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
            @meta-attrib-selected="onMetaAttribSelected($event, localCriteria)"
            @meta-attrib-removed="onAttribRemoved(idx)"
            :meta-attribs="localMetaAttribs"
            :criteria="localCriteria"
            :count-level="localCountLevel"
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
            filter: {
                attr: String,
                oper: String,
                val: Array,
                hash: Number,
                criteria: Array
            },
            ui: String,
            selectedAttrib: Object,
            metaAttribs: Array,
            countLevel: Number
        },
        data() {
            return {
                localMetaAttribs: this.metaAttribs || [],
                localAttrib: this.selectedAttrib || {},
                localCountLevel: this.countLevel,
                bcFilterAttrib
            };
        },
        created() {
            if (this.ui) {
                this.getAttribsFromUI(this.ui);
            }

            this.mountCriteriaByOtherUI();

            this.$forceUpdate();
        },
        methods: {
            validaDados() {
                if (!this.$refs.attrib) {
                    return true;
                }
                let dadosValidos = true;
                let quantiaAtribSelecionada = 0;
                this.$refs.attrib.some(componente => {
                    if (componente.selectedAttrib) {
                        quantiaAtribSelecionada++;
                    } else {
                        return;
                    }
                    if (!componente.validaDados()) {
                        dadosValidos = false;
                        return true;
                    }
                });
                if (quantiaAtribSelecionada === 0) {
                    return false;
                }
                return dadosValidos;
            },
            async getAttribsFromUI(ui) {
                this.localMetaAttribs = await bcService.getAttribsFromUI(ui);
                this.localMetaAttribs.sort((e1, e2) => {
                    const l1 = e1.label.normalize('NFD');
                    const l2 = e2.label.normalize('NFD');
                    return l1 < l2 ? -1 : (l1 > l2 ? 1 : 0);
                });

                this.localMetaAttribs = this.localMetaAttribs.filter(attrib => {
                    return attrib.type !== '_audio' && attrib.type !== '_coordenada';
                });
                if (this.countLevel > 1) {
                    this.localMetaAttribs = this.localMetaAttribs.filter(attrib => {
                        return attrib.type !== '_meta_ui';
                    });
                }

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
            onMetaAttribSelected(localAttrib, localCriteria) {
                if (localAttrib.type === '_meta_ui') {
                    this.$delete(localCriteria, 'attr');
                    this.$delete(localCriteria, 'operator');
                    this.$delete(localCriteria, 'criteria');
                    // this.localCountLevel++;
                    this.$forceUpdate();
                } else {
                    // this.localCountLevel--;
                }
                this.$set(localCriteria, 'attr', localAttrib.name);
                this.mountNewAttrib(localAttrib, localCriteria);
                const hashEmptyObject = this.filter.criteria.filter(obj => {
                    return !Object.entries(obj).length;
                });
                if (!hashEmptyObject.length) {
                    this.filter.criteria.push({});
                }

                this.$forceUpdate();
            },
            onAttribRemoved(idx) {
                this.$delete(this.filter.criteria, idx);
                this.$nextTick(()=>{
                    this.$refs.attribsGroup.updateGroups();
                });
                this.$forceUpdate();
            },
            mountNewAttrib(localAttrib, localCriteria) {
                if (localAttrib.type !== '_meta_ui') {
                    return;
                }
                if (!localCriteria.hash) {
                    this.$set(localCriteria, 'hash', Math.random());
                }
                this.$set(localCriteria, 'operator', 'AND');
                this.$set(localCriteria, 'criteria', [{}]);
                this.$set(localCriteria, 'attr', localAttrib.name);

                this.$delete(localCriteria, 'oper');
                this.$delete(localCriteria, 'val');
            },
            mountCriteriaByOtherUI() {
                if (!this.filter.criteria) {
                    this.$set(this.filter, 'criteria', [{}]);
                    this.$set(this.filter, 'operator', 'AND');
                    this.$delete(this.filter, 'oper');
                    this.$delete(this.filter, 'val');
                    return;
                }
                if (!this.filter.criteria instanceof Array) return;
                const hashEmptyObject = this.filter.criteria.filter(obj => {
                    return !Object.entries(obj).length;
                });
                if (!hashEmptyObject.length) {
                    this.$set(this.filter, 'criteria', this.filter.criteria);
                    this.filter.criteria.push({});
                }
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
