<style scoped lang="scss">
    @import "../styles/variables";
    @import "../styles/buttons";

    .bc-int-inputs {
        display: inline-flex;
        flex-direction: column;
        margin-left: 5px;
        input {
            &:last-child {
                margin-left: 5px;
            }
        }
    }
    .options-container {
        display: inline-flex;
        align-items: center;
    }
</style>

<template>
    <div>
        <div class="bc-int-inputs">
            <input id="date1" name="initialDate" type="date"
                    class="inp big" v-model="initialDate">
            <input id="date2" name="finalDate" type="date"
                    class="inp big" v-model="finalDate">
        </div>
    </div>
</template>

<script>

    export default {
        name: 'bc-date-inputs',
        props: {
            tipo: String
        },
        data() {
            return {
                initialDate: '',
                finalDate: ''
            };
        },
        methods: {
            fireFieldSelected() {
                this.$emit('meta-field-selected', this.initialDate, this.finalDate);
            }
        }
    };
</script>
