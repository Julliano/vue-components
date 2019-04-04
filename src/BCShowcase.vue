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
        <bc-filter :list-uis="listUis" :source-types="sourceTypes"
            :id-aplicacao="idAplicacao" :id-tipo-pesquisa="idTipoPesquisa" :filter="filter"></bc-filter>
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
                listUis: ['dc_arquivo', 'dc_view_arquivo', 'dc_agenda', 'bc_padrao', 'bc_unica'],
                sourceTypes: ['WEB_SERVICES'],
                idAplicacao: 'aplicacao|bc|140',
                filter: [
                    {
                        ui: 'dc_arquivo',
                        sources: [],
                        filter: {}
                    }
                ],
                idTipoPesquisa: 'Perfil de pesquisa avançado de dados coletados'
            };
        },
        created() {
            // eventos para capturar os requests do component filter;
            document.addEventListener('success', function(e) {
                console.log(e.detail);
            }, false);
            // eventos para capturar os requests do component filter;
            document.addEventListener('error', function(e) {
                console.log(e.detail);
            }, false);
        }
    };
</script>
