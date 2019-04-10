<style scoped lang="scss">
    @import "../styles/variables";
    @import "../styles/buttons";

    .bc-int-input {
        display: inline-flex;
        flex-direction: column;
        margin-left: 5px;
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
                <input id="hour" name="hour" type="time"
                    class="inp big" v-model="hour" v-if="tipo === '_data_hora' || tipo === '_data_ref'">
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
                hour: this.val[1] || ''
            };
        },
        methods: {
            handleValue() {
                let localDate = null;
                let localHour = null;
                if (this.date !== '') {
                    localDate = this.date;
                }
                if (this.hour !== '') {
                    localHour = this.hour;
                }
                return this.$emit('change', [localDate, localHour]);
            }
        },
        watch: {
            date() {
                this.handleValue();
            },
            hour() {
                this.handleValue();
            }
        }
    };
</script>
