<style lang="scss" scoped>
    .bc-filter-component {
      height: 100%;
      .middle-filter {
        overflow: auto;
        height: var(--bc-height-limit, 550px);
      }
    }
</style>

<template>
    <div class="bc-filter-component margin">
        <bc-filter-profile :profiles="profiles" @change="onProfileSelected" @reload-profiles="getProfiles" :tipo-pesquisa="idTipoPesquisa"
            :profile="jsonMounted" :json-view="uis" :json-bc="bcJson" :id-aplicacao="idAplicacao"
            @success="handleEvent($event, 'success')" @error="handleEvent($event, 'error')" :show="show">
        </bc-filter-profile>
        <h4> {{ 'searchProfile' | i18n }} </h4>
        <!-- <textarea name="" id="" cols="50" rows="50" style="position: absolute; right:0; top:0;">
            {{JSON.stringify(uis, null,8)}}

        </textarea> -->
        <div class="middle-filter">
            <bc-filter-ui v-for="(uiFilter, idx) in uis" :key="uiFilter.hash"
                            :idx="idx"
                            :uiFilter="uiFilter"
                            :logic-name-uis="listUis"
                            :source-types="sourceTypes"
                            :show-source-option="uiFilter.ui !== null"
                            @meta-ui-selected="onMetaUISelected($event, uiFilter)"
                            @meta-ui-removed="onMetaUIRemoved(idx)"
                            ref="filtroUI"
            ></bc-filter-ui>
        </div>
    </div>
</template>

<script>

    import BcFilterGroup from './bc-filter-group.vue';
    import BcFilterUi from './bc-filter-ui.vue';
    import BcFilterProfile from './bc-filter-profile.vue';
    import bcService from './services/bc-services.js';
    import { bcFilterToView, viewToBcFilter } from './utils/transform-filter.js';
    import i18n from './utils/i18n.js';

    export default {
        name: 'bc-filter',
        mixins: [i18n.mixin],
        components: {
            bcService,
            BcFilterUi,
            BcFilterGroup,
            BcFilterProfile
        },
        props: {
            listUis: Array,
            sourceTypes: Array,
            idAplicacao: String,
            idTipoPesquisa: String,
            filter: Array,
            show: {
                type: Boolean,
                default: true
            },
            profileSeleted: {
                type: Object,
                default: {}
            },
            tipoPesquisa: String,
            flatLevel: {
                type: Boolean,
                default: false
            }
        },
        data() {
            return {
                uis: null,
                profiles: [],
                emptyFilter: [{
                    ui: null,
                    operator: null,
                    criteria: [],
                    sources: [],
                    hash: Math.random()
                }],
                jsonMounted: Object.entries(this.profileSeleted).length ?
                    this.profileSeleted : this.defaultObj(),
                bcJson: []
            };
        },
        async created() {
            await this.getProfiles();
            this.uis = this.loadData();
            if (this.uis) {
                this.createEmptyUi();
            }
            document.addEventListener('getJson', function() {
                let dadosValidos = true;
                const quantiaFiltros = this.$refs.filtroUI.length;
                this.$refs.filtroUI.some(componente => {
                    if ((!componente.uiFilter || !componente.uiFilter.ui) && quantiaFiltros === 1) {
                        dadosValidos = false;
                        return true;
                    }
                    if (!componente.uiFilter || !componente.uiFilter.ui) {
                        return false;
                    }
                    const valido = componente.validaDados();
                    if (!valido) {
                        dadosValidos = false;
                        return true;
                    }
                    return false;
                });
                if (!dadosValidos) {
                    this.handleEvent('jsonError', 'error');
                    return;
                }
                let copyUis = JSON.parse(JSON.stringify(this.uis));
                let xml = {
                    jsonView: copyUis,
                    jsonBc: viewToBcFilter(JSON.parse(JSON.stringify(this.uis)))
                };
                console.log(xml);
                this.handleEvent(JSON.stringify(xml), 'json');
            }.bind(this), false);
        },
        methods: {
            validaDados() {
                console.log('asd');
            },
            loadData() {
                let criterios = this.filter ? bcFilterToView(this.filter) : this.emptyFilter;
                for (const criterio of criterios) {
                    if (criterio.hash) continue;
                    criterio.hash = Math.random();
                }
                return JSON.parse(JSON.stringify(criterios));
            },
            createEmptyUi() {
                const hasEmptyUI = this.uis.filter(item => item.ui === null);
                if (hasEmptyUI.length || this.flatLevel) return;
                // adiciona novo grupo de ui
                this.uis.push(
                    {
                        ui: null,
                        criteria: [],
                        operator: null,
                        sources: []
                    }
                );
            },
            defaultObj() {
                return {
                    aplicacao_id_aplicacao: null,
                    data_ultima_alteracao: null,
                    descricao: null,
                    flg_default: null,
                    id_cnfg_usua_app_pes: null,
                    id_tipo_pesquisa: null,
                    xml_config: {}
                };
            },
            onMetaUISelected(metaUI, ui) {
                ui.id = metaUI.id;

                const emptyUi = this.uis.find((e)=>e.id === null);

                if (!emptyUi) {
                    // adiciona novo grupo de ui
                    this.uis.push({id: null, attribs: []});
                }
            },
            onMetaUISelected(e, uiFilter) {
                uiFilter.ui = e.name;
                uiFilter.criteria = [{}];
                uiFilter.operator = 'AND';
                this.createEmptyUi();
            },
            onMetaUIRemoved(idx) {
                this.uis.splice(idx, 1);
                if (!this.uis.length) {
                    this.uis.push(
                        {
                            ui: null,
                            criteria: [],
                            operator: null,
                            sources: []
                        }
                    );
                }
                if (!this.$refs.uiGroup) return;
                this.$nextTick(()=>{
                    this.$refs.uiGroup.updateGroups();
                });
            },
            removeChangedUi(uiId) {
                if (!this.lastMetaUiSelected) {
                    return;
                }
                let keys = Object.keys(this.newFilter);
                delete this.newFilter[keys[this.idx]];
                this.lastMetaUiSelected = uiId;
            },
            onTypeChanged(type) {
                this.operator = type;
            },
            onOperatorChanged(value) {
                this.filterData.push(value);
            },
            onProfileSelected(obj) {
                if (!Object.entries(obj.xml_config).length) {
                    this.uis = [];
                    return this.createEmptyUi();
                }
                let xml = JSON.parse(obj.xml_config);
                return this.uis = xml.jsonView;
            },
            async getProfiles() {
                let response = await bcService.getSearchProfiles(this.tipoPesquisa, this.idAplicacao);
                if (response[0] && response[0].data) {
                    this.profiles = [];
                    response[0].data.sort((a, b) => {
                        let nameA = a.descricao.toLowerCase();
                        let nameB = b.descricao.toLowerCase();
                        if (nameA < nameB) return -1;
                        if (nameA > nameB) return 1;
                        return 0;
                    });
                    response[0].data.forEach(ui => {
                        this.profiles.push(ui);
                    });
                    this.$forceUpdate();
                }
            },
            handleEvent(msg, type) {
                var event = new CustomEvent(type, {detail: msg});
                document.dispatchEvent(event);
            },
            generateHash() {
                return (new Date()).valueOf();
            }
        }
    };
</script>
