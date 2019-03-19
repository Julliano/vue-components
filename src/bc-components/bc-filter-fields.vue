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

    export default {
        name: 'bc-filter-field',
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
        methods: {
            fireFieldSelected(e) {
                const metaField = this.metaFields[e.target.value];
                this.field = metaField;
                this.$emit('meta-field-selected', metaField);
                this.$forceUpdate();
            },
            fireFieldRemoved() {
                this.$emit('meta-field-removed');
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
