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
                <select class="inp" @change="fireFieldSelected">
                    <option value="" disabled :selected="field.id === null">Selecione</option>
                    <option v-for="(opt, idx) in metaFields" :key="idx"
                            :value="idx" :selected="field.id === opt.id">
                        {{opt.name}}
                    </option>
                </select>
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
                metaFields: metadata.fields[this.tipoOperador]
            };
        },
        computed: {
            dynamicComponent() {
                switch (this.tipoOperador) {
                    case 'texto':
                        return this.checkTextField();
                    case 'inteiro':
                        return this.checkNumberField();
                    case 'decimal':
                        return this.checkNumberField();
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
