<style scoped lang="scss">
    @import "../styles/variables";
    @import "../styles/buttons";

    .bc-text-field {
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
        <div class="bc-text-field">
            <div class="options-container">
                <input class="inp" type="text" v-model="field" @change="change">
            </div>
        </div>
    </div>
</template>

<script>

    export default {
        name: 'bc-text-field',
        data() {
            return {
                field: ''
            };
        },
        methods: {
            change() {
                this.$emit('change', [this.field]);
            }
        }
    };
</script>
