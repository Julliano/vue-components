<style scoped lang="scss">
    @import '../styles/_variables.scss';
    .bc-filter-profile{
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
        <dgt-context-menu :close-on-click="true" :change-open="!!selectedProfile.id">
            <button slot="button" class="btn-icon" :class="{'disabled-button': !selectedProfile.id}">
                <i class="mdi mdi-settings"></i>
            </button>
            <div slot="content">
                <button v-for="(option, idx) in options" :key="idx"
                    class="btn popover-item" @click="fireOptionSelected(option)">
                        {{ `profileOptions.${option.label}` | i18n }}
                </button>
            </div>
        </dgt-context-menu>
    </div>
</template>

<script>
    import dgtContextMenu from '../components/dgt-context-menu.vue';
    import i18n from './utils/i18n.js';

    export default {
        name: 'bc-filter-profile',
        mixins: [i18n.mixin],
        components: {
            dgtContextMenu
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
                selectedProfile: {
                    id: null
                },
                optionSelected: {
                    id: null
                },
                enableDefaultOption: true,
                options: [
                    {
                        id: 1,
                        label: 'save'
                    },
                    {
                        id: 2,
                        label: 'saveAs'
                    },
                    {
                        id: 3,
                        label: 'default'
                    },
                    {
                        id: 4,
                        label: 'rename'
                    },
                    {
                        id: 5,
                        label: 'exclude'
                    }
                ]
            };
        },
        methods: {
            fireProfileSelected(e) {
                this.selectedProfile = this.profiles[e.target.value];
                this.$emit('change', this.selectedProfile);
            },
            fireOptionSelected(obj) {
                this.optionSelected = obj;
                console.log(this.optionSelected.label);
                this.$emit('change-option', this.optionSelected);
            },
            fireProfileRenamed() {
                console.log('oi');
            },
            fireProfileSaved() {
                console.log('oi');
            },
            fireProfileSavedAs() {
                console.log('oi');
            },
            fireProfileRemoved() {
                console.log('oi');
            },
            fireProfileDefault() {
                console.log('oi');
            }
        }
    };
</script>
