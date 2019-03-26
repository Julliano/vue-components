<style scoped lang="scss">
    @import "../styles/variables";
    @import "../styles/buttons";

    .bc-hour-input {
        display: inline-flex;
        flex-direction: column;
        .options-container {
            display: inline-flex;
            align-items: center;
            input {
                height: 24px !important;
                padding: 2px;
                &:not(:first-child) {
                    margin-left: 5px;
                }
            }
        }
    }
</style>

<template>
    <div>
        <div class="bc-hour-input">
            <div class="options-container">
                <input id="hour" name="hour" type="time"
                    class="inp big" v-model="hour">
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
            fireFieldSelected() {
                this.$emit('meta-field-selected', this.hour);
            }
        }
    };
</script>
