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
                <select class="inp" @change="fireAttribSelected">
                    <option value="" disabled :selected="verifyEmptyCriteria()">{{'select' | i18n}}</option>
                    <option v-for="(opt, idx) in metaAttribs" :key="idx"
                            :value="idx" 
                            :selected="item.attr === opt.name"
                    >
                      {{opt.label}}
                    </option>
                </select>
                <button class="btn btn-small btn-filter" v-if="!criteria.id" @click="fireNewGroup">{{'newGroup' | i18n}}</button>
                <slot name="operator"></slot>
            </div>
        </div>
    </div>
</template>

<script>

    import i18n from './utils/i18n.js';

    export default {
        name: 'bc-filter-attrib',
        mixins: [i18n.mixin],
        props: {
            criteria: null,
            metaAttribs: Array
        },
        data() {
            return {
                render: true
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
            fireAttribSelected(e) {
                const metaAttrib = this.metaAttribs[e.target.value];
                this.$emit('meta-attrib-selected', metaAttrib);
                this.$forceUpdate();
            },
            fireOperatorRemoved() {
                this.$emit('meta-attrib-removed');
            },
            fireNewGroup() {
                this.$emit('new-group', this.criteria);
            },
            repassFieldSelected(param) {
                this.$emit('meta-field-selected', param);
            },
            checkLevel() {
                if (this.criteria.operator) {
                    console.log('tem criteria');
                }
                return [this.criteria];
            }
        }
    };
</script>
