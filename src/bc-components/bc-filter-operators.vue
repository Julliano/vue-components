<style scoped lang="scss">
    @import "styles/variables";
    @import "styles/buttons";

    .bc-filter-operator {
        display: inline-flex;
        flex-direction: column;
        margin-left: 5px;
        .options-container {
            display: inline-flex;
            align-items: center;
            .date-type {
                margin-right: 5px;
                margin-left: -5px;
            }
        }
    }
</style>

<template>
    <div>
        <div class="bc-filter-operator">
            <div class="options-container">
                <component class="date-type" :is="dynamicComponentDate" @data-option-selected="dateOptionSelected"></component>
                <select class="inp" @change="fireOperatorSelected" v-if="show">
                    <option value="" disabled :selected="operator.name === null">{{'select' | i18n}}</option>
                    <option v-for="(opt, idx) in metaOperators" :key="idx" :value="idx"
                        :selected="operator.name === opt.name">
                        {{opt.label}}
                    </option>
                </select>
                <button class="btn btn-filter" @click="fireOperatorRemoved"
                    v-if="operator && !operator.name">
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
    import dateOptions from './bc-field-options/bc-date-options.vue';
    import bcService from './services/bc-services.js';

    export default {
        name: 'bc-filter-operator',
        mixins: [i18n.mixin],
        props: {
            tipoOperador: {
                type: String
            },
            operador: {
                id: null
            },
            uiName: String,
            attribName: String
        },
        components: {
            bcService
        },
        data() {
            return {
                operator: {
                    name: null
                },
                metaOperators: [],
                dateOption: {},
                show: true
            };
        },
        computed: {
            dynamicComponentDate() {
                switch (this.tipoOperador) {
                    case '_data':
                        this.show = false;
                        return dateOptions;
                    default:
                        this.show = true;
                        return null;
                }
            }
        },
        created() {
            this.getOperators();
        },
        methods: {
            mountOperatorsDefault() {
                this.metaOperators = metadata.operators[this.tipoOperador] ? metadata.operators[this.tipoOperador] : metadata.operators['outros'];
            },
            fireOperatorSelected(e) {
                this.operator = this.metaOperators[e.target.value];
                this.$emit('meta-operator-selected', this.operator);
                this.$forceUpdate();
            },
            async getOperators() {
                this.metaOperators = await bcService.getOperators(this.uiName, this.attribName);
                console.log(this.metaOperators);
            },
            fireOperatorRemoved() {
                this.$emit('meta-operator-removed');
            },
            dateOptionSelected(option) {
                this.show = true;
                this.dateOption = option;
                if (option.id === 2) {
                    this.metaOperators = metadata.operators['ano'];
                } else {
                    this.mountOperatorsDefault();
                }
                this.$forceUpdate();
            },
            repassMetaFieldSelected(param) {
                this.$emit('meta-field-selected', param);
            },
            attribChanged() {
                this.getOperators();
                this.operator = { name: null };
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
