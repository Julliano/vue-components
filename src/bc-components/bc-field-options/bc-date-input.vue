<style scoped lang="scss">
    @import "../styles/variables";
    @import "../styles/buttons";

    .bc-int-input {
        display: inline-flex;
        flex-direction: column;
        margin-left: 5px;
        #hour{
            margin-left: 5px;
        }
    }
    .options-container {
        display: inline-flex;
        align-items: center;
    }
</style>

<template>
    <div>
        <div class="bc-int-input">
            <div class="options-container">
                <input id="date" name="finalDate" type="date"
                    class="inp big" v-model="date">
                <input id="hour" name="hour" type="time"
                    class="inp big" v-model="hour" v-if="tipo === '_data_hora'">
            </div>
        </div>
    </div>
</template>

<script>

    export default {
        name: 'bc-date-input',
        props: {
            tipo: String
        },
        data() {
            return {
                date: '',
                hour: ''
            };
        },
        methods: {
            fireFieldSelected() {
                this.$emit('meta-field-selected', this.date, this.hour);
            }
        }
    };
</script>
