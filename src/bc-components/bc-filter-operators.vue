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
                <slot></slot>
            </div>
        </div>
    </div>
</template>

<script>
    import metadata from './metadata';

    export default {
        name: 'bc-filter-operator',
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
                this.$emit('meta-operator-selected', metaOperator, this.index);
            },
            fireOperatorRemoved() {
                this.$emit('meta-operator-removed');
            }
        },
        watch: {
            tipoOperador() {
                this.metaOperators = metadata.operators[this.tipoOperador];
                this.operator = {id: null};
                this.$forceUpdate();
            }
        }
    };
</script>
