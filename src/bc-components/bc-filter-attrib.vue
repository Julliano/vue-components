/* eslint-disable prefer-destructuring */
<style scoped lang="scss">
    @import "styles/variables";
    @import "styles/buttons";

    .bc-filter-attrib {
        display: inline-flex;
        flex-direction: column;
    }
    .options-container {
        display: inline-flex;
        align-items: center;
    }
    .meta-ui{
        flex-basis: 100%;
    }
</style>

<template>
    <div>
        <div class="bc-filter-attrib" v-if="metaAttribs.length">
            <div class="options-container" v-for="(item, index) in checkLevel()" :key="generateHash(item)">
                <select class="inp" @change="fireAttribSelected(index)" v-model="selectedAttrib">
                    <option :value="null" disabled>{{'select' | i18n}}</option>
                    <option v-for="(opt, idx) in localAttribs || metaAttribs" :key="idx"
                            :value="opt"
                    >
                      {{opt.label}}
                    </option>
                </select>
                <button class="btn btn-filter" @click="fireAttribRemoved" v-if="selectedAttrib && selectedAttrib.type === '_meta_ui'">
                    <i class="mdi mdi-close"></i>
                </button>
                <button class="btn btn-small btn-filter" v-if="!item.attr" @click="fireNewGroup">{{'newGroup' | i18n}}</button>
                <bc-filter-operators v-else-if="selectedAttrib && selectedAttrib.type !== '_meta_ui'"
                    :auto-complete="selectedAttrib.autocomplete" :look-up="selectedAttrib.lookup"
                    :tipo-attrib="selectedAttrib.type" :ui-name="ui"
                    :attrib-name="selectedAttrib.name" :criteria="item"
                    @meta-operator-selected="onMetaOperatorSelected($event, item)"
                    @meta-operator-removed="fireAttribRemoved"
                    @data-option-selected="onDataOptionSelected($event, idx)"
                    ref="operator"
                ></bc-filter-operators>
            </div>
            <bc-attrib-group
                class="meta-ui margin-top" v-if="selectedAttrib && selectedAttrib.type === '_meta_ui'"
                :meta-attribs="metaAttribs"
                :filter="criteria"
                :ui="selectedAttrib.metaType"
                :selectedAttrib = "selectedAttrib"
                ref="attribGroup">
            </bc-attrib-group>
        </div>
    </div>
</template>

<script>

    import i18n from './utils/i18n.js';
    import BcFilterOperators from './bc-filter-operators.vue';
    import BcAttribGroup from './bc-attrib-group.vue';
    import bcService from './services/bc-services.js';

    export default {
        name: 'bc-filter-attrib',
        mixins: [i18n.mixin],
        components: {
            BcFilterOperators,
            BcAttribGroup,
            bcService
        },
        props: {
            criteria: {
                attr: String,
                oper: String,
                val: Array,
                hash: Number,
                criteria: Array
            },
            metaAttribs: Array,
            ui: String,
            fatherAttr: String
        },
        data() {
            return {
                localAttribs: null,
                selectedAttrib: null
            };
        },
        methods: {
            fireAttribSelected() {
                if (this.selectedAttrib.type !== '_meta_ui') {
                    this.$delete(this.criteria, 'criteria');
                    this.$delete(this.criteria, 'operator');
                }
                this.$emit('meta-attrib-selected', this.selectedAttrib);
            },
            fireAttribRemoved() {
                this.$emit('meta-attrib-removed');
            },
            fireNewGroup() {
                this.$emit('new-group', this.criteria);
            },
            async getAttribsFromUI() {
                this.localAttribs = await bcService.getAttribsFromUI(this.ui);
                this.localAttribs.sort((e1, e2) => {
                    const l1 = e1.label.normalize('NFD');
                    const l2 = e2.label.normalize('NFD');
                    return l1 < l2 ? -1 : (l1 > l2 ? 1 : 0);
                });
                this.localAttribs = this.localAttribs.filter(attrib => {
                    return attrib.type !== '_audio' && attrib.type !== '_coordenada';
                });
                console.log(this.localAttribs);
            },
            onMetaOperatorSelected(operator, criteria) {
                if (!operator) {
                    this.$delete(criteria, 'val');
                    return this.$delete(criteria, 'oper');
                }
                return this.$set(criteria, 'oper', operator.name);
            },
            repassFieldSelected(param) {
                this.$emit('meta-field-selected', param);
            },
            // eslint-disable-next-line complexity
            checkLevel() {
                let {attr} = {...this.criteria};
                let selectedAttrib = this.metaAttribs.filter(attrib => {
                    return attrib.name === attr;
                });
                let otherUI = false;
                if (selectedAttrib[0] && selectedAttrib[0].metaType) {
                    otherUI = true;
                }

                if (this.fatherAttr && attr && otherUI) {
                    attr = this.fatherAttr;
                } else {
                    if (!Object.entries(this.criteria).length) {
                        return [{}];
                    }
                    if (this.criteria.criteria && !this.criteria.attr) {
                        this.mountOtherUIOrGroup(this.criteria, this.criteria.criteria);
                    } else {
                        const isOtherUI = this.criteria.attr.indexOf('.');
                        if (isOtherUI !== -1) {
                            attr = this.criteria.attr.substr(0, isOtherUI);
                        }
                    }
                }
                for (const attrib of this.metaAttribs) {
                    if (attrib.name === attr) {
                        this.selectedAttrib = attrib;
                        if (attrib.type === '_meta_ui') this.mountCriteriaByOtherUI(this.criteria);
                        break;
                    }
                }
                return [this.criteria];
            },
            // eslint-disable-next-line max-len
            mountOtherUIOrGroup(fatherCriteria, criterios, isOtherUI = false, lastAttr = null, auxCriteria = []) {
                if (criterios.length !== 1) {
                    for (let criteria of criterios) {
                        if (!criteria.criteria) {
                            isOtherUI = false;
                            break;
                        }
                        if (criteria.attr) {
                            if (!lastAttr) {
                                lastAttr = criteria.attr;
                                isOtherUI = true;
                                continue;
                            }

                            if (lastAttr === criteria.attr) {
                                isOtherUI = true;
                                continue;
                            }

                            isOtherUI = false;
                            break;
                        } else {
                            if (criteria.criteria instanceof Array) {
                                this.mountOtherUIOrGroup(criteria,
                                    criteria.criteria, isOtherUI, lastAttr, auxCriteria);
                            }
                        }
                    }
                } else {
                    console.log('É um grupo com 1 criterio dentro.');
                    return;
                }

                if (isOtherUI) {
                    auxCriteria = this.mountOtherUIOrGroupCriteria(fatherCriteria,
                        criterios, auxCriteria);
                    delete fatherCriteria.criteria;
                    this.$set(fatherCriteria, 'criteria', auxCriteria);
                }

                console.log(`Outra UI: ${isOtherUI}`);
            },
            mountOtherUIOrGroupCriteria(fatherCriteria, criterios, auxCriteria) {
                if (criterios instanceof Array) {
                    for (let criterio of criterios) {
                        if (criterio.criteria.length === 1) {
                            if (!fatherCriteria.attr) {
                                this.$set(fatherCriteria, 'attr', criterio.attr);
                            }
                            auxCriteria = auxCriteria.concat(criterio.criteria);
                        } else {
                            auxCriteria = this.mountOtherUISubNiveis(criterio, auxCriteria);
                        }
                    }
                }
                return auxCriteria;
            },
            mountOtherUISubNiveis(criteria, auxCriteria) {
                for (let currentCriteria of criteria.criteria) {
                    // eslint-disable-next-line prefer-destructuring
                    let attr = currentCriteria.attr;
                    const isOtherUI = attr.indexOf('.');
                    // eslint-disable-next-line max-depth
                    if (isOtherUI !== -1) {
                        currentCriteria.attr = attr.substr(isOtherUI + 1, attr.length);
                        attr = attr.substr(0, isOtherUI);

                        // eslint-disable-next-line prefer-destructuring
                        this.$set(criteria, 'attr', attr);
                    }
                }

                return auxCriteria.concat(criteria);
            },
            mountCriteriaByOtherUI(criteria) {
                const isOtherUI = criteria.attr.indexOf('.');
                if (isOtherUI === -1) {
                    return;
                }
                const ui = criteria.attr.substr(0, isOtherUI);

                this.$set(criteria, 'operator', 'and');
                this.$set(criteria, 'criteria', [{
                    attr: criteria.attr.substr(isOtherUI + 1, criteria.attr.length),
                    oper: criteria.oper,
                    val: criteria.val
                }, {}]);
                this.$set(criteria, 'attr', ui);
                this.$delete(criteria, 'oper');
                this.$delete(criteria, 'val');
            },
            mountCriteriaByOtherUIRecursive(criteria) {
                for (const localCriteria of criteria) {
                    const isOtherUI = localCriteria.attr.indexOf('.');
                    if (isOtherUI === -1) {
                        return;
                    }
                    const ui = localCriteria.attr.substr(0, isOtherUI);
                    this.$set(criteria, 'attr', ui);
                    this.$set(localCriteria, 'attr', localCriteria.attr.substr(isOtherUI + 1, localCriteria.attr.length));
                }

            },
            generateHash(item) {
                if (item.hash) {
                    return item.hash;
                }
                return item.hash = Math.random();
            }
        },
        watch: {
            criteria() {
                if (Object.entries(this.criteria).length) return;
                this.selectedAttrib = null;
            },
            ui() {
                this.getAttribsFromUI();
            }
        }
    };
</script>
