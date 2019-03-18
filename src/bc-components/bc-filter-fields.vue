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
                <select class="inp">
                    <option value="" disabled :selected="field.id === null">Selecione</option>
                    <option v-for="(opt, idx) in metaFields" :key="idx"
                            :value="idx"
                    >
                        {{opt.name}}
                    </option>
                </select>
                <button class="btn btn-filter" @click="fireFieldRemoved"
                    v-if="!field.id && field.id !== 0">
                    <i class="mdi mdi-close"></i>
                </button>
            </div>
        </div>
    </div>
</template>

<script>
    import metadata from './metadata';

    export default {
        name: 'bc-filter-field',
        props: {
            tipoOperador: {
                type: String,
                default: null
            },
            operador: Object
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
            fireFieldRemoved() {
                this.$emit('meta-field-removed');
            }
        }
    };
</script>
