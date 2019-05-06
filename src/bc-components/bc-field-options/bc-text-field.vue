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
                <input class="inp" :maxlength="attribSize" type="text" v-model="field">
            </div>
        </div>
    </div>
</template>

<script>

    export default {
        name: 'bc-text-field',
        props: {
            val: Array,
            attribSize: Number
        },
        data() {
            return {
                field: this.val[0] || ''
            };
        },
        methods: {
            handleValue() {
                if (this.field === '') {
                    return this.$emit('change', null);
                }
                return this.$emit('change', [this.field]);
            }
        },
        watch: {
            field() {
                this.handleValue();
            }
        }
    };
</script>
