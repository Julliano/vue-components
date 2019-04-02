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
            <option value="" disabled :selected="selectedProfile.id_cnfg_usua_app_pes === null">{{'select' | i18n}}</option>
            <option v-for="(profile, idx) in profiles" :key="idx"
                    :value="idx" :selected="selectedProfile.descricao === profile.descricao">
                    {{profile.descricao}}
            </option>
        </select>
        <dgt-context-menu :close-on-click="true" :change-open="selectedProfile.id">
            <button slot="button" class="btn-icon" :class="{'disabled-button': selectedProfile.id}">
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
            @cancel="closeModal" @confirm="handleConfirm" :default-name="selectedProfile.descricao"
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
            json: {},
            profiles: Array
        },
        data() {
            return {
                showModal: false,
                modalType: 'saveAs',
                selectedProfile: {
                    id_cnfg_usua_app_pes: null
                },
                optionSelected: {
                    id: ''
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
        methods: {
            setDefault() {
                let defaultProfile = this.profiles.filter(profile => {
                    return profile.flg_default.valor === 'Sim';
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
                    return this.selectedProfile.flg_default && this.selectedProfile.flg_default.valor === 'Sim';
                }
                return null;
            },
            checkDisabled(option) {
                if (option.label === 'default') {
                    if (this.selectedProfile.flg_default &&
                        this.selectedProfile.flg_default.valor === 'Sim') return true;
                    if (!this.selectedProfile.id_cnfg_usua_app_pes) return true;
                } else if (option.label !== 'saveAs') {
                    return !this.selectedProfile.id_cnfg_usua_app_pes;
                }
                return null;
            },
            closeModal() {
                this.showModal = false;
            },
            fireProfileSaved() {
                try {
                    //necessário passar o json junto para salvar os filtros da pesquisa;
                    bcService.editProfile(this.selectedProfile);
                    this.$emit('success', 'save');
                    return this.$emit('reload-profiles');
                } catch (error) {
                    this.$emit('error', 'save');
                    return console.error('Erro ao salvar perfil');
                }
            },
            async fireProfileSavedAs(name) {
                //necessário passar o json junto para salvar os filtros da pesquisa;
                this.selectedProfile = this.selectedProfile.descricao ?
                    this.selectedProfile : this.json;
                if (this.checkSameProfileName(name)) {
                    try {
                        await bcService.saveSearchProfiles(this.selectedProfile, {descricao: name});
                        this.showModal = false;
                        this.$emit('success', 'saveAs');
                        return this.$emit('reload-profiles');
                    } catch (error) {
                        this.$emit('error', 'saveAs');
                        this.selectedProfile.id_cnfg_usua_app_pes = null;
                        this.$forceUpdate();
                        return console.error('Erro ao salvar perfil como');
                    }
                }
                this.$emit('error', 'saveAs');
                this.selectedProfile.id_cnfg_usua_app_pes = null;
                this.$forceUpdate();
                return alert('Erro ao salvar perfil com o mesmo nome');
            },
            async fireProfileDefault() {
                try {
                    await bcService.setDefaultProfile(this.selectedProfile);
                    this.$emit('success', 'default');
                    return this.$emit('reload-profiles');
                } catch (error) {
                    this.$emit('error', 'default');
                    return console.error('Erro ao setar default');
                }
            },
            async fireProfileRenamed(name) {
                if (this.checkSameProfileName(name)) {
                    try {
                        await bcService.renameSearchProfiles(this.selectedProfile, name);
                        this.showModal = false;
                        this.$emit('success', 'renamed');
                        return this.$emit('reload-profiles');
                    } catch (error) {
                        this.$emit('error', 'renamed');
                        this.selectedProfile.id_cnfg_usua_app_pes = null;
                        return alert('Não foi possível renomear a pesquisa.');
                    }
                }
                this.$emit('error', 'renamed');
                this.selectedProfile.id_cnfg_usua_app_pes = null;
                return alert('Erro ao salvar perfil com o mesmo nome');
            },
            async fireProfileRemoved() {
                try {
                    await bcService.deleteSearchProfiles(this.selectedProfile);
                    this.$emit('success', 'removed');
                    return this.$emit('reload-profiles');
                } catch (error) {
                    this.$emit('error', 'removed');
                    return alert('Não foi possível excluir a pesquisa.');
                }
            },
            checkSameProfileName(name) {
                if (this.profiles.length > 1) {
                    let defaultProfile = this.profiles.filter(profile => {
                        return profile.descricao === name;
                    });
                    if (defaultProfile.length) {
                        return false;
                    }
                }
                return true;
            }
        },
        watch: {
            profiles() {
                if (this.profiles.length) {
                    this.setDefault();
                }
            }
        }
    };
</script>
