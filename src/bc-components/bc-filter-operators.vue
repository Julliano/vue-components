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
                    <option value="" disabled :selected="localOperator === null">{{'select' | i18n}}</option>
                    <option v-for="(opt, idx) in metaOperators" :key="idx" :value="idx"
                        :selected="localOperator === opt.name">
                        {{opt.label}}
                    </option>
                </select>
                <button class="btn btn-filter" @click="fireOperatorRemoved"
                    v-if="!localOperator">
                    <i class="mdi mdi-close"></i>
                </button>
                <bc-filter-fields slot="field" v-else
                    @meta-field-selected="onMetaFieldSelected($event, idx)"
                    @meta-field-removed="fireOperatorRemoved"
                    @change="change"
                    :val="criteria.val" :operator="localOperator.name"
                    :autoComplete="autoComplete"
                    :tipo-attrib="tipoAttrib"
                >
                </bc-filter-fields>
            </div>
        </div>
    </div>
</template>

<script>

    import i18n from './utils/i18n.js';
    import dateOptions from './bc-field-options/bc-date-options.vue';
    import BcFilterFields from './bc-filter-fields.vue';
    import bcService from './services/bc-services.js';

    export default {
        name: 'bc-filter-operator',
        mixins: [i18n.mixin],
        props: {
            tipoAttrib: {
                type: String
            },
            operator: String,
            uiName: String,
            autoComplete: Boolean,
            attribName: String,
            criteria: Object
        },
        components: {
            bcService,
            BcFilterFields
        },
        data() {
            return {
                localOperator: this.criteria.oper || null,
                metaOperators: [],
                dateOption: {},
                show: true
            };
        },
        computed: {
            dynamicComponentDate() {
                switch (this.tipoAttrib) {
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
            fireOperatorSelected(e) {
                this.localOperator = this.metaOperators[e.target.value];
                this.$emit('meta-operator-selected', this.localOperator);
                this.$forceUpdate();
            },
            async getOperators() {
                this.metaOperators = await bcService.getOperators(this.uiName, this.attribName);
                this.metaOperators.forEach(op => {
                    op.name = op.name.toUpperCase();
                });
            },
            fireOperatorRemoved() {
                this.$emit('meta-operator-removed');
            },
            dateOptionSelected(option) {
                this.show = true;
                this.dateOption = option;
                this.getOperators();
                this.localOperator = null;
                this.$emit('data-option-selected', option);
                this.$forceUpdate();
            },
            repassMetaFieldSelected(param) {
                this.$emit('meta-field-selected', param);
            },
            attribChanged() {
                this.getOperators();
                this.localOperator = null;
                this.$emit('meta-operator-selected', null);
            },
            onMetaFieldSelected(obj, idx) {
                console.log(obj, idx);
                this.$forceUpdate();
            },
            change(val) {
                if (!val) {
                    return delete this.$delete(this.criteria, 'val');
                }
                return this.$set(this.criteria, 'val', val);
            }
        },
        watch: {
            operator() {
                if (this.operador) {
                    this.localOperator = this.criteria.oper;
                }
            }
        }
    };
</script>
