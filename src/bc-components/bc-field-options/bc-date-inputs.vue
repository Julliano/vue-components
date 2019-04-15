<style scoped lang="scss">
    @import "../styles/variables";
    @import "../styles/buttons";

    .bc-int-inputs {
        display: inline-flex;
        flex-direction: column;
        margin-left: 5px;
        input {
            height: 24px !important;
            &:not(:first-child) {
                margin-left: 5px;
            }
        }
    }
    .options-container {
        display: inline-flex;
        align-items: center;
    }
</style>

<template>
    <div>
        <div class="bc-int-inputs">
            <div class="options-container">
                <input id="date1" name="initialDate" type="date" @change="change"
                        class="inp big" v-model="initialDate">
                <input id="hour1" name="hour1" type="time" @change="change"
                    class="inp big" v-model="hour1" v-if="tipo === '_data_hora'">
                <input id="date2" name="finalDate" type="date" @change="change"
                        class="inp big" v-model="finalDate">
                <input id="hour2" name="hour2" type="time" @change="change"
                    class="inp big" v-model="hour2" v-if="tipo === '_data_hora'">
            </div>
        </div>
    </div>
</template>

<script>

    export default {
        name: 'bc-date-inputs',
        props: {
            tipo: String
        },
        data() {
            return {
                initialDate: '',
                finalDate: '',
                hour1: '',
                hour2: ''
            };
        },
        methods: {
            change() {
                this.$emit('change', [this.initialDate, this.finalDate, this.hour1, this.hour2]);
            }
        }
    };
</script>
