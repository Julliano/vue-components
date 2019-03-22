<style scoped lang="scss">
    @import "../styles/variables";
    @import "styles/buttons";

    .bc-filter-ui {
        display: inline-flex;
        flex-direction: column;

        .bc-filter-group {
            margin-top: $normal-space;
        }
    }
</style>

<template>
    <div>
        <div class="bc-filter-ui">
            <div>
                <select class="inp" @change="fireUISelected" v-if="uis">
                    <option value="" disabled :selected="ui.id === null">{{'select' | i18n}}</option>
                    <option v-for="(opt, idx) in uis" :key="idx"
                            :value="idx"
                            :selected="ui.id === opt.id"
                    >
                        {{opt.name}}
                    </option>
                </select>
                <bc-filter-source-menu v-if="showSourceOption" :uiProps="ui.id"
                    @apply="applySelectedFilters" :sourcesSelectedProp="ui.sourcesSelected"></bc-filter-source-menu>
                <button class="btn btn-filter-icon" v-if="ui.id !== null">
                    <i class="mdi mdi-close" @click="fireUIRemoved"></i>
                </button>
            </div>
            <bc-filter-group
                 v-if="ui.attribs && ui.attribs.length > 0"
                 class="bc-filter-group"
                 ref="attribsGroup"

            >
                <bc-filter-attrib
                    v-for="(attrib, idx) in ui.attribs" :key="idx"
                    @meta-attrib-selected="onMetaAttribSelected($event, attrib, idx)"
                    @meta-attrib-removed="onAttribRemoved(idx)"
                    :meta-attribs="attribs" :attrib="attrib" ref="attrib"
                >
                    <bc-filter-operators slot="operator" v-if="atribType[idx]"
                        :tipo-operador="atribType[idx]" :ui-name="ui.id" 
                        :attrib-name="ui.attribs[idx].id" :operador="operators[idx]"
                        @meta-operator-selected="onMetaOperatorSelected($event, idx)"
                        @meta-operator-removed="onAttribRemoved(idx)"
                        ref="operator"
                    >
                        <bc-filter-fields slot="field" v-if="operators[idx] && operators[idx].name"
                            @meta-field-selected="onMetaFieldSelected($event, idx)"
                            @meta-field-removed="onAttribRemoved(idx)"
                            :hasField="fields[idx]" :operador="operators[idx]"
                            :tipo-attrib="atribType[idx]" ref="field"
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
            showSourceOption: Boolean
        },
        data() {
            return {
                attribs: [],
                operators: [],
                atribType: [],
                fields: [],
                uis: []
            };
        },
        created() {
            this.uis = bcService.getLabelUIs(this.logicNameUis);
        },
        methods: {
            applySelectedFilters(sourcesSelected) {
                this.ui.sourcesSelected = sourcesSelected;
                this.$forceUpdate();
            },
            async fireUISelected(e) {
                const metaUI = this.uis[e.target.value];
                this.$emit('meta-ui-selected', metaUI);
                this.attribs = await bcService.getAttribsFromUI(metaUI.id);
                this.attribs.sort((e1, e2) => {
                    const l1 = e1.label.normalize('NFD');
                    const l2 = e2.label.normalize('NFD');
                    return l1 < l2 ? -1 : (l1 > l2 ? 1 : 0);
                });
                this.operators = [];
                this.atribType = [];
                this.fields = [];
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
                this.ui.attribs.splice(idx, 1);

                this.$nextTick(()=>{
                    this.$refs.attribsGroup.updateGroups();
                });
                this.$forceUpdate();

            },
            onMetaOperatorSelected(obj, idx) {
                obj.name = obj.name.toUpperCase();
                this.operators[idx] = obj;
                this.$forceUpdate();
            },
            onMetaFieldSelected(obj, idx) {
                this.fields[idx] = obj;
                this.$forceUpdate();
            }
        }
    };
</script>
