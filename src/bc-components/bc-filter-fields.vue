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
                            :value="idx" :selected="field.id === opt.id"
                    >
                        {{opt.name}}
                    </option>
                </select>
                <button class="btn btn-filter" v-if="field.id !== null">
                    <i class="mdi mdi-close" @click="fireFieldRemoved"></i>
                </button>
            </div>
        </div>
    </div>
</template>

<script>
    import metadata from './metadata';

    export default {
        name: 'bc-filter-operator',
        data() {
            return {
                field: {
                    id: null
                },
                metaOperators: metadata.fields
            };
        },
        methods: {
            fireFieldSelected(e) {
                const metaOperator = this.metaField[e.target.value];
                this.$emit('meta-operator-selected', metaField);
            },
            fireFieldRemoved() {
                this.$emit('meta-operator-removed', this.field);
            }
        }
    };
</script>
