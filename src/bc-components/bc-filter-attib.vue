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
                    <option value="" disabled :selected="attrib.id === null">Selecione</option>
                    <option v-for="(opt, idx) in metaAttribs" :key="idx"
                            :value="idx"
                            :selected="attrib.id === opt.id"
                    >
                        {{opt.name}}
                    </option>
                </select>
                <button class="btn btn-filter" v-if="attrib.id !== null">
                    <i class="mdi mdi-close" @click="fireAttribRemoved"></i>
                </button>
                <button class="btn btn-small btn-filter" v-else>Novo grupo</button>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'bc-filter-attrib',
        props: {
            attrib: Object,
            metaAttribs: Array,
            showSourceOption: Boolean
        },
        methods: {
            fireAttribSelected(e) {
                const metaAttrib = this.metaAttribs[e.target.value];
                this.$emit('meta-attrib-selected', metaAttrib);
            },
            fireAttribRemoved() {
                this.$emit('meta-attrib-removed', this.attrib);
            }
        }
    };
</script>
