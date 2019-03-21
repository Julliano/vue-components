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
            <div class="options-container">
                <select class="inp" @change="fireAttribSelected">
                    <option value="" disabled :selected="attrib.id === null">{{'select' | i18n}}</option>
                    <option v-for="(opt, idx) in metaAttribs" :key="idx"
                            :value="idx" :selected="attrib.name === opt.name"
                    >
                        {{opt.label}}
                    </option>
                </select>
                <button class="btn btn-small btn-filter" v-if="!attrib.id">{{'newGroup' | i18n}}</button>
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
            attrib: {
                id: ''
            },
            metaAttribs: Array,
            showSourceOption: Boolean,
            chield: false
        },
        data() {
            return {
                atributo: {},
                render: true
            };
        },
        methods: {
            fireAttribSelected(e) {
                const metaAttrib = this.metaAttribs[e.target.value];
                this.atributo = metaAttrib;
                this.$emit('meta-attrib-selected', metaAttrib);
                this.$forceUpdate();
            },
            fireOperatorRemoved() {
                this.$emit('meta-attrib-removed');
            },
            repassFieldSelected(param) {
                this.$emit('meta-field-selected', param);
            }
        }
    };
</script>
