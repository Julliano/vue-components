<template>
    <div class="bc-filter-component">
        <bc-filter-profile :profiles="profiles" @change="onProfileSelected" @reload-profiles="getProfiles" :tipo-pesquisa="idTipoPesquisa"
            :profile="jsonMounted" :json="jsonFilter" @success="handleEvent($event, 'sucess')" @error="handleEvent($event, 'error')" :show="show">
        </bc-filter-profile>
        <h4> {{ 'searchProfile' | i18n }} </h4>
        <bc-filter-group v-model="operator" ref="uiGroup" @type-changed="onTypeChanged">
            <bc-filter-ui v-for="(ui, idx) in uis" :key="idx"
                          :operator="operator"
                          :idx="idx"
                          :ui="ui"
                          :logic-name-uis="listUis"
                          :source-types="sourceTypes"
                          :show-source-option="ui.id !== null"
                          @meta-ui-selected="onMetaUISelected($event, ui)"
                          @meta-ui-removed="onMetaUIRemoved(idx)"
                          @operator-changed="onOperatorChanged"
            ></bc-filter-ui>
        </bc-filter-group>
    </div>
</template>

<script>

    import BcFilterGroup from './bc-filter-group.vue';
    import BcFilterUi from './bc-filter-ui.vue';
    import BcFilterProfile from './bc-filter-profile.vue';
    import bcService from './services/bc-services.js';
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
            show: {
                type: Boolean,
                default: true
            },
            profileSeleted: {
                type: Object,
                default: {}
            },
            jsonFilter: Object
        },
        data() {
            return {
                operator: 'AND',
                uis: [{
                    id: null,
                    attribs: []
                }],
                filterData: [],
                profiles: [],
                profile: {},
                jsonMounted: this.profileSeleted ? this.profileSeleted : this.defaultObj()
            };
        },
        async created() {
            await this.getProfiles();
        },
        methods: {
            defaultObj() {
                return {
                    aplicacao_id_aplicacao: {},
                    data_ultima_alteracao: '',
                    descricao: '',
                    flg_default: {},
                    id_cnfg_usua_app_pes: '',
                    id_tipo_pesquisa: {},
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

                this.$nextTick(()=>{
                    this.$refs.uiGroup.updateGroups();
                });
                // limpa os atributos da ui
                ui.attribs = [{id: null}];
            },

            onMetaUIRemoved(idx) {
                this.uis.splice(idx, 1);

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
                this.profile = obj;
            },
            async getProfiles() {
                let response = await bcService.getSearchProfiles();
                this.profiles = [];
                response.uis.forEach(ui => {
                    this.profiles.push(ui);
                });
                this.$forceUpdate();
            },
            handleEvent(msg, type) {
                var event = new CustomEvent(type, {detail: msg});
                document.dispatchEvent(event);
            }
        }
    };
</script>
