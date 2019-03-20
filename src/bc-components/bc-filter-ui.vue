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
                    <option value="" disabled :selected="ui.id === null">Selecione</option>
                    <option v-for="(opt, idx) in uis" :key="idx"
                            :value="idx"
                            :selected="ui.id === opt.id"
                    >
                        {{opt.name}}
                    </option>
                </select>
                <bc-filter-source-menu v-if="showSourceOption"></bc-filter-source-menu>
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
                        :tipo-operador="atribType[idx]" :operador="operators[idx]"
                        @meta-operator-selected="onMetaOperatorSelected($event, idx)"
                        @meta-operator-removed="onAttribRemoved(idx)"
                        ref="operator"
                    >
                        <bc-filter-fields slot="field" v-if="operators[idx] && operators[idx].id"
                            @meta-field-selected="onMetaFieldSelected($event, idx)"
                            @meta-field-removed="onAttribRemoved(idx)"
                            :hasField="fields[idx]" :operador="operators[idx]"
                            :tipo-operador="atribType[idx]" ref="field"
                        >
                        </bc-filter-fields>
                    </bc-filter-operators>
                </bc-filter-attrib>
            </bc-filter-group>
        </div>
    </div>
</template>

<script>
    import BcFilterGroup from './bc-filter-group';
    import BcFilterAttrib from './bc-filter-attrib';
    import BcFilterOperators from './bc-filter-operators';
    import BcFilterFields from './bc-filter-fields';
    import BcFilterSourceMenu from './bc-filter-source-menu';
    import bcService from './services/bc-services.js';

    export default {
        name: 'bc-filter-ui',
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
        computed: {
            pageText() {
                return this.$store.state.i18n.languageText;
            }
        },
        methods: {
            async fireUISelected(e) {
                const metaUI = this.uis[e.target.value];
                this.$emit('meta-ui-selected', metaUI);
                this.attribs = await bcService.getAttribsFromUI(metaUI.id);
                this.attribs.sort((e1, e2) => {
                    const l1 = e1.label.normalize('NFD');
                    const l2 = e2.label.normalize('NFD');
                    return l1 < l2 ? -1 : (l1 > l2 ? 1 : 0);
                });
            },
            fireUIRemoved() {
                this.$emit('meta-ui-removed', this.attrib);
            },

            onMetaAttribSelected(metaAttrib, attrib, idx) {
                attrib.id = metaAttrib.name;
                const emptyAttrib = this.ui.attribs.find((e)=>e.id === null);
                this.atribType[idx] = metaAttrib.type;
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
