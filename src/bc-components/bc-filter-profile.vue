<style scoped lang="scss">
    @import '../styles/_variables.scss';
    .bc-filter-profile{
        display: flex;
        align-items: center;
        button {
            text-align: left;
            &:nth-child(3) {
                border-top-color: $gray400;
                border-bottom-color: $gray400;
            }
            &.disabled-button{
                cursor: default;
                pointer-events: none;
                color: $gray900;
                opacity: 0.4;
            }
        }
    }
</style>

<template>
    <div class="bc-filter-profile field" v-if="show">
        <select name="profiles" class="inp" @change="fireProfileSelected">
            <option value="" disabled :selected="selectedProfile.id === null">{{'select' | i18n}}</option>
            <option v-for="(profile, idx) in profiles" :key="idx"
                    :value="idx" :selected="selectedProfile.label === profile.label">
                {{profile.label}}
            </option>
        </select>
        <dgt-context-menu :close-on-click="true" :change-open="!!selectedProfile.value">
            <button slot="button" class="btn-icon" :class="{'disabled-button': !selectedProfile.value}">
                <i class="mdi mdi-settings"></i>
            </button>
            <div slot="content">
                <button v-for="(option, idx) in options" :key="idx" class="btn popover-item"
                        :class="{'disabled-button': checkDisabled(option)}" @click="fireOptionSelected(option)">
                        <i v-if="checkDefault(option)" class="mdi mdi-check"></i>
                        {{ `profileOptions.${option.label}` | i18n }}
                </button>
            </div>
        </dgt-context-menu>
        <bc-save-search-modal v-if="showModal" :type="modalType"
            @cancel="closeModal" @confirm="handleConfirm"
        ></bc-save-search-modal>
    </div>
</template>

<script>

    import bcSaveSearchModal from './modal/bc-save-search-modal.vue';
    import dgtContextMenu from '../components/dgt-context-menu.vue';
    import bcService from './services/bc-services.js';
    import i18n from './utils/i18n.js';

    export default {
        name: 'bc-filter-profile',
        mixins: [i18n.mixin],
        components: {
            bcService,
            dgtContextMenu,
            bcSaveSearchModal
        },
        props: {
            show: {
                type: Boolean,
                default: true
            },
            profiles: Array
        },
        data() {
            return {
                showModal: false,
                modalType: 'saveAs',
                selectedProfile: {
                    id: null
                },
                optionSelected: {
                    id: null
                },
                enableDefaultOption: true,
                options: [
                    { id: 1, label: 'save' },
                    { id: 2, label: 'saveAs' },
                    { id: 3, label: 'default' },
                    { id: 4, label: 'rename' },
                    { id: 5, label: 'exclude' }
                ]
            };
        },
        created() {
            if (this.profiles) {
                this.setDefault();
            }
        },
        methods: {
            setDefault() {
                let defaultProfile = this.profiles.filter(profile => {
                    return profile.default === true;
                });
                if (defaultProfile.length) {
                    [this.selectedProfile] = [...defaultProfile];
                    this.$emit('change', this.selectedProfile);
                }
            },
            fireProfileSelected(e) {
                this.selectedProfile = this.profiles[e.target.value];
                this.$emit('change', this.selectedProfile);
            },
            fireOptionSelected(obj) {
                this.optionSelected = obj;
                switch (obj.label) {
                    case 'save':
                        return this.fireProfileSaved(obj);
                    case 'saveAs':
                        this.modalType = 'saveAs';
                        return this.showModal = true;
                    case 'default':
                        return this.fireProfileDefault(obj);
                    case 'rename':
                        this.modalType = 'rename';
                        return this.showModal = true;
                    case 'exclude':
                        return this.fireProfileRemoved(obj);
                    default:
                        return null;
                }
            },
            handleConfirm(name, type) {
                if (type === 'saveAs') {
                    return this.fireProfileSavedAs(name);
                }
                return this.fireProfileRenamed(name);
            },
            checkDefault(option) {
                if (option.label === 'default') {
                    return this.selectedProfile.default;
                }
                return null;
            },
            checkDisabled(option) {
                if (option.label === 'default') {
                    if (this.selectedProfile.default) return true;
                    if (!this.selectedProfile.id) return true;
                } else if (option.label !== 'saveAs') {
                    return !this.selectedProfile.id;
                }
                return null;
            },
            closeModal() {
                this.showModal = false;
            },
            fireProfileSaved(option) {
                //necessário passar o json junto para salvar os filtros da pesquisa;
                bcService.saveSearchProfiles(option);
            },
            fireProfileSavedAs(name) {
                this.showModal = false;
                //necessário passar o json junto para salvar os filtros da pesquisa;
                bcService.saveSearchProfiles({label: name});
            },
            fireProfileDefault(option) {
                bcService.setDefaultProfile(option);
            },
            fireProfileRenamed(name) {
                this.showModal = false;
                bcService.renameSearchProfiles(this.optionSelected, name);
            },
            fireProfileRemoved(option) {
                bcService.deleteSearchProfiles(option);
            }
        }
    };
</script>
