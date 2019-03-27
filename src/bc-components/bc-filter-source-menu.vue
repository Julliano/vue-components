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

        .mdi {
            &.blue {
                color: $blue;
            }
        }
    }
</style>

<template>
    <dgt-context-menu :close-on-click="false" class="bc-filter-source-menu" ref="menu">
        <template slot="button">
            <i class="mdi mdi-database" :class="{'blue': hasSourceSelected}"></i>
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
                                        :id="`${uniqueId}-${source.name}-${source.id}`"
                                        :checked="source.checked"
                                        v-model="source.checked"
                                        :value="source.id">
                                    <label :for="`${uniqueId}-${source.name}-${source.id}`">{{ source.name }}</label>
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
    import bcService from './services/bc-services.js';

    const BC = {name: 'Base de Conhecimento', id: -1, type: 'BANCO_DE_DADOS', checked: true};

    export default {
        name: 'bc-filter-source-modal',
        mixins: [i18n.mixin],
        components: {
            dgtContextMenu,
            dgtList
        },
        props: {
            searchProp: String,
            uniqueId: Number,
            uiProps: String,
            sourceTypes: Array,
            sourcesSelectedProp: Array
        },
        data() {
            return {
                searchInput: this.searchProp || '',
                sources: [],
                ui: this.uiProps,
                showList: true
            };
        },
        created() {
            this.loadSources();
        },
        computed: {
            sourcesList() {
                if (!this.searchInput) {
                    return this.sources;
                }
                return this.sources.filter((source) => {
                    let searchText = this.searchInput.toLowerCase();
                    return source.name && source.name.toLowerCase().indexOf(searchText) >= 0;
                });
            },
            hasSourceSelected() {
                for (const source of this.getAppliedSources()) {
                    if (source.type !== BC.type) {
                        return true;
                    }
                }
                return false;
            }
        },
        methods: {
            async loadSources() {
                let sourcesTemp = await bcService.getSourcesForUI(this.ui);
                this.sources = [JSON.parse(JSON.stringify(BC))];
                for (const source of sourcesTemp) {
                    if (this.sourceTypes.indexOf(source.type) !== -1) {
                        this.sources.push(source);
                    }
                }
            },
            save() {
                this.$refs.menu.onClickHeader();
                this.searchInput = '';
                this.$emit('apply', JSON.parse(JSON.stringify(this.sources.filter((source) => source.checked))));
            },
            getAppliedSources() {
                const srcs = (this.sourcesSelectedProp || []);
                if (!this.sourcesSelectedProp) {
                    srcs.push(BC);
                }
                return srcs;
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
