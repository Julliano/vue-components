<style scoped lang="scss">
@import '../styles/variables';
.bc-filter-profile{
  display: block;
  align-items: center;
  h4 {
    margin: 0px;
  }
  .inline {
      display: flex;
  }
  button {
    &.btn-icon {
      margin-top: -2px;
    }
    &.popover-item {
      &:nth-child(3) {
        border-top-color: $gray400;
        border-bottom-color: $gray400;
      }
    }
    text-align: left;
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
        <h4> {{ 'profile' | i18n }} </h4>
        <div class="inline">
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
                            {{ handleLabel(option) | i18n }}
                    </button>
                </div>
            </dgt-context-menu>
            <button class="btn" @click="newProfile">
                {{ 'new' | i18n }}
            </button>
            <bc-save-search-modal v-if="showModal" :type="modalType"
                @cancel="closeModal" @confirm="handleConfirm" :default-name="selectedProfile.descricao"
            ></bc-save-search-modal>
            <bc-save-search-confirm v-if="confirmModal" @cancel="closeConfirmModal" @confirm="handleReplace"></bc-save-search-confirm>
        </div>
        <hr/>
    </div>
</template>

<script>

    import bcSaveSearchModal from './modal/bc-save-search-modal.vue';
    import bcSaveSearchConfirm from './modal/bc-save-search-confirm.vue';
    import dgtContextMenu from '../components/dgt-context-menu.vue';
    import { viewToBcFilter } from './utils/transform-filter.js';
    import bcService from './services/bc-services.js';
    import i18n from './utils/i18n.js';

    export default {
        name: 'bc-filter-profile',
        mixins: [i18n.mixin],
        components: {
            bcService,
            dgtContextMenu,
            bcSaveSearchModal,
            bcSaveSearchConfirm
        },
        props: {
            show: {
                type: Boolean,
                default: true
            },
            profile: Object,
            json: Array,
            profiles: Array,
            tipoPesquisa: String
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
                confirmModal: false,
                enableDefaultOption: true,
                options: [
                    { id: 1, label: 'save' },
                    { id: 2, label: 'saveAs' },
                    { id: 3, label: 'default' },
                    { id: 4, label: 'rename' },
                    { id: 5, label: 'exclude' }
                ],
                first: true,
                newName: ''
            };
        },
        methods: {
            newProfile() {
                this.selectedProfile = {
                    aplicacao_id_aplicacao: null,
                    data_ultima_alteracao: null,
                    descricao: null,
                    flg_default: null,
                    id_cnfg_usua_app_pes: null,
                    id_tipo_pesquisa: null,
                    xml_config: null
                };
                this.$emit('change', this.selectedProfile);
            },
            handleLabel(option) {
                if (option.label === 'default') {
                    if (this.selectedProfile.flg_default &&
                            this.selectedProfile.flg_default.valor === 'Sim') {
                        return 'profileOptions.removeDefault';
                    }
                }
                return `profileOptions.${option.label}`;
            },
            setDefault() {
                if (Object.entries(this.profile).length) {
                    if (this.profile && this.profile.id_cnfg_usua_app_pes && this.first) {
                        this.first = false;
                        this.selectedProfile = this.profile;
                        this.$emit('change', this.selectedProfile);
                    } else if (this.profile.id_cnfg_usua_app_pes && !this.first) {
                        this.initialState();
                    }
                } else {
                    this.initialState();
                }
                this.$forceUpdate();
            },
            initialState() {
                if (!this.selectedProfile.descricao) {
                    let defaultProfile = this.profiles.filter(profile => {
                        return profile.flg_default.valor === 'Sim';
                    });
                    if (defaultProfile.length) {
                        [this.selectedProfile] = [...defaultProfile];
                        this.$emit('change', this.selectedProfile);
                    } else {
                        if (this.selectedProfile.flg_default) this.selectedProfile.flg_default.valor = 'Não';
                    }
                } else {
                    let initialProfile = this.profiles.filter(profile => {
                        return profile.descricao === this.selectedProfile.descricao;
                    });
                    if (initialProfile.length) {
                        [this.selectedProfile] = [...initialProfile];
                        this.$emit('change', this.selectedProfile);
                    }
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
                        if (!this.selectedProfile.descricao) {
                            this.modalType = 'saveAs';
                            return this.showModal = true;
                        }
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
                    if (!this.selectedProfile.descricao) return true;
                } else if (option.label !== 'save') {
                    return !this.selectedProfile.descricao;
                }
                return null;
            },
            closeModal() {
                this.showModal = false;
            },
            closeConfirmModal() {
                return this.confirmModal = false;
            },
            async handleReplace() {
                let profileFound = this.profiles.filter(profile => {
                    return profile.descricao.normalize('NFD').replace(/[\u0300-\u036f]/g, '').toLowerCase() ===
                        this.newName.normalize('NFD').replace(/[\u0300-\u036f]/g, '').toLowerCase();
                });
                if (this.newName && profileFound.length) {
                    try {
                        await bcService.replaceSearchProfiles(profileFound[0], this.json);
                        this.confirmModal = false;
                        this.showModal = false;
                        this.selectedProfile.descricao = name;
                        this.newName = '';
                        this.$emit('success', 'saveAs');
                        return this.$emit('reload-profiles');
                    } catch (error) {
                        this.$forceUpdate();
                        this.confirmModal = false;
                        return this.$emit('error', 'saveAs');
                    }
                }
                return null;
            },
            async fireProfileSaved() {
                try {
                    let copyJson = JSON.parse(JSON.stringify(this.json));
                    let xml = {
                        jsonView: this.json,
                        jsonBc: viewToBcFilter(copyJson)
                    };
                    await bcService.editProfile(this.selectedProfile, xml);
                    this.$emit('success', 'save');
                    return this.$emit('reload-profiles');
                } catch (error) {
                    return this.$emit('error', 'save');
                }
            },
            async fireProfileSavedAs(name) {
                this.selectedProfile = this.selectedProfile.descricao ?
                    this.selectedProfile : this.profile;
                if (this.checkSameProfileName(name, 'save')) {
                    try {
                        await bcService.saveSearchProfiles(this.selectedProfile,
                            {descricao: name}, this.json, this.tipoPesquisa);
                        this.showModal = false;
                        this.selectedProfile.descricao = name;
                        this.$emit('success', 'saveAs');
                        return this.$emit('reload-profiles');
                    } catch (error) {
                        this.$forceUpdate();
                        return this.$emit('error', 'saveAs');
                    }
                }
                return null;
            },
            async fireProfileDefault() {
                try {
                    await bcService.setDefaultProfile(this.selectedProfile);
                    this.$emit('success', 'default');
                    return this.$emit('reload-profiles');
                } catch (error) {
                    return this.$emit('error', 'default');
                }
            },
            async fireProfileRenamed(name) {
                if (this.checkSameProfileName(name, 'rename')) {
                    try {
                        await bcService.renameSearchProfiles(this.selectedProfile, name);
                        this.showModal = false;
                        this.selectedProfile.descricao = name;
                        this.$emit('success', 'renamed');
                        return this.$emit('reload-profiles');
                    } catch (error) {
                        return this.$emit('error', 'renamed');
                    }
                }
                return this.$emit('error', 'renamed-same-name');
            },
            async fireProfileRemoved() {
                try {
                    await bcService.deleteSearchProfiles(this.selectedProfile);
                    this.selectedProfile = { id_cnfg_usua_app_pes: null };
                    this.$emit('success', 'removed');
                    this.selectedProfile = { id_cnfg_usua_app_pes: null };
                    return this.$emit('reload-profiles');
                } catch (error) {
                    return this.$emit('error', 'removed');
                }
            },
            checkSameProfileName(name, param) {
                if (this.profiles.length > 1) {
                    let defaultProfile = this.profiles.filter(profile => {
                        return profile.descricao.normalize('NFD').replace(/[\u0300-\u036f]/g, '').toLowerCase() ===
                            name.normalize('NFD').replace(/[\u0300-\u036f]/g, '').toLowerCase();
                    });
                    if (defaultProfile.length) {
                        if (param === 'save') {
                            this.confirmModal = true;
                            this.newName = name;
                            return false;
                        } else if (param === 'rename') {
                            return false;
                        }
                        return false;
                    }
                }
                return true;
            }
        },
        watch: {
            profiles() {
                if (this.profiles.length) {
                    setTimeout(() => {
                        this.setDefault();
                    }, 300);
                }
            }
        }
    };
</script>
