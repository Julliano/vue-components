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
                <select class="inp" @change="fireAttribSelected" v-model="attrib.id">
                    <option value="" disabled :selected="attrib.id === null">Selecione</option>
                    <option v-for="(opt, idx) in metaAttribs" :key="idx"
                            :value="idx"
                    >
                        {{opt.name}}
                    </option>
                </select>
                <button class="btn btn-small btn-filter" v-if="!attrib.id">Novo grupo</button>
                <slot></slot>
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
            showSourceOption: Boolean,
            chield: false
        },
        methods: {
            fireAttribSelected(e) {
                const metaAttrib = this.metaAttribs[e.target.value];
                this.$emit('meta-attrib-selected', metaAttrib);
            }
        }
    };
</script>
