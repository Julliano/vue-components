<style scoped lang="scss">
    @import "../styles/variables";
    @import "../styles/buttons";

    .bc-text-field {
        display: inline-flex;
        flex-direction: column;
        margin-left: 5px;
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
                <input class="inp" type="text" v-model="field">
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
            fireFieldSelected() {
                this.$emit('meta-field-selected', this.field);
            }
        }
    };
</script>
