<style scoped lang="scss">
    @import "../styles/variables";
    @import "../styles/buttons";

    .bc-int-inputs {
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
        <div class="bc-int-inputs">
            <div class="options-container">
                <input id="date1" name="initialDate" type="date" @change="change"
                        class="inp" v-model="initialDate">
                <input id="hour1" name="hour1" type="time" @change="change"
                    class="inp margin-left" v-model="hour1">
                <input id="date2" name="finalDate" type="date" @change="change"
                        class="inp margin-left" v-model="finalDate">
                <input id="hour2" name="hour2" type="time" @change="change"
                    class="inp margin-left" v-model="hour2">
            </div>
        </div>
    </div>
</template>

<script>

    export default {
        name: 'bc-date-inputs',
        props: {
            tipo: String,
            val: Array
        },
        data() {
            return {
                initialDate: this.val[0] || '',
                finalDate: this.val[2] || '',
                hour1: this.val[1] || '',
                hour2: this.val[3] || ''
            };
        },
        methods: {
            change() {
                this.$emit('change', [this.initialDate, this.finalDate, this.hour1, this.hour2]);
            }
        }
    };
</script>
