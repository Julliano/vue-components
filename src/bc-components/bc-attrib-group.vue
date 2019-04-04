<template>
    <div>
        <bc-filter-group v-for="(attrib, idx) in criterias" :key="idx"
            class="bc-filter-group"
        >
            <bc-filter-attrib
                @meta-attrib-selected="onMetaAttribSelected($event, attrib, idx)"
                @meta-attrib-removed="onAttribRemoved(idx)"
                @new-group="onNewGroup"
                :meta-attribs="attribs" :attrib="attrib" ref="attrib"
            ></bc-filter-attrib>
        </bc-filter-group>
    </div>
</template>

<script>
    import BcFilterGroup from './bc-filter-group.vue';
    import BcFilterAttrib from './bc-filter-attrib.vue';
    export default {
        name: 'bc-attrib-group',
        components: {
            BcFilterGroup,
            BcFilterAttrib
        },
        props: {
            uiFilter: {},
            attrib: {},
            attribs: Array
        },
        data() {
            return {
                showAttribGroup: false,
                criterias: this.uiFilter.criteria
            };
        },
        methods: {
            onNewGroup() {
                this.criterias.push({
                    operator: null,
                    criteria: [{}]
                });
                console.log(this.criterias);
                this.showAttribGroup = true;
            }
        }
    };
</script>
