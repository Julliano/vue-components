<style scoped lang="scss">
    @import "../styles/variables";
    @import "../styles/buttons";

    .inline {
      display: inline-flex;
      .bc-meta-selection-field {
        display: inline;
        flex-direction: column;
        .options-container {
          display: inline-flex;
          align-items: center;
          margin-left: 5px;
        }
      }
    }
</style>

<template>
    <div class="inline">
        <div class="bc-meta-selection-field" v-if="localHierarchy">
            <div class="options-container" v-for="(each, index) in localHierarchy" :key="index">
                <select class="inp" @change="setHierarchy(index)" v-model="selecteds[index]">
                    <option :value="undefined" disabled>Selecione</option>
                    <option v-for="(each, idx) in options[index]" v-show="options[index]"
                            :key="idx" :value="each">
                            {{each.value}}
                    </option>
                </select>
            </div>
        </div>
        <meta-selection :hierarchy="hierarchy" :look-up="lookUp" @change="change"
                        :val="val" :child="true" :father-id="fatherId()" ref="metaSelector">
        </meta-selection>
    </div>
</template>

<script>

    import bcService from '../services/bc-services.js';
    import metaSelection from './bc-meta-selection.vue';

    export default {
        name: 'bc-meta-selection-hierarchy',
        props: {
            val: Array,
            lookUp: String,
            hierarchy: Array
        },
        components: {
            metaSelection
        },
        data() {
            return {
                selecteds: [],
                localHierarchy: null,
                options: []
            };
        },
        async created() {
            // invertendo a ordem do array de hierarquia e fazendo o request do primeiro
            this.localHierarchy = this.hierarchy.slice().reverse();
            this.getOptions(0);
        },
        methods: {
            async getOptions(index, id) {
                let response;
                if (!id) {
                    response = await
                    bcService.getTipoSelecaoOptions(this.localHierarchy[index]);
                } else {
                    response = await
                    bcService.getTipoSelecaoHierarquicoOptions(this.localHierarchy[index], id);
                }
                this.$set(this.options, index, response);
            },
            fatherId() {
                return this.selecteds[this.hierarchy.length - 1];
            },
            setHierarchy(index) {
                if (this.localHierarchy[index + 1]) {
                    this.getOptions(index + 1, this.selecteds[index].id);
                }
            },
            updateOptions() {
                this.options = [];
                this.selecteds = [];
                this.localHierarchy = null;
                this.$nextTick(() => {
                    this.localHierarchy = this.hierarchy.slice().reverse();
                    this.getOptions(0);
                });
            },
            change(val) {
                this.$emit('change', val);
            }
        }
    };
</script>
