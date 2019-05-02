<style scoped lang="scss">
    @import "../styles/variables";
    @import "../styles/buttons";

    .bc-date-combo {
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
        <div class="bc-date-combo">
            <div class="options-container">
                <select class="inp" v-model="field">
                    <option :value="null" disabled>{{'select' | i18n}}</option>
                    <option v-for="period in periods" :key="period" :value="period">
                            {{period.label}}
                    </option>
                </select>
            </div>
        </div>
    </div>
</template>

<script>
    import i18n from '../utils/i18n.js';
    export default {
        name: 'bc-date-combo',
        mixins: [i18n.mixin],
        props: {
            periods: Array
        },
        data() {
            return {
                field: null
            };
        },
        destroyed() {
            this.$emit('destroy-period');
        },
        methods: {
            handleValue() {
                this.$emit('change', [this.field.name]);
            }
        },
        watch: {
            field() {
                this.handleValue();
            }
        }
    };
</script>
