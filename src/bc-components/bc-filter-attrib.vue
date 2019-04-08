<style scoped lang="scss">
    @import "styles/variables";
    @import "styles/buttons";

    .bc-filter-attrib {
        display: inline-flex;
        flex-direction: column;
    }
    .options-container {
        display: inline-flex;
        align-items: center;
    }
</style>

<template>
    <div>
        <div class="bc-filter-attrib">
            <div class="options-container" v-for="(item, index) in checkLevel()" :key="index">
                <select class="inp" @change="fireAttribSelected(index)" v-model="selectedAttrib">
                    <option :value="null" disabled>{{'select' | i18n}}</option>
                    <option v-for="(opt, idx) in metaAttribs" :key="idx"
                            :value="opt" 
                    >
                      {{opt.label}}
                    </option>
                </select>
                <button class="btn btn-small btn-filter" v-if="!item.attr" @click="fireNewGroup">{{'newGroup' | i18n}}</button>
                <bc-filter-operators v-else-if="selectedAttrib"
                    :auto-complete="selectedAttrib.autocomplete"
                    :tipo-attrib="selectedAttrib.type" :ui-name="ui"
                    :attrib-name="selectedAttrib.name" :criteria="item"
                    @meta-operator-selected="onMetaOperatorSelected($event, item)"
                    @meta-operator-removed="fireAttribRemoved"
                    @data-option-selected="onDataOptionSelected($event, idx)"
                    ref="operator"                  
                ></bc-filter-operators>
            </div>
        </div>
    </div>
</template>

<script>

    import i18n from './utils/i18n.js';
    import BcFilterOperators from './bc-filter-operators.vue';

    export default {
        name: 'bc-filter-attrib',
        mixins: [i18n.mixin],
        components: {
            BcFilterOperators
        },
        props: {
            criteria: null,
            metaAttribs: Array,
            ui: String
        },
        data() {
            return {
                render: true,
                selectedAttrib: null
            };
        },
        methods: {
            async verifyEmptyCriteria() {
                return await new Promise(resolve => {
                    setTimeout(() => {
                        if (this.criteria[0]) {
                            resolve(Object.entries(this.criteria[0]).length);
                        }
                    }, 0);
                });
            },
            fireAttribSelected(idx) {
                this.$emit('meta-attrib-selected', this.selectedAttrib);
                this.$refs.operator[idx].attribChanged();
            },
            fireAttribRemoved() {
                this.$emit('meta-attrib-removed');
            },
            fireNewGroup() {
                this.$emit('new-group', this.criteria);
            },
            onMetaOperatorSelected(operator, criteria) {
                if (!operator) {
                    this.$delete(criteria, 'val');
                    return this.$delete(criteria, 'oper');
                }
                return this.$set(criteria, 'oper', operator.name);
            },
            repassFieldSelected(param) {
                this.$emit('meta-field-selected', param);
            },
            checkLevel() {
                if (this.criteria.operator) {
                    console.log('tem criteria');
                }
                for (const attrib of this.metaAttribs) {
                    if (attrib.name === this.criteria.attr) {
                        this.selectedAttrib = attrib;
                        break;
                    }
                }
                return [this.criteria];
            }
        },
        watch: {
            criteria() {
                if (Object.entries(this.criteria).length) return;
                this.selectedAttrib = null;
            }
        }
    };
</script>
