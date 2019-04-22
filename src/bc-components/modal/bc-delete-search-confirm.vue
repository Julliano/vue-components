<style lang="scss">
    @import "../styles/variables";
    .bc-delete-search-modal {
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
        <bc-modal class="bc-delete-search-modal">
            <template slot="header">
                <h3 class="modal-title"> {{ 'profileOptions.confirm' | i18n }} </h3>
                <button class="btn-icon btn-close" @click="closeSaveSearchModal">
                    <i class="mdi mdi-close"></i>
                </button>
            </template>
            <div slot="body" class="field width-full">
                <h3>
                    {{ `profileOptions.reallyDelete` | i18n }}
                </h3>
            </div>
            <footer slot="footer" class="text-right">
                <button @click="closeSaveSearchModal" class="btn" tabindex="1"> {{ 'cancel' | i18n }} </button>
                <button @click="checkSearchName" class="btn btn-primary" tabindex="1"> {{ `confirm` | i18n }} </button>
            </footer>
        </bc-modal>
    </div>
</template>
<script>
    import bcModal from '../utils/bc-modal.vue';
    import i18n from '../utils/i18n.js';

    export default {
        name: 'BcDeleteSearchModal',
        mixins: [i18n.mixin],
        components: {
            bcModal
        },
        methods: {
            closeSaveSearchModal() {
                this.$emit('cancel');
            },
            checkSearchName() {
                this.$emit('confirm');
            }
        }
    };
</script>
