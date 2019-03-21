<style lang="scss">
    @import "../styles/_variables";
    @import "../styles/_inputs";

    .bc-filter-source-menu {
        .popover {
            padding: 10px;

            .dgt-list-component {
                padding: 0 0 15px 0;
                width: 250px;

                .list {
                    max-height: 120px !important;
                    overflow-y: auto;
                }
            }
        }
    }
</style>

<template>
    <dgt-context-menu :close-on-click="false" class="bc-filter-source-menu" ref="menu">
        <template slot="button">
            <i class="mdi mdi-database"></i>
        </template>
        <template slot="content">
            <b>{{ 'sources' | i18n}}</b>
            <div class="field width-full input-search">
                <i class="mdi mdi-magnify"></i>
                <input type="search" v-model="searchInput" :placeholder="'createSearch' | i18n" class="inp big">
            </div>
            <dgt-list :list="sourcesList" class="custom" v-if="showList">
                <template slot="main-slot" slot-scope="slotProps">
                    <table class="list">
                        <tr class="source-item" v-for="(source, index) in slotProps.list" :key="index">
                            <td class="name-source">
                                <div class="checkbox">
                                    <input
                                        type="checkbox"
                                        class="inp"
                                        :id="`${source.name}-${source.id}`"
                                        :checked="source.checked"
                                        v-model="source.checked"
                                        :value="source.id">
                                    <label :for="`${source.name}-${source.id}`">{{ source.name }}</label>
                                </div>
                            </td>
                        </tr>
                    </table>
                </template>
            </dgt-list>
            <div class="text-center">
                <button @click="save" class="btn btn-primary">{{'save' | i18n}}</button>
                <button @click="cancel" class="btn">{{'cancel' | i18n}}</button>
            </div>
        </template>
    </dgt-context-menu>
</template>

<script>

    import dgtContextMenu from '../components/dgt-context-menu.vue';
    import dgtList from '../components/dgt-list.vue';
    import i18n from './utils/i18n.js';

    const sourcesMock = [
        {name: 'Google', id: 208, type: 'WEB_SERVICES'},
        {name: 'Guardião', id: 0, type: 'BANCO_DE_DADOS'},
        {name: 'Base de Conhecimento', id: -1, type: 'BANCO_DE_DADOS'},
        {name: 'Base de Conhecimento 3', id: 3, type: 'BANCO_DE_DADOS'},
        {name: 'Base de Conhecimento 4', id: 4, type: 'BANCO_DE_DADOS'},
        {name: 'Base de Conhecimento 5', id: 5, type: 'BANCO_DE_DADOS'},
        {name: 'Base de Conhecimento 6', id: 6, type: 'BANCO_DE_DADOS'},
        {name: 'Base de Conhecimento 7', id: 7, type: 'BANCO_DE_DADOS'},
        {name: 'Base de Conhecimento 8', id: 8, type: 'BANCO_DE_DADOS'},
        {name: 'Base de Conhecimento 9', id: 9, type: 'BANCO_DE_DADOS'},
        {name: 'Base de Conhecimento 10', id: 10, type: 'BANCO_DE_DADOS'},
        {name: 'Base de Conhecimento 11', id: 11, type: 'BANCO_DE_DADOS'},
        {name: 'Base de Conhecimento 12', id: 12, type: 'BANCO_DE_DADOS'},
        {name: 'Base de Conhecimento 13', id: 13, type: 'BANCO_DE_DADOS'},
        {name: 'Apple', id: 209, type: 'WEB_SERVICES'}
    ];

    export default {
        name: 'bc-filter-source-modal',
        mixins: [i18n.mixin],
        components: {
            dgtContextMenu,
            dgtList
        },
        props: {
            searchProp: String,
            sourcesSelectedProp: Array
        },
        data() {
            return {
                searchInput: this.searchProp || '',
                sources: sourcesMock,
                showList: true
            };
        },
        computed: {
            sourcesList() {
                if (!this.searchInput) {
                    return this.sources.slice();
                }
                return this.sources.filter((source) => {
                    let searchText = this.searchInput.toLowerCase();
                    return source.name && source.name.toLowerCase().indexOf(searchText) >= 0;
                });
            }
        },
        methods: {
            save() {
                this.$refs.menu.onClickHeader();
                this.searchInput = '';
                this.$emit('apply', JSON.parse(JSON.stringify(this.sources.filter((source) => source.checked))));
            },
            cancel() {
                outter: for (const source of this.sources || []) {
                    for (const sourceProp of this.sourcesSelectedProp  || []) {
                        if (sourceProp.id === source.id) {
                            source.checked = sourceProp.checked;
                            continue outter;
                        }
                    }
                    source.checked = false;
                }
                this.searchInput = '';
                this.showList = false;
                this.$nextTick(() => {
                    this.showList = true;
                });
                this.$refs.menu.onClickHeader();
            }
        }
    };
</script>
