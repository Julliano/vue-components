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
        flex-wrap: wrap;
    }
    .meta-ui{
        flex-basis: 100%;
    }
</style>

<template>
    <div>
        <div class="bc-filter-attrib">
            <div class="options-container" v-for="(item, index) in checkLevel()" :key="generateHash(item)">
                <select class="inp" @change="fireAttribSelected(index)" v-model="selectedAttrib">
                    <option :value="null" disabled>{{'select' | i18n}}</option>
                    <option v-for="(opt, idx) in metaAttribs" :key="idx"
                            :value="opt" 
                    >
                      {{opt.label}}
                    </option>
                </select>
                <button class="btn btn-small btn-filter" v-if="!item.attr" @click="fireNewGroup">{{'newGroup' | i18n}}</button>
                <bc-filter-operators v-else-if="selectedAttrib && selectedAttrib.type !== '_meta_ui'"
                    :auto-complete="selectedAttrib.autocomplete"
                    :tipo-attrib="selectedAttrib.type" :ui-name="ui"
                    :attrib-name="selectedAttrib.name" :criteria="item"
                    @meta-operator-selected="onMetaOperatorSelected($event, item)"
                    @meta-operator-removed="fireAttribRemoved"
                    @data-option-selected="onDataOptionSelected($event, idx)"
                    ref="operator"                  
                ></bc-filter-operators>
            </div>
            <div class="meta-ui margin-top" v-if="selectedAttrib && selectedAttrib.type === '_meta_ui'" >
                <bc-attrib-group                                       
                    :meta-attribs="metaAttribs" 
                    :filter="criteria"
                    :ui="selectedAttrib.metaType"
                    :selectedAttrib = "selectedAttrib"
                    ref="attribGroup">
                </bc-attrib-group>
            </div>
        </div>
    </div>
</template>

<script>

    import i18n from './utils/i18n.js';
    import BcFilterOperators from './bc-filter-operators.vue';
    import BcAttribGroup from './bc-attrib-group.vue';

    export default {
        name: 'bc-filter-attrib',
        mixins: [i18n.mixin],
        components: {
            BcFilterOperators,
            BcAttribGroup
        },
        props: {
            criteria: null,
            metaAttribs: Array,
            ui: String,
            recursiveAttrib: Object
        },
        data() {
            return {
                render: true,
                selectedAttrib: this.recursiveAttrib || null
            };
        },
        methods: {
            fireAttribSelected(idx) {
                this.$emit('meta-attrib-selected', this.selectedAttrib);
                if (this.$refs.operator && this.$refs.operator.length > 0) {
                    this.$refs.operator[idx].attribChanged();
                }
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
                let {attr} = {...this.criteria};
                if (!Object.entries(this.criteria).length) {
                    return [{}];
                }
                const isOtherUI = this.criteria.attr.indexOf('.');
                if (isOtherUI !== -1) {
                    attr = this.criteria.attr.substr(0, isOtherUI);
                }
                for (const attrib of this.metaAttribs) {
                    if (attrib.name === attr) {
                        this.selectedAttrib = attrib;
                        if (attrib.type === '_meta_ui') this.mountCriteriaByOtherUI();
                        break;
                    }
                }
                return [this.criteria];
            },
            mountCriteriaByOtherUI() {
                const isOtherUI = this.criteria.attr.indexOf('.');
                if (isOtherUI === -1) {
                    return;
                }
                const ui = this.criteria.attr.substr(0, isOtherUI);

                this.$set(this.criteria, 'operator', 'and');
                this.$set(this.criteria, 'criteria', [{
                    attr: this.criteria.attr.substr(isOtherUI + 1, this.criteria.attr.length),
                    oper: this.criteria.oper,
                    val: this.criteria.val
                }]);
                this.$set(this.criteria, 'attr', ui);

                this.$delete(this.criteria, 'oper');
                this.$delete(this.criteria, 'val');
            },
            generateHash(item) {
                if (item.hash) {
                    return item.hash;
                }
                return item.hash = Math.random();
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
