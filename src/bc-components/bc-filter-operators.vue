<style scoped lang="scss">
    @import "styles/variables";
    @import "styles/buttons";

    .bc-filter-operator {
        display: inline-flex;
        flex-direction: column;
        margin-left: 5px;
    }
    .options-container {
        display: inline-flex;
        align-items: center;
    }
</style>

<template>
    <div>
        <div class="bc-filter-operator">
            <div class="options-container">
                <select class="inp" @change="fireOperatorSelected">
                    <option value="" disabled :selected="operator.id === null">Selecione</option>
                    <option v-for="(opt, idx) in metaOperators" :key="idx"
                            :value="idx" :selected="operator.id === opt.id"
                    >
                        {{opt.name}}
                    </option>
                </select>
                <button class="btn btn-filter" v-if="!operator.id && operator.id !== 0">
                    <i class="mdi mdi-close" @click="fireOperatorRemoved"></i>
                </button>
                <bc-filter-fields v-if="operator && operator.id"
                    @meta-field-selected="repassMetaFieldSelected"
                    @meta-field-removed="fireOperatorRemoved"
                    :operador="operator" :tipo-operador="tipoOperador"
                    :index="index"
                >
                </bc-filter-fields>
            </div>
        </div>
    </div>
</template>

<script>
    import BcFilterFields from './bc-filter-fields';
    import metadata from './metadata';

    export default {
        name: 'bc-filter-operator',
        components: {
            BcFilterFields
        },
        props: {
            tipoOperador: {
                type: String,
                default: null
            },
            index: Number
        },
        data() {
            return {
                operator: {
                    id: null
                },
                metaOperators: [],
                render: true
            };
        },
        created() {
            this.metaOperators = metadata.operators[this.tipoOperador];
        },
        methods: {
            fireOperatorSelected(e) {
                const metaOperator = this.metaOperators[e.target.value];
                this.operator = metaOperator;
                this.$emit('meta-operator-selected', this.index, metaOperator);
                this.$forceUpdate();
            },
            fireOperatorRemoved(idx) {
                if (idx === this.index) {
                    this.$emit('meta-operator-removed', this.index);
                }
            },
            repassMetaFieldSelected(param) {
                this.$emit('meta-field-selected', param);
            }
        }
        // watch: {
        //     tipoOperador() {
        //         this.metaOperators = metadata.operators[this.tipoOperador];
        //         this.operator = {id: null};
        //         this.$forceUpdate();
        //     }
        // }
    };
</script>
