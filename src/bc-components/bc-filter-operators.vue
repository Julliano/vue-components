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
                // margin-right: 5px;
                margin-left: -8px;
            }
        }
    }
</style>

<template>
    <div>
        <div class="bc-filter-operator">
            <div class="options-container">
                <component class="date-type" :is="dynamicComponentDate"
                    @data-option-selected="dateOptionSelected"
                    :val="criteria.val" :lookUp="lookUp"
                    @change="change">
                </component>
                <select class="inp" @change="fireOperatorSelected" v-model="localOperator" v-if="show">
                    <option :value="null" disabled>{{'select' | i18n}}</option>
                    <option v-for="(opt, idx) in metaOperators" :key="idx" :value="opt">
                        {{opt.label}}
                    </option>
                </select>
                <button class="btn btn-filter" @click="fireOperatorRemoved"
                    v-if="!localOperator || !show">
                    <i class="mdi mdi-close"></i>
                </button>
                <bc-filter-fields slot="field" v-else-if="show"
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
    import metaSelection from './bc-field-options/bc-meta-selection.vue';
    import BcFilterFields from './bc-filter-fields.vue';
    import bcService from './services/bc-services.js';

    export default {
        name: 'bc-filter-operator',
        mixins: [i18n.mixin],
        props: {
            tipoAttrib: {
                type: String
            },
            uiName: String,
            autoComplete: Boolean,
            attribName: String,
            criteria: Object,
            lookUp: String
        },
        components: {
            bcService,
            BcFilterFields
        },
        data() {
            return {
                localOperator: null,
                metaOperators: [],
                dateOption: {},
                show: true
            };
        },
        computed: {
            dynamicComponentDate() {
                switch (this.tipoAttrib) {
                    case '_data':
                        this.$set(this.criteria, 'oper', 'DATE');
                        this.show = true;
                        return null;
                    case '_tipo_selecao':
                        this.show = false;
                        this.$set(this.criteria, 'oper', 'EQUAL');
                        if (!this.criteria.val) {
                            this.$set(this.criteria, 'val', []);
                        }
                        return metaSelection;
                    default:
                        this.show = true;
                        return null;
                }
            }
        },
        async created() {
            await this.getOperators();
            this.localOperator = this.checkOperator();
        },
        methods: {
            checkOperator() {
                if (this.criteria.oper) {
                    let obj = this.metaOperators.find(ope => {
                        return ope.name === this.criteria.oper;
                    });
                    if (obj) {
                        return this.localOperator = obj;
                    }
                    return null;
                }
                return null;
            },
            fireOperatorSelected() {
                switch (this.tipoAttrib) {
                    case '_inteiro_64':
                        this.handleInt64();
                        break;
                    case '_data_ref':
                        this.handleDateHour();
                    case '_data_hora':
                        this.handleDateHour();
                }
                if (!this.criteria.val) {
                    this.$set(this.criteria, 'val', []);
                }
                if (this.localOperator.name === 'ANY_CONTENT' || this.localOperator.name === 'NO_CONTENT') {
                    this.$delete(this.criteria, 'val');
                }
                this.$emit('meta-operator-selected', this.localOperator);
                this.$forceUpdate();
            },
            handleInt64() {
                if (this.localOperator.name === 'OUT_OF_RANGE' || this.localOperator.name === 'RANGE') {
                    if (this.criteria.val && this.criteria.val.length > 1) {
                        this.$set(this.criteria, 'val', [this.criteria.val.shift()]);
                    }
                } else if (this.criteria.val && this.criteria.val.length > 1) {
                    this.criteria.val.pop();
                }
            },
            handleDateHour() {
                if (this.localOperator.name === 'OUT_OF_RANGE' || this.localOperator.name === 'RANGE') {
                    if (this.criteria.val && this.criteria.val.length > 1) {
                        this.$set(this.criteria, 'val', [this.criteria.val.shift()]);
                    }
                }
            },
            async getOperators() {
                if (!this.attribName) return;
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
                this.criteria.val = val;
            }
        },
        watch: {
            attribName() {
                this.getOperators();
            }
        }
    };
</script>
