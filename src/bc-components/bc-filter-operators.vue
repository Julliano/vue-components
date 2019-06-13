<style scoped lang="scss">
    @import "styles/variables";
    @import "styles/buttons";

    .bc-filter-operator {
      display: inline-flex;
      flex-direction: column;
      margin-left: 5px;
      .options-container {
        display: inline-flex;
      }
    }
</style>

<template>
    <div>
        <div class="bc-filter-operator">
            <div class="options-container">
                <select class="inp" @change="fireOperatorSelected" v-model="localOperator">
                    <option :value="null" disabled>{{'select' | i18n}}</option>
                    <option v-for="(opt, idx) in metaOperators" :key="idx" :value="opt" :name="opt.name">
                        {{opt.label}}
                    </option>
                </select>
                <button class="btn btn-filter" @click="fireOperatorRemoved"
                    v-if="!localOperator">
                    <i class="mdi mdi-close"></i>
                </button>
                <bc-filter-fields slot="field" v-if="localOperator"
                    @meta-field-selected="onMetaFieldSelected($event, idx)"
                    @data-option-selected="dateOptionSelected"
                    @meta-field-removed="fireOperatorRemoved"
                    @change="change"
                    @destroy-period="deletePeriod"
                    :val="criteria.val"
                    :operator="localOperator.name"
                    :autoComplete="autoComplete"
                    :attrib-size="attribSize"
                    :tipo-attrib="tipoAttrib"
                    :hierarchy="hierarchy"
                    :criteria="criteria"
                    :period="period"
                    :lookUp="lookUp"
                    :ui-name="uiName"
                    :attrib-name="attribName"
                    ref="filterField"
                >
                </bc-filter-fields>
            </div>
        </div>
    </div>
</template>

<script>

    import i18n from './utils/i18n.js';
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
            lookUp: String,
            hierarchy: Array,
            attribSize: Number
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
                period: []
            };
        },
        async created() {
            await this.getOperators();
            this.localOperator = this.checkOperator();
        },
        methods: {
            validaDados() {
                if (!this.$refs.filterField) {
                    return false;
                }
                if (this.localOperator.name === 'ANY_CONTENT' || this.localOperator.name === 'NO_CONTENT') {
                    return true;
                }
                return this.$refs.filterField.validaDados();
            },
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
                    case '_data':
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
            setHierarchy(param) {
                this.$set(this.criteria, 'hierarchy', param);
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
                    return;
                }

                if (this.localOperator.name === 'PERIOD') {
                    this.$set(this.criteria, 'val', []);
                    this.period = this.localOperator.options;
                }
            },
            deletePeriod() {
                this.$set(this.criteria, 'val', []);
            },
            async getOperators() {
                if (!this.attribName) return;
                this.metaOperators = await bcService.getOperators(this.uiName,
                    this.attribName, this.tipoAttrib);
                this.metaOperators.forEach(op => {
                    op.name = op.name.toUpperCase();
                });
            },
            fireOperatorRemoved() {
                this.$emit('meta-operator-removed');
            },
            dateOptionSelected(option) {
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
                this.attribChanged();
                if (this.tipoAttrib === '_tipo_selecao') {
                    if (this.hierarchy && this.$refs.metaSelection) {
                        this.$refs.metaSelection.updateOptions();
                    } else {
                        this.$refs.metaSelection && this.$refs.metaSelection.updateOptions(this.lookUp);
                    }
                }
            }
        }
    };
</script>
