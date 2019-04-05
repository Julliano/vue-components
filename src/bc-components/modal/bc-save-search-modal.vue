<style lang="scss">
    @import "../styles/variables";

    .bc-save-search-modal {
        .modal-container {
            width: 350px;
            max-width: 650px;
        }
        .modal-title {
            margin-right: auto;
        }
    }
</style>

<template>
    <div>
        <bc-modal class="bc-save-search-modal">
            <template slot="header">
                <h3 class="modal-title"> {{ `search.${type}` | i18n }} </h3>
                <button class="btn-icon btn-close" @click="closeSaveSearchModal">
                    <i class="mdi mdi-close"></i>
                </button>
            </template>
            <div slot="body" class="field width-full">
                <label>
                    {{ `search.name` | i18n }}
                    <input name="operation" autocomplete="off" type="text" class="inp big" v-model="nome" maxlength="100">
                </label>
            </div>
            <footer slot="footer" class="text-right">
                <button @click="closeSaveSearchModal" class="btn"> {{ 'cancel' | i18n }} </button>
                <button @click="checkSearchName" :disabled="!nome" class="btn btn-primary"> {{ `confirm` | i18n }} </button>
            </footer>
        </bc-modal>
    </div>
</template>
<script>
    import bcModal from '../utils/bc-modal.vue';
    import i18n from '../utils/i18n.js';

    export default {
        name: 'BcSaveSearchModal',
        mixins: [i18n.mixin],
        components: {
            bcModal
        },
        props: {
            type: {
                type: String,
                default: 'saveAs'
            },
            defaultName: String
        },
        data() {
            return {
                nome: null
            };
        },
        created() {
            if (this.type === 'rename' && this.defaultName) this.nome = this.defaultName;
        },
        methods: {
            closeSaveSearchModal() {
                this.$emit('cancel');
            },
            checkSearchName() {
                this.$emit('confirm', this.nome, this.type);
            }
        }
    };
</script>
