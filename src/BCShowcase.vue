<style lang="scss" scoped>
    .showcase {
        margin-left: 20px;

        h3 {
            margin: 25px 0 5px;
        }
    }
</style>

<template>
    <div class="dgt-container light padding">
        <h3>BC Components Showcase</h3>
        <hr/>
        <h4>bc-filter</h4>
        <bc-filter :list-uis="listUis" :source-types="sourceTypes"></bc-filter>
    </div>
</template>

<script>
    import bcFilter from './bc-components/bc-filter.vue';

    export default {
        name: 'app',
        components: {
            bcFilter
        },
        data() {
            return {
                listUis: ['dc_arquivo, dc_view_arquivo, dc_agenda', 'bc_padrao', 'bc_unica'],
                sourceTypes: ['WEB_SERVICES']
            };
        }
    };
</script>
