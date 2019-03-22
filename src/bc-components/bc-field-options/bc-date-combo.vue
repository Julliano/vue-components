<style scoped lang="scss">
    @import "../styles/variables";
    @import "../styles/buttons";

    .bc-date-combo {
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
        <div class="bc-date-combo">
            <div class="options-container">
                <select class="inp" @change="fireDateSelected">
                    <option value="" disabled :selected="dateSelected.id === null">Selecione</option>
                    <option v-for="(date, idx) in dates" :key="idx" :value="idx"
                        :selected="dateSelected.id === date.id">
                            {{date.label}}
                    </option>
                </select>
            </div>
        </div>
    </div>
</template>

<script>

    export default {
        name: 'bc-date-combo',
        data() {
            return {
                dates: [
                    {
                        id: 1,
                        label: 'Última semana'
                    },
                    {
                        id: 2,
                        label: 'Últimas 2 semanas'
                    },
                    {
                        id: 3,
                        label: 'Últimas 3 semanas'
                    },
                    {
                        id: 4,
                        label: 'Último mês'
                    },
                    {
                        id: 5,
                        label: 'Últimos 2 meses'
                    },
                    {
                        id: 6,
                        label: 'Últimos 3 meses'
                    }
                ],
                dateSelected: {
                    id: ''
                }
            };
        },
        methods: {
            fireDateSelected(e) {
                this.dateSelected = this.dates[e.target.value];
                this.$emit('date-selected', this.dateSelected);
            }
        }
    };
</script>
