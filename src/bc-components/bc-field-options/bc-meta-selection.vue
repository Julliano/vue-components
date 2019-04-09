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
        <div class="bc-text-field margin-left">
            <div class="options-container">
                <select class="inp" v-model="field">
                    <option :value="null" disabled>Selecione</option>
                    <option v-for="(date, idx) in options" :key="idx" :value="date">
                            {{date.value}}
                    </option>
                </select>
            </div>
        </div>
    </div>
</template>

<script>

    import bcService from '../services/bc-services.js';

    export default {
        name: 'bc-meta-selection',
        props: {
            val: Array
        },
        data() {
            return {
                field: null,
                options: []
            };
        },
        async created() {
            // ajustar request (está retornando dados mocados)
            this.options = await bcService.getTipoSelecaoOptions();
            this.checkVal();
        },
        methods: {
            checkVal() {
                if (this.val[0]) {
                    let option = this.options.filter(op => {
                        return op.id === this.val[0];
                    });
                    if (option) {
                        [this.field] = [...option];
                    }
                }
            },
            handleValue() {
                if (this.field === '') {
                    return this.$emit('change', null);
                }
                return this.$emit('change', [this.field.id]);
            }
        },
        watch: {
            field() {
                this.handleValue();
            }
        }
    };
</script>
