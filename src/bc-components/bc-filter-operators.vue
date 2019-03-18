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
                <select class="inp" @change="fireOperatorSelected" v-model="operator">
                    <option value="" disabled :selected="operator.id === ''">Selecione</option>
                    <option v-for="(opt, idx) in metaOperators" :key="idx" :value="opt">
                        {{opt.name}}
                    </option>
                </select>
                <button class="btn btn-filter" @click="fireOperatorRemoved"
                    v-if="!operator.id && operator.id !== 0">
                    <i class="mdi mdi-close"></i>
                </button>
                <slot name="field"></slot>
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
                    id: null,
                    autoComplete: Boolean,
                    name: String
                },
                metaOperators: [],
                render: true
            };
        },
        created() {
            this.metaOperators = metadata.operators[this.tipoOperador];
            if (this.operador) console.log('oi');
        },
        methods: {
            fireOperatorSelected() {
                // const metaOperator = this.metaOperators[e.target.value];
                // this.operator = metaOperator;
                this.$emit('meta-operator-selected', this.operator);
                this.$forceUpdate();
            },
            fireOperatorRemoved() {
                this.$emit('meta-operator-removed');
            },
            repassMetaFieldSelected(param) {
                this.$emit('meta-field-selected', param);
            },
            attribChanged() {
                this.metaOperators = metadata.operators[this.tipoOperador];
                this.operator = {id: null};
                this.$forceUpdate();
            }
        }
    };
</script>
