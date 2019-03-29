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
                <input id="date2" name="finalDate" type="date" @change="change"
                        class="inp big" v-model="finalDate">
                <input id="hour" name="hour" type="time" @change="change"
                    class="inp big" v-model="hour" v-if="tipo === '_data_hora'">
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
                hour: ''
            };
        },
        methods: {
            change() {
                this.$emit('change', [this.initialDate, this.finalDate, this.hour]);
            }
        }
    };
</script>
