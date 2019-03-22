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
                    <option value="" disabled  :selected="operator.id === null">{{'select' | i18n}}</option>
                    <option v-for="(opt, idx) in metaOperators" :key="idx" :value="idx"
                        :selected="operator.id === opt.id">
                        {{opt.name}}
                    </option>
                </select>
                <button class="btn btn-filter" @click="fireOperatorRemoved"
                    v-if="operator && !operator.id">
                    <i class="mdi mdi-close"></i>
                </button>
                <slot name="field"></slot>
            </div>
        </div>
    </div>
</template>

<script>

    import metadata from './metadata.json';
    import i18n from './utils/i18n.js';

    export default {
        name: 'bc-filter-operator',
        mixins: [i18n.mixin],
        props: {
            tipoOperador: {
                type: String,
                default: null
            },
            operador: {
                id: null
            }
        },
        data() {
            return {
                operator: {
                    id: null
                },
                metaOperators: []
            };
        },
        created() {
            this.metaOperators = metadata.operators[this.tipoOperador] ? metadata.operators[this.tipoOperador] : metadata.operators['outros'];
        },
        methods: {
            fireOperatorSelected(e) {
                this.operator = this.metaOperators[e.target.value];
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
                this.operator = { id: null };
                this.$forceUpdate();
            }
        },
        watch: {
            operador() {
                if (this.operador) {
                    this.operator = this.operador;
                }
            }
        }
    };
</script>
