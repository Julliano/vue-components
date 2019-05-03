<style scoped lang="scss">
    @import "../styles/variables";
    @import "../styles/buttons";

    .bc-hours-inputs {
        display: inline-flex;
        flex-direction: column;
        .options-container {
            display: inline-flex;
            align-items: center;
            .panel-heading > i{
                vertical-align: middle !important;
            }

        }
    }
</style>

<template>
    <div>
        <div class="bc-hours-inputs">
            <div class="options-container">
                <input id="hour" name="hour" type="time" @change="change"
                    class="inp" v-model="hour">
                <input id="hour2" name="hour2" type="time" @change="change"
                    class="inp margin-left" v-model="hour2">
            </div>
        </div>
    </div>
</template>

<script>

    export default {
        name: 'bc-hours-inputs',
        props: {
            tipo: String
        },
        data() {
            return {
                hour: '',
                hour2: ''
            };
        },
        methods: {
            change() {
                this.$emit('change', [this.hour, this.hour2]);
            }
        }
    };
</script>
