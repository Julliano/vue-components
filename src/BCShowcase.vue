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
        <bc-filter :list-uis="listUis" :source-types="sourceTypes" :profile-seleted="profile"
            :id-aplicacao="idAplicacao" :id-tipo-pesquisa="idTipoPesquisa" :json-filter="jsonFilter" :filter="filter"></bc-filter>
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
                listUis: ['dc_arquivo', 'dc_view_arquivo', 'dc_agenda', 'dgt_bc_padrao', 'dgt_bc_unica'],
                sourceTypes: ['WEB_SERVICES'],
                idAplicacao: 'aplicacao|bc|140',
                filter: [
                    {
                        ui: 'dc_arquivo',
                        sources: [],
                        filter: {
                            or: [
                                {
                                    attr: 'dc_comentario',
                                    oper: 'EQUAL',
                                    val: ['João']
                                },
                                {
                                    attr: 'alvo',
                                    oper: 'EQUAL',
                                    val: ['João']
                                }
                            ]
                        }
                    },
                    {
                        ui: 'dc_agenda',
                        sources: [],
                        filter: {
                            or: [
                                {
                                    attr: 'nome',
                                    oper: 'EQUAL',
                                    val: ['João']
                                },
                                {
                                    attr: 'alvo',
                                    oper: 'EQUAL',
                                    val: ['João']
                                }
                            ]
                        }
                    }
                ],
                idTipoPesquisa: 'Perfil de pesquisa avançado de dados coletados',
                jsonFilter: {ui: 'dc_arquivo', sources: ['fonte'], operator: null, criteria: {}},
                profile: {
                    aplicacao_id_aplicacao: {id_aplicacao: 'aplicacao|bc|140'},
                    data_ultima_alteracao: '2019-04-04T23:07:46.806Z',
                    descricao: 'Muahaha',
                    flg_default: {
                        ids: {
                            ID_SIM_NAO: 'N'
                        },
                        valor: 'Não'
                    },
                    id_cnfg_usua_app_pes: 'cnfg_usua_app_pes|bc|160',
                    id_tipo_pesquisa: {
                        ids: {
                            ID_TIPO_PESQUISA: 'E'
                        },
                        valor: 'Perfil de pesquisa avançado de dados coletados'
                    },
                    xml_config: {
                        ui: 'dc_arquivo',
                        sources: ['fonte'],
                        operator: null,
                        criteria: {}
                    }
                }
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
