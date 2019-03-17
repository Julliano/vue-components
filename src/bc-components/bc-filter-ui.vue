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
                    @meta-attrib-removed="onAttribRemoved(idx)"
                    @meta-operator-selected="onMetaOperatorSelected"
                    @meta-field-selected="onMetaFieldSelected"
                    :meta-attribs="attribs" :atrib-type="atribType[idx]"
                    :attrib="attrib" :index="idx"
                >
                </bc-filter-attrib>
            </bc-filter-group>
        </div>
    </div>
</template>

<script>
    import BcFilterGroup from './bc-filter-group';
    import BcFilterAttrib from './bc-filter-attib';
    import metadata from './metadata';

    export default {
        name: 'bc-filter-ui',
        components: {
            BcFilterAttrib,
            BcFilterGroup
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

            onMetaAttribSelected(metaAttrib, attrib, idx) {
                attrib.id = metaAttrib.id;
                const emptyAttrib = this.ui.attribs.find((e)=>e.id === null);
                this.atribType[idx] = metaAttrib.tipo;
                if (this.operators[idx]) this.operators.splice(idx, 1);

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
                this.atribType.splice(idx, 1);
                this.operators.splice(idx, 1);
                this.ui.attribs.splice(idx, 1);

                this.$nextTick(()=>{
                    this.$refs.attribsGroup.updateGroups();
                });

            },
            onMetaOperatorSelected(obj, idx) {
                this.operators[idx] = obj;
                this.$forceUpdate();
            },
            onMetaFieldSelected(obj) {
                console.log(obj);
            }
        }
    };
</script>
