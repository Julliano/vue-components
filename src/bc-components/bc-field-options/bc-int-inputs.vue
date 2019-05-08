<style scoped lang="scss">
    @import "../styles/variables";
    @import "../styles/buttons";

    .bc-int-inputs {
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
        <div class="bc-int-inputs">
            <div class="options-container" v-if="tipo === '_inteiro_32' || tipo === '_inteiro_64' || tipo === '_hora'">
                <input class="inp" type="tel" v-mask="'#########'" v-model="field1">
                <input class="inp margin-left" type="tel" v-mask="'#########'" v-model="field2">
            </div>
            <div class="options-container" v-else>
                <input class="inp" type="number" :step="0.01" v-model="field1">
                <input class="inp margin-left" type="number" :step="0.01" v-model="field2">
            </div>
        </div>
    </div>
</template>

<script>

    import VueTheMask from 'vue-the-mask';

    export default {
        name: 'bc-int-inputs',
        components: {
            VueTheMask
        },
        props: {
            val: Array,
            tipo: String
        },
        data() {
            return {
                field1: this.val[0] || '',
                field2: this.val[1] || ''
            };
        },
        methods: {
            handleValue() {
                let localField1 = null;
                let localField2 = null;
                if (this.field1 !== '') {
                    localField1 = this.field1;
                }
                if (this.field2 !== '') {
                    localField2 = this.field2;
                }
                return this.$emit('change', [localField1, localField2]);
            }
        },
        watch: {
            field1() {
                this.handleValue();
            },
            field2() {
                this.handleValue();
            }
        }
    };
</script>
