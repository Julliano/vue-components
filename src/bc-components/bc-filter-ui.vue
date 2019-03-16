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
                <select class="inp" @change="fireUISelected">
                    <option value="" disabled :selected="ui.id === null">Selecione</option>
                    <option v-for="(opt, idx) in metaUis" :key="idx"
                            :value="idx"
                            :selected="ui.id === opt.id"
                    >
                        {{opt.name}}
                    </option>
                </select>
                <button class="btn btn-filter-icon" v-if="showSourceOption">
                    <i class="mdi mdi-database"></i>
                </button>
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
                    :meta-attribs="attribs"
                    :attrib="attrib"
                >
                    <bc-filter-operators v-if="ui.attribs[idx] && ui.attribs[idx].id"
                        :tipo-operador="selectedAtribType(idx)" :index="idx"
                        @meta-operator-selected="onMetaOperatorSelected"
                        @meta-operator-removed="onAttribRemoved(idx)"
                    >
                        <bc-filter-fields v-if="atribType[idx]"
                            :tipo-operador="selectedAtribType(idx)"
                            @meta-field-selected="onMetaFieldSelected"
                            @meta-field-removed="onAttribRemoved(idx)"
                            :operador="selectedOperator(idx)"
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
    import BcFilterAttrib from './bc-filter-attib';
    import BcFilterOperators from './bc-filter-operators';
    import BcFilterFields from './bc-filter-fields';
    import metadata from './metadata';

    export default {
        name: 'bc-filter-ui',
        components: {
            BcFilterAttrib,
            BcFilterGroup,
            BcFilterOperators,
            BcFilterFields
        },
        props: {
            ui: Object,
            metaUis: Array,
            showSourceOption: Boolean
        },
        data() {
            return {
                attribs: metadata.attribs,
                operators: [],
                atribType: []
            };
        },
        methods: {
            fireUISelected(e) {
                const metaUI = this.metaUis[e.target.value];
                this.$emit('meta-ui-selected', metaUI);
            },
            fireUIRemoved() {
                this.$emit('meta-ui-removed', this.attrib);
            },
            selectedAtribType(idx) {
                return this.atribType[idx] ? this.atribType[idx] : null;
            },
            selectedOperator(idx) {
                return this.operators[idx] ? this.operators[idx] : null;
            },
            onMetaAttribSelected(metaAttrib, attrib, idx) {
                attrib.id = metaAttrib.id;
                const emptyAttrib = this.ui.attribs.find((e)=>e.id === null);
                this.atribType[idx] = metaAttrib.tipo;

                if (!emptyAttrib) {
                    // adiciona novo grupo de attribs
                    this.ui.attribs.push({id: null});
                }

                this.$forceUpdate();

                this.$nextTick(()=>{
                    this.$refs.attribsGroup.updateGroups();
                });
            },
            onAttribRemoved(idx) {
                this.atribType.slice(idx, 1);
                this.ui.attribs.splice(idx, 1);

                this.$nextTick(()=>{
                    this.$refs.attribsGroup.updateGroups();
                });
            },
            onMetaOperatorSelected(obj, idx) {
                this.operators[idx] = obj;
            },
            onMetaFieldSelected(obj) {
                console.log(obj);
            }
        }
    };
</script>
