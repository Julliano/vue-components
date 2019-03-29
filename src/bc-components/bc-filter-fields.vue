<style scoped lang="scss">
    @import "styles/variables";
    @import "styles/buttons";

    .bc-filter-field {
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
        <div class="bc-filter-field">
            <div class="options-container">
                <component :is="dynamicComponent" :tipo="tipoAttrib" @change="change"></component>
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
    import textCombo from './bc-field-options/bc-text-combo.vue';
    import numberInput from './bc-field-options/bc-int-input.vue';
    import numberInputs from './bc-field-options/bc-int-inputs.vue';
    import hourInput from './bc-field-options/bc-hour-input.vue';
    import hourInputs from './bc-field-options/bc-hour-inputs.vue';
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
            operador: Object,
            hasField: {
                id: null
            },
            dateOption: Object
        },
        data() {
            return {
                field: {
                    id: null
                },
                metaFields: metadata.fields[this.tipoAttrib]
            };
        },
        computed: {
            // eslint-disable-next-line
            dynamicComponent() {
                switch (this.tipoAttrib) {
                    case '_texto_delimitado':
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
                    case '_tipo_selecao':
                        return textCombo;
                    case 'outros':
                        return textField;
                    default:
                        return textField;
                }
            }
        },
        methods: {
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
                if (this.operador.name === 'ANY_CONTENT' || this.operador.name === 'NO_CONTENT') {
                    return null;
                } else if (this.operador.autoComplete) {
                    return textAutocompleteField;
                }
                return textField;
            },
            checkNumberField() {
                if (this.operador.name === 'RANGE' || this.operador.name === 'OUT_OF_RANGE') {
                    return numberInputs;
                }
                return numberInput;
            },
            checkDataField() {
                if (this.dateOption.label === 'Data') {
                    if (this.operador.name === 'LESS_THAN' || this.operador.name === 'OUT_OF_RANGE') {
                        return dateInputs;
                    } else if (this.operador.name === 'PERIODO') {
                        return dateCombo;
                    }
                    return dateInput;
                } else if (this.dateOption.label === 'Ano') {
                    if (this.operador.name === 'RANGE' || this.operador.name === 'OUT_OF_RANGE') {
                        return hourInputs;
                    }
                    return hourInput;
                }
                return null;
            },
            checkDataHoraField() {
                if (this.operador.name === 'RANGE' || this.operador.name === 'OUT_OF_RANGE') {
                    return dateInputs;
                } else if (this.operador.name === 'PERIODO') {
                    return dateCombo;
                }
                return dateInput;
            },
            change(value) {
                this.$emit('change', value);
            }

        },
        watch: {
            hasField() {
                this.field = this.hasField;
                this.metaFields = metadata.fields[this.tipoAttrib];
            }
        }
    };
</script>
