<style scoped lang="scss">
    @import "../styles/variables";
    @import "../styles/buttons";

    .bc-int-input {
        display: inline-flex;
        flex-direction: column;
        .options-container {
            display: inline-flex;
            align-items: center;
            input {
                height: 24px !important;
                &:not(:first-child) {
                    margin-left: 5px;
                }
            }
        }
    }
</style>

<template>
    <div>
        <div class="bc-int-input">
            <div class="options-container">
                <input id="date" name="finalDate" type="date"
                    class="inp big" v-model="date">
                <input id="hour1" name="hour1" type="time"
                    class="inp big" v-model="hour1">
            </div>
        </div>
    </div>
</template>

<script>

    export default {
        name: 'bc-date-input',
        props: {
            tipo: String,
            val: Array
        },
        data() {
            return {
                date: this.val[0] || '',
                hour1: this.val[1] || ''
            };
        },
        methods: {
            handleValue() {
                let localDate = null;
                let localHour = null;
                if (this.date !== '') {
                    localDate = this.date;
                }
                if (this.hour1 !== '') {
                    localHour = this.hour1;
                }
                return this.$emit('change', [localDate, localHour]);
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
