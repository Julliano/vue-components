<style scoped lang="scss">
    @import "../styles/variables";
    @import "../styles/buttons";
    @import "../styles/inputs";

    .bc-int-input {
        display: inline-flex;
        flex-direction: column;
        .options-container {
            display: inline-flex;
            align-items: center;
        }
    }
</style>

<template>
    <div>
        <div class="bc-int-input">
            <div class="options-container">
                <input id="date" name="finalDate" type="date"
                    class="inp" v-model="date">
                <input id="hour1" name="hour1" type="time"
                    class="inp margin-left" v-model="hour1">
            </div>
        </div>
    </div>
</template>

<script>
    import moment from 'moment';

    export default {
        name: 'bc-date-input',
        props: {
            tipo: String,
            val: Array
        },
        data() {
            return {
                date: this.checkVal(1, 'date'),
                hour1: this.checkVal(1, 'hour')
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
            handleValue() {
                let localDate = null;
                let localHour = null;
                if (this.date !== '') {
                    localDate = this.date;
                }
                if (this.hour1 !== '') {
                    localHour = this.hour1;
                }
                let date = new
                Date(`${localDate ? localDate : ''}, ${localHour ? localHour : ''}`);
                let isoDate = new Date(date.getTime() -
                    (date.getTimezoneOffset() * 60000)).toISOString();
                return this.$emit('change', [isoDate]);
            }
        },
        watch: {
            date() {
                this.handleValue();
            },
            hour1() {
                this.handleValue();
            }
        }
    };
</script>
