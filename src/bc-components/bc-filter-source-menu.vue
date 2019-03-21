<style lang="scss">
    @import "../styles/_variables";
    @import "../styles/_inputs";

    .bc-filter-source-menu {
        .popover {
            padding: 10px;

            .dgt-list-component {
                padding: 0 0 15px 20px;
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
            <b>{{ $t('sources') }}</b>
            <div class="field width-full input-search">
                <i class="mdi mdi-magnify"></i>
                <input type="search" v-model="searchInput" :placeholder="$t('createSearch')" class="inp big">
            </div>
            <dgt-list :list="sourcesList" class="custom">
                <template slot="main-slot" slot-scope="slotProps">
                    <table class="list">
                        <tr class="source-item" v-for="(source, index) in sourcesList" :key="index">
                            <td class="name-source">{{ source.name }}</td>
                        </tr>
                    </table>
                </template>
            </dgt-list>
            <div class="text-center">
                <button @click="save" class="btn btn-primary">{{$t('save')}}</button>
                <button @click="cancel" class="btn">{{$t('cancel')}}</button>
            </div>
        </template>
    </dgt-context-menu>
</template>

<script>

    import dgtContextMenu from '../components/dgt-context-menu';
    import dgtList from '../components/dgt-list';

    const sources = [
        {name: 'Google', id: 208, type: 'WEB_SERVICES'},
        {name: 'Guardião', id: 0, type: 'BANCO_DE_DADOS'},
        {name: 'Base de Conhecimento', id: -1, type: 'BANCO_DE_DADOS'},
        {name: 'Base de Conhecimento', id: -1, type: 'BANCO_DE_DADOS'},
        {name: 'Base de Conhecimento', id: -1, type: 'BANCO_DE_DADOS'},
        {name: 'Base de Conhecimento', id: -1, type: 'BANCO_DE_DADOS'},
        {name: 'Base de Conhecimento', id: -1, type: 'BANCO_DE_DADOS'},
        {name: 'Base de Conhecimento', id: -1, type: 'BANCO_DE_DADOS'},
        {name: 'Base de Conhecimento', id: -1, type: 'BANCO_DE_DADOS'},
        {name: 'Base de Conhecimento', id: -1, type: 'BANCO_DE_DADOS'},
        {name: 'Base de Conhecimento', id: -1, type: 'BANCO_DE_DADOS'},
        {name: 'Base de Conhecimento', id: -1, type: 'BANCO_DE_DADOS'},
        {name: 'Base de Conhecimento', id: -1, type: 'BANCO_DE_DADOS'},
        {name: 'Base de Conhecimento', id: -1, type: 'BANCO_DE_DADOS'},
        {name: 'Apple', id: 209, type: 'WEB_SERVICES'}
    ];

    export default {
        name: 'bc-filter-source-modal',
        components: {
            dgtContextMenu,
            dgtList
        },
        props: {
            searchProp: String,
            sourcesProp: Array
        },
        data() {
            return {
                searchInput: this.searchProp || '',
                sources: this.sourcesProp || sources
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
                console.log('save');
                this.$refs.menu.onClickHeader();
            },
            cancel() {
                console.log('cancel');
                this.$refs.menu.onClickHeader();
            }
        }
    };
</script>
