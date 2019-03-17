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
</style>

<template>
    <div>
        <div class="bc-filter-attrib">
            <div class="options-container">
                <select class="inp" @change="fireAttribSelected">
                    <option value="" disabled :selected="attrib.id === null">Selecione</option>
                    <option v-for="(opt, idx) in metaAttribs" :key="idx"
                            :value="idx" :selected="attrib.id === opt.id"
                    >
                        {{opt.name}}
                    </option>
                </select>
                <button class="btn btn-small btn-filter" v-if="!attrib.id">Novo grupo</button>
                <bc-filter-operators v-if="atribType"
                    :tipo-operador="atribType" :index="index"
                    @meta-operator-selected="repassOperatorSelected"
                    @meta-operator-removed="fireOperatorRemoved"
                    @meta-field-selected="repassFieldSelected"
                >
                </bc-filter-operators>
            </div>
        </div>
    </div>
</template>

<script>

    import BcFilterOperators from './bc-filter-operators';

    export default {
        name: 'bc-filter-attrib',
        components: {
            BcFilterOperators
        },
        props: {
            attrib: {
                id: ''
            },
            index: Number,
            atribType: String,
            metaAttribs: Array,
            showSourceOption: Boolean,
            chield: false
        },
        data() {
            return {
                atributo: {}
            };
        },
        methods: {
            fireAttribSelected(e) {
                const metaAttrib = this.metaAttribs[e.target.value];
                this.atributo = metaAttrib;
                this.$emit('meta-attrib-selected', metaAttrib);
                this.$forceUpdate();
            },
            fireOperatorRemoved(idx) {
                if (idx === this.index) {
                    this.$emit('meta-attrib-removed');
                }
            },
            repassOperatorSelected(index, obj) {
                if (index === this.index) {
                    this.$emit('meta-operator-selected', obj, this.index);
                }
            },
            repassFieldSelected(param) {
                this.$emit('meta-field-selected', param);
            }
        }
    };
</script>
