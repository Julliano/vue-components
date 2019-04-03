<style scoped lang="scss">
    @import "../styles/variables.scss";
    @import "styles/buttons.scss";

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
                    <option value="" disabled :selected="ui.id === null">{{'select' | i18n}}</option>
                    <option v-for="(opt, idx) in uis" :key="idx"
                            :value="idx"
                            :selected="ui.id === opt.id"
                    >
                        {{opt.label}}
                    </option>
                </select>
                <bc-filter-source-menu v-if="showSourceOption" :uiProps="ui.id" :uniqueId="Math.random()" :source-types="sourceTypes"
                                       @apply="applySelectedFilters" :sourcesSelectedProp="ui.sourcesSelected"></bc-filter-source-menu>
                <button class="btn btn-filter-icon" v-if="ui.id !== null">
                    <i class="mdi mdi-close" @click="fireUIRemoved"></i>
                </button>
            </div>
            <bc-filter-group
                 v-if="ui.attribs && ui.attribs.length > 0"
                 class="bc-filter-group"
                 ref="attribsGroup"
                 @type-changed="onTypeChanged"
            >
                <bc-filter-attrib
                    v-for="(attrib, idx) in ui.attribs" :key="idx"
                    @meta-attrib-selected="onMetaAttribSelected($event, attrib, idx)"
                    @meta-attrib-removed="onAttribRemoved(idx)"
                    :meta-attribs="attribs" :attrib="attrib" ref="attrib"
                >
                    <bc-filter-operators slot="operator" v-if="atribType[idx]"
                        :tipo-attrib="atribType[idx]" :ui-name="ui.id"
                        :attrib-name="ui.attribs[idx].id" :operador="operators[idx]"
                        @meta-operator-selected="onMetaOperatorSelected($event, idx)"
                        @meta-operator-removed="onAttribRemoved(idx)"
                        @data-option-selected="onDataOptionSelected($event, idx)"
                        ref="operator"
                    >
                        <bc-filter-fields slot="field" v-if="operators[idx] && operators[idx].name"
                            @meta-field-selected="onMetaFieldSelected($event, idx)"
                            @meta-field-removed="onAttribRemoved(idx)"
                            @change="onMetaFieldFilled($event, idx)"
                            :hasField="fields[idx]" :operador="operators[idx]"
                            :tipo-attrib="atribType[idx]" :date-option="dataType[idx]" ref="field"
                        >
                        </bc-filter-fields>
                    </bc-filter-operators>
                </bc-filter-attrib>
            </bc-filter-group>
        </div>
    </div>
</template>

<script>

    import BcFilterGroup from './bc-filter-group.vue';
    import BcFilterAttrib from './bc-filter-attrib.vue';
    import BcFilterOperators from './bc-filter-operators.vue';
    import BcFilterFields from './bc-filter-fields.vue';
    import BcFilterSourceMenu from './bc-filter-source-menu.vue';
    import bcService from './services/bc-services.js';
    import i18n from './utils/i18n.js';
    import rename from './utils/rename-key.js';

    export default {
        name: 'bc-filter-ui',
        mixins: [i18n.mixin],
        components: {
            BcFilterSourceMenu,
            BcFilterAttrib,
            BcFilterGroup,
            BcFilterOperators,
            BcFilterFields,
            bcService
        },
        props: {
            ui: Object,
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
                type: 'AND'
            };
        },
        async created() {
            await this.loadMetadada();
        },
        computed: {
            showSourceOption() {
                if (!this.sourceTypes || this.ui.id === null) {
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
            async loadMetadada() {
                this.uis = await bcService.getLabelUIs(this.logicNameUis);
            },
            applySelectedFilters(sourcesSelected) {
                this.ui.sourcesSelected = sourcesSelected;
                this.$forceUpdate();
            },
            buildBaseObject(uiId) {
                this.newFilter[uiId] = {};
                this.newFilter[uiId][this.type] = [];
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
            async fireUISelected(e) {
                const metaUI = this.uis[e.target.value];
                this.removeChangedUi();
                this.lastMetaUiSelected = metaUI.id;
                this.buildBaseObject(metaUI.id);
                this.attribs = await bcService.getAttribsFromUI(metaUI.id);
                this.attribs.sort((e1, e2) => {
                    const l1 = e1.label.normalize('NFD');
                    const l2 = e2.label.normalize('NFD');
                    return l1 < l2 ? -1 : (l1 > l2 ? 1 : 0);
                });
                this.operators = [];
                this.atribType = [];
                this.fields = [];
                this.$emit('meta-ui-selected', metaUI);
                console.log(this.newFilter);
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
            onMetaAttribSelected(metaAttrib, attrib, idx) {
                attrib.id = metaAttrib.name;
                const emptyAttrib = this.ui.attribs.find((e)=>e.id === null);
                this.atribType[idx] = this.checkType(metaAttrib.type);
                if (this.operators[idx]) {
                    this.operators.splice(idx, 1);
                    this.fields.splice(idx, 1);
                }

                if (!emptyAttrib) {
                    // adiciona novo grupo de attribs
                    this.ui.attribs.push({id: null});
                }

                this.$forceUpdate();

                this.$nextTick(()=>{
                    this.$refs.attribsGroup.updateGroups();
                    this.$refs.operator[idx].attribChanged();
                });
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
            onTypeChanged(type) {
                this.newFilter[this.lastMetaUiSelected] = rename(this.type,
                    type, this.newFilter[this.lastMetaUiSelected]);
                this.type = type;
                console.log(this.newFilter);
                this.$emit('operator-changed', this.newFilter);
            }
        }
    };
</script>
