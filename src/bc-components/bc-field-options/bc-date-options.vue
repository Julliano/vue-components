<style scoped lang="scss">
    @import "../styles/variables";
    @import "../styles/buttons";

    .bc-date-options {
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
        <div class="bc-date-options">
            <div class="options-container">
                <select class="inp" @change="fireOptionSelected">
                    <option value="" disabled  :selected="option.id === null">Selecione</option>
                    <option v-for="(opt, idx) in options" :key="idx" :value="idx"
                        :selected="option.id === opt.id">
                        {{opt.label}}
                    </option>
                </select>
            </div>
        </div>
    </div>
</template>

<script>

    export default {
        name: 'bc-date-options',
        data() {
            return {
                option: {
                    id: null
                },
                options: [
                    {
                        id: 1,
                        label: 'Data'
                    },
                    {
                        id: 2,
                        label: 'Ano'
                    }
                ]
            };
        },
        methods: {
            fireOptionSelected(e) {
                this.option = this.options[e.target.value];
                this.$emit('data-option-selected', this.option);
            },
            fireRemoved() {
                this.$emit('remove-fired');
            }
        }
    };
</script>
