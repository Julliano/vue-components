<style scoped lang="scss">
    @import "../styles/variables";
    @import "../styles/buttons";

    .bc-text-field {
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
        <div class="bc-text-field">
            <div class="options-container">
                <select class="inp" @change="fireOperatorSelected" v-if="options">
                    <option value="" disabled :selected="selectedOption.id === null">Selecione</option>
                    <option v-for="(date, idx) in options" :key="idx" :value="idx"
                        :selected="selectedOption.id === date.id">
                            {{date.label}}
                    </option>
                </select>
            </div>
        </div>
    </div>
</template>

<script>

    export default {
        name: 'bc-text-combo',
        props: {
            options: Array
        },
        data() {
            return {
                selectedOption: {
                    id: ''
                }
            };
        },
        methods: {
            fireFieldSelected(e) {
                this.selectedOption = this.options[e.target.value];
                this.$emit('option-selected', this.selectedOption);
            }
        }
    };
</script>
