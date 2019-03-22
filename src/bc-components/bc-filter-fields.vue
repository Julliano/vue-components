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
                <component :is="dynamicComponentDate" @data-option-selected="dateOptionSelected" @remove-fired="fireFieldRemoved"></component>
                <component :is="dynamicComponent" :tipo="tipoOperador"></component>
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
    import textCombo from './bc-field-options/bc-text-combo.vue';
    import numberInput from './bc-field-options/bc-int-input.vue';
    import numberInputs from './bc-field-options/bc-int-inputs.vue';
    import dateOptions from './bc-field-options/bc-date-options.vue';
    import dateCombo from './bc-field-options/bc-date-combo.vue';
    import dateInput from './bc-field-options/bc-date-input.vue';
    import dateInputs from './bc-field-options/bc-date-inputs.vue';

    export default {
        name: 'bc-filter-field',
        components: {
            textField
        },
        props: {
            tipoOperador: {
                type: String,
                default: null
            },
            operador: Object,
            hasField: {
                id: null
            }
        },
        data() {
            return {
                field: {
                    id: null
                },
                metaFields: metadata.fields[this.tipoOperador],
                dateOption: {}
            };
        },
        computed: {
            dynamicComponent() {
                switch (this.tipoOperador) {
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
                    case 'outros':
                        return textField;
                    default:
                        return null;
                }
            },
            dynamicComponentDate() {
                switch (this.tipoOperador) {
                    case '_data':
                        return dateOptions;
                    default:
                        return null;
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
            dateOptionSelected(option) {
                this.dateOption = option;
                this.$forceUpdate();
            },
            checkTextField() {
                if (this.operador.type === 'ANY_CONTENT' || this.operador.type === 'NO_CONTENT') {
                    return null;
                } else if (this.operador.autoComplete) {
                    return textCombo;
                }
                return textField;
            },
            checkNumberField() {
                if (this.operador.type === 'INTERVAL' || this.operador.type === 'OUT_OF_INTERVAL') {
                    return numberInputs;
                }
                return numberInput;
            },
            checkDataField() {
                if (this.dateOption.id) {
                    if (this.operador.type === 'LESS_THAN' || this.operador.type === 'OUT_OF_INTERVAL') {
                        return dateInputs;
                    } else if (this.operador.type === 'PERIODO') {
                        return dateCombo;
                    }
                    return dateInput;
                }
                return null;
            },
            checkDataHoraField() {
                if (this.operador.type === 'INTERVAL' || this.operador.type === 'OUT_OF_INTERVAL') {
                    return dateInputs;
                } else if (this.operador.type === 'PERIODO') {
                    return dateCombo;
                }
                return dateInput;
            }
        },
        watch: {
            hasField() {
                this.field = this.hasField;
                this.metaFields = metadata.fields[this.tipoOperador];
            }
        }
    };
</script>
