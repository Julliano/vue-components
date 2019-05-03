<style scoped lang="scss">
    @import "../styles/variables";
    @import "../styles/buttons";

    .bc-meta-selection-field {
      display: inline-flex;
      flex-direction: column;
      .options-container {
        display: inline-flex;
        align-items: center;
      }
    }
</style>

<template>
    <div>
        <div class="bc-meta-selection-field">
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
            if (!this.child && this.lookUp) {
                await this.getSelectionOptions(this.lookUp);
            }
            this.checkVal();
        },
        methods: {
            async getSelectionOptions(lookUp) {
                this.options = await bcService.getTipoSelecaoOptions(lookUp);
            },
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
            async updateOptions(lookUp) {
                await this.getSelectionOptions(lookUp);
            },
            handleValue() {
                if (!this.field || this.field === '') {
                    return this.$emit('change', null);
                }
                return this.$emit('change', [this.field.id]);
            },
            async fildsFiltereds() {
                if (this.fatherId) {
                    return this.options = await
                    bcService.getTipoSelecaoHierarquicoOptions(this.lookUp, this.fatherId.id);
                }
                return this.options = [];
            }
        },
        watch: {
            async field() {
                if (!this.options.length) {
                    this.options = await bcService.getTipoSelecaoOptions(this.lookUp);
                }
                this.checkVal();
                this.handleValue();
            },
            fatherId() {
                this.fildsFiltereds();
            }
        }
    };
</script>
