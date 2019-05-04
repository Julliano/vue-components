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
        <button @click="getJson"> Teste </button>
        <h4>bc-filter</h4>
        <bc-filter :list-uis="listUis" :source-types="sourceTypes" :profile-seleted="profile" :tipo-pesquisa="tipoBusca"
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
        // eslint-disable-next-line max-lines-per-function
        data() {
            return {
                listUis: ['dc_arquivo', 'dc_view_arquivo', 'dc_agenda', 'dgt_bc_padrao', 'dgt_bc_unica', 'dc_historico_local', 'geo_endereco'],
                sourceTypes: ['WEB_SERVICES'],
                idAplicacao: 'aplicacao|bc|140',
                idTipoPesquisa: 'Perfil de pesquisa avançado de dados coletados',
                jsonFilter: {ui: 'dc_arquivo', sources: ['fonte'], operator: null, criteria: {}},
                idTipoPesquisa: 'Perfil de pesquisa avançado de dados coletados',
                tipoBusca: 'E',
                profile: {},
                filter: []
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
            document.addEventListener('json', function(e) {
                this.jsonBuffer = e.detail;
            }.bind(this), false);
        },
        methods: {
            getJson() {
                var event = new CustomEvent('getJson');
                document.dispatchEvent(event);
            }
        }
    };
</script>
