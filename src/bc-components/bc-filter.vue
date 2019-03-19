<template>
    <div>
        <bc-filter-group v-model="operator" ref="uiGroup">
            <bc-filter-ui v-for="(ui, idx) in uis" :key="idx"
                          :ui="ui"
                          :meta-uis="metadata.uis"
                          :show-source-option="ui.id !== null"
                          @meta-ui-selected="onMetaUISelected($event, ui)"
                          @meta-ui-removed="onMetaUIRemoved(idx)"
            ></bc-filter-ui>
        </bc-filter-group>
    </div>
</template>

<script>

    import metadata from './metadata.json';

    import BcFilterGroup from './bc-filter-group.vue';
    import BcFilterUi from './bc-filter-ui.vue';
    export default {
        name: 'bc-filter',
        components: {BcFilterUi, BcFilterGroup},
        data() {
            return {
                metadata,
                operator: 'AND',
                uis: [{
                    id: null,
                    attribs: []
                }]
            };
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
            }
        }
    };
</script>
