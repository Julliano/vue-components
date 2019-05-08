<style scoped lang="scss">
    @import "../styles/variables";
    @import "../styles/buttons";

    .bc-int-input {
        display: inline-flex;
        flex-direction: column;
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
                <input class="inp" type="tel" v-mask="'#########'"
                       v-model="field"
                       v-if="tipo === '_inteiro_32' || tipo === '_inteiro_64' || tipo === '_hora'">
                <input class="inp" type="number" :step="0.01" v-model="field" v-else>
            </div>
        </div>
    </div>
</template>

<script>

    import VueTheMask from 'vue-the-mask';

    export default {
        name: 'bc-int-input',
        components: {
            VueTheMask
        },
        props: {
            tipo: String,
            val: Array
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
