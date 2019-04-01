<template>
    <div class="bc-filter-component">
        <bc-filter-profile :profiles="profiles" @change="onProfileSelected"
            @reload-profiles="getProfiles">
        </bc-filter-profile>
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
            idTipoPesquisa: String
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
                profile: {}
            };
        },
        async created() {
            await this.getProfiles();
        },
        methods: {
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
            }

        }
    };
</script>
