<style scoped lang="scss">
    @import "../styles/variables";
    @import "../styles/buttons";

    .bc-text-field {
        display: inline-flex;
        flex-direction: column;
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
                <select class="inp" @change="fireFieldSelected">
                    <option value="" disabled :selected="selectedOption.id === null">Selecione</option>
                    <option v-for="(date, idx) in options" :key="idx" :value="idx"
                        :selected="selectedOption.id === date.id">
                            {{date.name}}
                    </option>
                </select>
            </div>
        </div>
    </div>
</template>

<script>

    import bcService from '../services/bc-services.js';

    export default {
        name: 'bc-text-combo',
        data() {
            return {
                selectedOption: {
                    id: null
                },
                options: []
            };
        },
        created() {
            // ajustar request (está retornando dados mocados)
            this.options = bcService.getTipoSelecaoOptions();
        },
        methods: {
            fireFieldSelected(e) {
                this.selectedOption = this.options[e.target.value];
                this.$emit('option-selected', this.selectedOption);
            }
        }
    };
</script>
