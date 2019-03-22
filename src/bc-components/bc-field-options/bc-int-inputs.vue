<style scoped lang="scss">
    @import "../styles/variables";
    @import "../styles/buttons";

    .bc-int-inputs {
        display: inline-flex;
        flex-direction: column;
        margin-left: 5px;
        input {
            width: 40px;
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
            <div class="options-container" v-if="tipo === '_inteiro_32' || tipo === '_inteiro_64'">
                <input class="inp" type="tel" v-mask="'#########'" v-model="field1">
                <input class="inp" type="tel" v-mask="'#########'" v-model="field2">
            </div>
            <div class="options-container" v-else>
                <input class="inp" type="number" :step="0.01" v-model="field1">
                <input class="inp" type="number" :step="0.01" v-model="field2">
            </div>
        </div>
    </div>
</template>

<script>

    import VueTheMask from 'vue-the-mask';
    import Vue from 'vue';
    Vue.use(VueTheMask);

    export default {
        name: 'bc-int-inputs',
        components: {
            VueTheMask
        },
        props: {
            tipo: String
        },
        data() {
            return {
                field1: '',
                field2: ''
            };
        },
        methods: {
            fireFieldSelected() {
                this.$emit('inputs-selected', this.field1, this.field2);
            }
        }
    };
</script>
