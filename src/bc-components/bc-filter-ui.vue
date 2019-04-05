<style scoped lang="scss">
    @import "../styles/variables";
    @import "styles/buttons";

    .bc-filter-ui {
        display: inline-flex;
        flex-direction: column;

        .bc-filter-group {
            margin-top: $normal-space;
        }

        .bc-filter-ui-main {
            white-space: nowrap;
        }
    }
</style>

<template>
    <div>
        <div class="bc-filter-ui">
            <div class="bc-filter-ui-main">
                <select class="inp" @change="fireUISelected" v-if="uis">
                    <option value="" disabled :selected="uiFilter.ui === null">{{'select' | i18n}}</option>
                    <option v-for="(opt, idx) in uis" :key="idx"
                            :value="idx"
                            :selected="uiFilter.ui === opt.name"
                    >
                        {{opt.label}}
                    </option>
                </select>
                <bc-filter-source-menu v-if="showSourceOption" :uiProps="uiFilter.ui" :uniqueId="Math.random()" :source-types="sourceTypes"
                                       @apply="applySelectedFilters" :sourcesSelectedProp="uiFilter.sources"></bc-filter-source-menu>
                <button class="btn btn-filter-icon" v-if="uiFilter.ui !== null">
                    <i class="mdi mdi-close" @click="fireUIRemoved"></i>
                </button>
            </div>
            <bc-filter-group
                 v-if="uiFilter.criteria[0]"
                 class="bc-filter-group"
                 ref="attribsGroup"
                 :criteria-size="uiFilter.criteria.length"
                 :operator="uiFilter.operator"
                 @operator-changed="onOperatorChanged"
            >
                <bc-filter-attrib
                    v-for="(criteria, idx) in uiFilter.criteria" :key="idx"
                    @meta-attrib-selected="onMetaAttribSelected($event, criteria)"
                    @meta-attrib-removed="onAttribRemoved(idx)"
                    @new-group="onNewGroup"
                    :meta-attribs="attribs" :criteria="criteria" ref="attrib"
                >
                    <!--
                     <bc-filter-operators slot="operator" v-if="atribType[idx]"
                        :tipo-attrib="atribType[idx]" :ui-name="uiFilter.ui"
                        :attrib-name="attribs[idx].id" :operador="operators[idx]"
                        @meta-operator-selected="onMetaOperatorSelected($event, idx)"
                        @meta-operator-removed="onAttribRemoved(idx)"
                        @data-option-selected="onDataOptionSelected($event, idx)"
                        ref="operator"
                     ></bc-filter-operators>
                        <bc-filter-fields slot="field" v-if="operators[idx] && operators[idx].name"
                            @meta-field-selected="onMetaFieldSelected($event, idx)"
                            @meta-field-removed="onAttribRemoved(idx)"
                            @change="onMetaFieldFilled($event, idx)"
                            :hasField="fields[idx]" :operador="operators[idx]"
                            :tipo-attrib="atribType[idx]" :date-option="dataType[idx]" ref="field"
                        >
                        </bc-filter-fields>
                    </bc-filter-operators> -->
                </bc-filter-attrib>
            </bc-filter-group>
            <br>
        </div>
    </div>
</template>

<script>
    import Vue from 'vue';
    import BcFilterGroup from './bc-filter-group.vue';
    import BcFilterAttrib from './bc-filter-attrib.vue';
    import BcFilterOperators from './bc-filter-operators.vue';
    import BcFilterFields from './bc-filter-fields.vue';
    import BcFilterSourceMenu from './bc-filter-source-menu.vue';
    import BcAttribGroup from './bc-attrib-group.vue';
    import bcService from './services/bc-services.js';
    import i18n from './utils/i18n.js';

    export default {
        name: 'bc-filter-ui',
        mixins: [i18n.mixin],
        components: {
            BcFilterSourceMenu,
            BcFilterAttrib,
            BcFilterGroup,
            BcFilterOperators,
            BcFilterFields,
            bcService,
            BcAttribGroup
        },
        props: {
            uiFilter: Object,
            logicNameUis: Array,
            sourceTypes: Array,
            idx: Number,
            operator: String
        },
        data() {
            return {
                attribs: [],
                operators: [],
                atribType: [],
                fields: [],
                dataType: [],
                uis: [],
                newFilter: {},
                lastMetaUiSelected: null,
                type: 'AND',
                ui: null,
                showAttribGroup: false
            };
        },
        async created() {
            await this.loadMetadada();
            if (this.uiFilter.ui) {
                await this.getAttribsFromUI(this.uiFilter.ui);
            }
            this.insertEmptyCriteria();
        },
        computed: {
            showSourceOption() {
                if (!this.sourceTypes || this.uiFilter.ui === null) {
                    return false;
                }
                for (const sourceType of this.sourceTypes) {
                    if (sourceType !== 'BANCO_DE_DADOS') {
                        return true;
                    }
                }
                return false;
            }
        },
        methods: {
            insertEmptyCriteria() {
                if (!this.uiFilter.criteria instanceof Array) return;
                for (let item of this.uiFilter.criteria) {
                    if (!Object.entries(item).length) {
                        return;
                    }
                }
                if (this.uiFilter.ui) {
                    this.uiFilter.criteria.push({});
                }
            },
            async loadMetadada() {
                this.uis = await bcService.getLabelUIs(this.logicNameUis);
            },
            applySelectedFilters(sourcesSelected) {
                this.ui.sourcesSelected = sourcesSelected;
                this.$forceUpdate();
            },
            renameKey(obj, oldName, newName) {
                if (oldName === newName) {
                    return obj;
                }
                if (obj.hasOwnProperty(oldName)) {
                    obj[newName] = obj[oldName];
                    delete obj[oldName];
                }
                return obj;
            },
            removeChangedUi(uiId) {
                if (!this.lastMetaUiSelected) {
                    return;
                }
                delete this.newFilter[this.lastMetaUiSelected];
                this.lastMetaUiSelected = uiId;
            },
            async getAttribsFromUI(name) {
                this.attribs = await bcService.getAttribsFromUI(name);
                this.attribs.sort((e1, e2) => {
                    const l1 = e1.label.normalize('NFD');
                    const l2 = e2.label.normalize('NFD');
                    return l1 < l2 ? -1 : (l1 > l2 ? 1 : 0);
                });
            },
            async fireUISelected(e) {
                const metaUI = this.uis[e.target.value];
                await this.getAttribsFromUI(metaUI.name);
                this.operators = [];
                this.atribType = [];
                this.fields = [];
                this.$emit('meta-ui-selected', metaUI);
                /*
                this.$emit('meta-ui-selected', {
                    newFilter: this.newFilter,
                    ids: this.idx
                });

                 */
            },
            fireUIRemoved() {
                this.$emit('meta-ui-removed', this.attrib);
            },
            checkType(type) {
                switch (type) {
                    case '_texto_delimitado':
                        return type;
                    case '_inteiro_32':
                        return type;
                    case '_inteiro_64':
                        return type;
                    case '_decimal_32':
                        return type;
                    case '_decimal_64':
                        return type;
                    case '_tipo_selecao':
                        return type;
                    // case 'metaSelecaoValorada':
                    //     return type;
                    case '_data':
                        return type;
                    // case '_ano':
                    //     return type;
                    case '_hora':
                        return type;
                    case '_data_hora':
                        return type;
                    default:
                        return 'outros';
                }
            },
            onMetaAttribSelected(metaAttrib, criteria) {
                Vue.set(criteria, 'attr', metaAttrib.name);
                this.insertEmptyCriteria();

                // attrib.id = metaAttrib.id;
                // attrib.name = metaAttrib.name;
                // const emptyAttrib = this.attribs.find((e)=>e.id === null);
                // this.atribType[idx] = this.checkType(metaAttrib.type);
                // if (this.operators[idx]) {
                //     this.operators.splice(idx, 1);
                //     this.fields.splice(idx, 1);
                // }

                // if (!emptyAttrib) {
                //     // adiciona novo grupo de attribs
                //     this.attribs.push({id: null});
                // }

                // this.$forceUpdate();

                // this.$nextTick(()=>{
                //     this.$refs.attribsGroup.updateGroups();
                //     this.$refs.operator[idx].attribChanged();
                // });
            },
            onAttribRemoved(idx) {
                this.fields.splice(idx, 1);
                this.atribType.splice(idx, 1);
                this.operators.splice(idx, 1);
                this.operators.splice(idx, 1);
                this.ui.attribs.splice(idx, 1);

                this.$nextTick(()=>{
                    this.$refs.attribsGroup.updateGroups();
                });
                this.$forceUpdate();

            },
            onMetaOperatorSelected(obj, idx) {
                this.operators[idx] = obj;
                this.$forceUpdate();
            },
            onMetaFieldSelected(obj, idx) {
                this.fields[idx] = obj;
                this.$forceUpdate();
            },
            onDataOptionSelected(obj, idx) {
                this.dataType[idx] = obj;
                this.operators.splice(idx, 1);
                this.fields.splice(idx, 1);
                this.$forceUpdate();
            },
            onMetaFieldFilled($event, idx) {
                console.log($event, idx);
            },
            onOperatorChanged(operator) {
                this.uiFilter.operator = operator;
                this.$emit('operator-changed', operator);
            },
            onNewGroup() {
                this.showAttribGroup = true;
            }
        }
    };
</script>
