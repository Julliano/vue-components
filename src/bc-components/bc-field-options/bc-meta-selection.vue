<style scoped lang="scss">
    @import "../styles/variables";
    @import "../styles/buttons";

    .bc-meta-selection-field {
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
        <div class="bc-meta-selection-field margin-left">
            <div class="options-container">
                <select class="inp" v-model="field">
                    <option :value="null" disabled>{{'select' | i18n}}</option>
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
    import i18n from '../utils/i18n.js';

    export default {
        name: 'bc-meta-selection',
        mixins: [i18n.mixin],
        props: {
            val: Array,
            lookUp: String,
            hierarchy: Array,
            child: {
                type: Boolean,
                default: false
            },
            fatherId: Object
        },
        data() {
            return {
                field: null,
                options: []
            };
        },
        async created() {
            // emitir evendo de erro caso de treta
            console.log(!this.child && this.lookUp);
            if (!this.child && this.lookUp) {
                this.options = await bcService.getTipoSelecaoOptions(this.lookUp);
            }
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
            },
            async fildsFiltereds() {
                if (this.fatherId) {
                    this.options = await
                    bcService.getTipoSelecaoHierarquicoOptions(this.lookUp, this.fatherId.id);
                }
            }
        },
        watch: {
            field() {
                this.handleValue();
            },
            fatherId() {
                this.fildsFiltereds();
            }
        }
    };
</script>
