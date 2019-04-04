<template>
    <div class="bc-filter-component">
        <h4>Perfil</h4>
        <bc-filter-profile :profiles="profiles" @change="onProfileSelected"
            @reload-profiles="getProfiles" :json="jsonMounted" @sucess="handleEvent($event, 'sucess')" @error="handleEvent($event, 'error')">
        </bc-filter-profile>
        <hr/>
        <h4>Filtro</h4>
        {{uis}}
        <bc-filter-ui v-for="(uiFilter, idx) in uis" :key="idx"
                        :idx="idx"
                        :uiFilter="uiFilter"
                        :logic-name-uis="listUis"
                        :source-types="sourceTypes"
                        :show-source-option="uiFilter.ui !== null"
                        @meta-ui-selected="onMetaUISelected($event, uiFilter)"
                        @meta-ui-removed="onMetaUIRemoved(idx)"
                        @operator-changed="onOperatorChanged"
        ></bc-filter-ui>
    </div>
</template>

<script>

    import BcFilterGroup from './bc-filter-group.vue';
    import BcFilterUi from './bc-filter-ui.vue';
    import BcFilterProfile from './bc-filter-profile.vue';
    import bcService from './services/bc-services.js';
    import {bcFilterToView} from './utils/transform-filter.js';
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
            filter: Array
        },
        data() {
            return {
                uis: null,
                filterData: [],
                profiles: [],
                profile: {},
                jsonMounted: {
                    descricao: ''
                },
                emptyFilter: [{
                    ui: null,
                    operator: null,
                    criteria: [],
                    sources: []
                }]

            };
        },
        async created() {
            await this.getProfiles();
            this.uis = this.loadData();
            if (this.uis) {
                this.createEmptyUi();
            }
        },
        methods: {
            loadData() {
                return this.filter ? bcFilterToView(this.filter) : this.emptyFilter;
            },
            createEmptyUi() {
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
            onMetaUISelected(e, uiFilter) {
                uiFilter.ui = e.name;
                uiFilter.criteria.push({});
                this.createEmptyUi();
            },

            onMetaUIRemoved(idx) {
                this.uis.splice(idx, 1);

                this.$nextTick(()=>{
                    this.$refs.uiGroup.updateGroups();
                });
            },
            onProfileSelected(e) {
                console.log(e.target.value);
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
                console.log(this.filterData);
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
            },
            handleEvent(msg, type) {
                var event = new CustomEvent(type, {detail: msg});
                document.dispatchEvent(event);
            }
        }
    };
</script>
