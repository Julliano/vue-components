<style scoped lang="scss">
    @import "../styles/variables";
    @import "../styles/buttons";

    .bc-hour-input {
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
        <div class="bc-hour-input">
            <div class="options-container">
                <input id="hour" name="hour" type="time" @change="change"
                    class="inp" v-model="hour">
            </div>
        </div>
    </div>
</template>

<script>

    export default {
        name: 'bc-hour-input',
        data() {
            return {
                hour: ''
            };
        },
        methods: {
            change() {
                this.$emit('change', [this.hour]);
            }
        }
    };
</script>
