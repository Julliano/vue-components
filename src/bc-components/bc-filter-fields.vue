<style scoped lang="scss">
    @import "styles/variables";
    @import "styles/buttons";

    .bc-filter-field {
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
        <div class="bc-filter-field">
            <div class="options-container">
                <component :is="dynamicComponent" :tipo="tipoAttrib"
                           :selected-hierarchy="criteria.hierarchy"
                           :hierarchy="hierarchy"
                           :periods="period"
                           :attrib-name="attribName"
                           :attrib-size="attribSize"
                           :ui-name="uiName"
                           :lookUp="lookUp"
                           :val="val"
                           @change="change"
                           @hierarchy="setHierarchy"
                           @destroy-period="deletePeriod"
                           @data-option-selected="dateOptionSelected"
                ></component>
                <button class="btn btn-filter" @click="fireFieldRemoved">
                    <i class="mdi mdi-close"></i>
                </button>
            </div>
        </div>
    </div>
</template>

<script>
    import metadata from './metadata.json';
    import textField from './bc-field-options/bc-text-field.vue';
    import textAutocompleteField from './bc-field-options/bc-text-autocomplete.vue';
    import metaSelection from './bc-field-options/bc-meta-selection.vue';
    import metaSelectionHierarchy from './bc-field-options/bc-meta-selection-hierarchy.vue';
    import numberInput from './bc-field-options/bc-int-input.vue';
    import numberInputs from './bc-field-options/bc-int-inputs.vue';
    import dateCombo from './bc-field-options/bc-date-combo.vue';
    import dateInput from './bc-field-options/bc-date-input.vue';
    import dateInputs from './bc-field-options/bc-date-inputs.vue';

    export default {
        name: 'bc-filter-field',
        components: {
            textField
        },
        props: {
            tipoAttrib: {
                type: String,
                default: null
            },
            autoComplete: Boolean,
            operator: String,
            val: {
                type: Array,
                default: () => []
            },
            criteria: Object,
            hierarchy: Array,
            period: Array,
            uiName: String,
            lookUp: String,
            attribName: String,
            attribSize: Number
        },
        data() {
            return {
                field: {
                    id: null
                },
                metaFields: metadata.fields[this.tipoAttrib],
                hierarquico: false
            };
        },
        computed: {
            // eslint-disable-next-line
            dynamicComponent() {
                if (this.operator === 'ANY_CONTENT' || this.operator === 'NO_CONTENT') {
                    return null;
                }
                switch (this.tipoAttrib) {
                    case '_texto_delimitado':
                        return this.checkTextField();
                    case '_texto_livre':
                        return this.checkTextField();
                    case '_inteiro_32':
                        return this.checkNumberField();
                    case '_inteiro_64':
                        return this.checkNumberField();
                    case '_decimal_32':
                        return this.checkNumberField();
                    case '_decimal_64':
                        return this.checkNumberField();
                    case '_data':
                        return this.checkDataField();
                    case '_hora':
                        return this.checkNumberField();
                    case '_data_hora':
                        return this.checkDataHoraField();
                    case '_data_ref':
                        return this.checkDataHoraField();
                    case '_tipo_selecao':
                        if (!this.hierarchy) return metaSelection;
                        this.hierarquico = true;
                        return metaSelectionHierarchy;
                    case 'outros':
                        return textField;
                    default:
                        return textField;
                }
            }
        },
        methods: {
            validaDados() {
                if (!this.val) {
                    return false;
                }
                if (this.val.length <= 0) {
                    return false;
                }
                for (let valor of this.val) {
                    if (!valor) {
                        return false;

                    }
                }
                return true;
            },
            setHierarchy(param) {
                this.$set(this.criteria, 'hierarchy', param);
            },
            dateOptionSelected(option) {
                this.$emit('data-option-selected', option);
            },
            fireFieldSelected(e) {
                const metaField = this.metaFields[e.target.value];
                this.field = metaField;
                this.$emit('meta-field-selected', metaField);
                this.$forceUpdate();
            },
            fireFieldRemoved() {
                this.$emit('meta-field-removed');
            },
            checkTextField() {
                if (this.operator === 'ANY_CONTENT' || this.operator === 'NO_CONTENT') {
                    return null;
                } else if (this.autoComplete) {
                    return textAutocompleteField;
                }
                return textField;
            },
            deletePeriod() {
                this.$emit('destroy-period');
            },
            checkNumberField() {
                if (this.operator === 'RANGE' || this.operator === 'OUT_OF_RANGE') {
                    return numberInputs;
                }
                return numberInput;
            },
            checkDataField() {
                if (this.operator === 'RANGE' || this.operator === 'OUT_OF_RANGE') {
                    return dateInputs;
                } else if (this.operator === 'PERIOD') {
                    return dateCombo;
                }
                return dateInput;
            },
            checkDataHoraField() {
                if (this.operator === 'RANGE' || this.operator === 'OUT_OF_RANGE') {
                    return dateInputs;
                } else if (this.operator === 'PERIOD') {
                    return dateCombo;
                }
                return dateInput;
            },
            change(val) {
                this.$emit('change', val);
            }
        },
        watch: {
            val() {
                this.field = this.val;
                this.metaFields = metadata.fields[this.tipoAttrib];
            }
        }
    };
</script>
