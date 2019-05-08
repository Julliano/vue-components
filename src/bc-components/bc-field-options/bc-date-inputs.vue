<style scoped lang="scss">
    @import "../styles/variables";
    @import "../styles/buttons";
    @import "../styles/inputs";

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
                    class="inp margin-left seconds" step="1" v-model="hour1">
                <input id="date2" name="finalDate" type="date" @change="change"
                        class="inp margin-left" v-model="finalDate">
                <input id="hour2" name="hour2" type="time" @change="change"
                    class="inp margin-left seconds" step="1" v-model="hour2">
            </div>
        </div>
    </div>
</template>

<script>
    import moment from 'moment';

    export default {
        name: 'bc-date-inputs',
        props: {
            tipo: String,
            val: Array
        },
        destroyed() {
            let isoDate1 = null;
            let date1 = new Date(`${this.initialDate ? this.initialDate : ''}, ${this.hour1 ? this.hour1 : ''}`);
            if (date1.getTime()) isoDate1 = new Date(date1.getTime() -
                (date1.getTimezoneOffset() * 60000)).toISOString();
            this.$emit('change', [isoDate1]);
        },
        data() {
            return {
                initialDate: this.checkVal(1, 'date'),
                finalDate: this.checkVal(2, 'date'),
                hour1: this.checkVal(1, 'hour'),
                hour2: this.checkVal(2, 'hour')
            };
        },
        methods: {
            checkVal(value, type) {
                if (value && this.val[value - 1]) {
                    if (type === 'date') {
                        return moment(this.val[value - 1]).format('YYYY-MM-DD HH:mm').split(' ')[0];
                    } else if (type === 'hour') {
                        return moment.utc(this.val[value - 1]).format('YYYY-MM-DD HH:mm').split(' ')[1];
                    }
                }
                return '';
            },
            change() {
                let isoDate1 = null;
                let isoDate2 = null;
                let date1 = new Date(`${this.initialDate ? this.initialDate : ''}, ${this.hour1 ? this.hour1 : ''}`);
                if (date1.getTime()) isoDate1 = new Date(date1.getTime() -
                    (date1.getTimezoneOffset() * 60000)).toISOString();
                let date2 = new Date(`${this.finalDate ? this.finalDate : ''}, ${this.hour2 ? this.hour2 : ''}`);
                if (date2.getTime()) isoDate2 = new Date(date2.getTime() -
                    (date2.getTimezoneOffset() * 60000)).toISOString();
                this.$emit('change', [isoDate1, isoDate2]);
            }
        }
    };
</script>
