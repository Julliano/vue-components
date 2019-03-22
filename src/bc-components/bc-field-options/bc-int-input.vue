<style scoped lang="scss">
    @import "../styles/variables";
    @import "../styles/buttons";

    .bc-int-input {
        display: inline-flex;
        flex-direction: column;
        margin-left: 5px;
        input {
            width: 40px;
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
                <input class="inp" type="tel" v-mask="'#########'" v-model="field" v-if="tipo === '_inteiro_32' || tipo === '_inteiro_64'">
                <input class="inp" type="number" :step="0.01" v-model="field" v-else>
            </div>
        </div>
    </div>
</template>

<script>

    import VueTheMask from 'vue-the-mask';
    import Vue from 'vue';
    Vue.use(VueTheMask);

    export default {
        name: 'bc-int-input',
        components: {
            VueTheMask
        },
        props: {
            tipo: String
        },
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
