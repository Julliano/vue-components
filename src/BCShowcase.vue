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
                listUis: ['dc_arquivo', 'dc_view_arquivo', 'dc_agenda', 'dgt_bc_padrao', 'dgt_bc_unica'],
                sourceTypes: ['WEB_SERVICES'],
                idAplicacao: 'aplicacao|bc|140',
<<<<<<< HEAD
                filter: [
                    {
                        ui: 'dc_agenda',
                        sources: [],
                        filter: {
                            or: [
                                {
                                    attr: 'alvo.nome',
                                    oper: 'EQUAL',
                                    val: ['João']
                                },
                                {
                                    attr: 'alvo.nome',
                                    oper: 'EQUAL',
                                    val: ['João11111111111111111']
                                },
                                {
                                    attr: 'alvo.itcp_pto_acesso_sk_alvo.id_tipo_pto_acesso',
                                    oper: 'EQUAL',
                                    val: ['4']
                                },
                                {
                                    and: [
                                        {
                                            attr: 'alvo.nome',
                                            oper: 'EQUAL',
                                            val: ['João11111111111111111']
                                        },
                                        {
                                            attr: 'alvo.itcp_pto_acesso_sk_alvo.id_tipo_pto_acesso',
                                            oper: 'EQUAL',
                                            val: ['4']
                                        }
                                    ]
                                }
                            ]
                        }
                    }
                ],
=======
                filter: [],
                // filter: [
                //     {
                //         ui: 'dc_agenda',
                //         sources: [],
                //         filter: {
                //             or: [
                //                 {
                //                     attr: 'nome',
                //                     oper: 'EQUAL',
                //                     val: ['João']
                //                 },
                //                 {
                //                     attr: 'alvo.nome',
                //                     oper: 'EQUAL',
                //                     val: ['João11111111111111111']
                //                 },
                //                 {
                //                     attr: 'alvo.itcp_pto_acesso_sk_alvo.id_tipo_pto_acesso',
                //                     oper: 'EQUAL',
                //                     val: ['4']
                //                 }
                //                 // {
                //                 //     and: [
                //                 //         {
                //                 //             attr: 'alvo.nome',
                //                 //             oper: 'EQUAL',
                //                 //             val: ['João11111111111111111']
                //                 //         },
                //                 //         {
                //                 //             attr: 'alvo.itcp_pto_acesso_sk_alvo.id_tipo_pto_acesso',
                //                 //             oper: 'EQUAL',
                //                 //             val: ['4']
                //                 //         }
                //                 //     ]
                //                 // }
                //             ]
                //         }
                //     }
                // ],
>>>>>>> ee403b44c26768ef8051445d430f37be9e407a2e
                idTipoPesquisa: 'Perfil de pesquisa avançado de dados coletados',
                tipoBusca: 'E',
                profile: {}
                // teste passando perfil avançado indo por props
                // profile: {
                //     aplicacao_id_aplicacao: {
                //         id_aplicacao: 'aplicacao|bc|140'
                //     },
                //     data_ultima_alteracao: '2019-04-10T18:00:55',
                //     descricao: 'perfil de pesquisa criado na reunião de review',
                //     flg_default: {
                //         _id: 'N',
                //         value: 'Não'
                //     },
                //     id_tipo_pesquisa: {
                //         _id: 'E',
                //         value: 'Perfil de pesquisa avançado de dados coletados'
                //     },
                //     id_cnfg_usua_app_pes: 'cnfg_usua_app_pes|bc|326',
                //     xml_config: {
                //         jsonView: [
                //             {
                //                 ui: 'dc_arquivo',
                //                 criteria: [
                //                     {
                //                         attr: 'conta_servico',
                //                         hash: 0.28191435511327945,
                //                         val: [
                //                             'LLLLLLLL'
                //                         ],
                //                         oper: 'EQUAL'
                //                     },
                //                     {
                //                         attr: 'stamp_criacao',
                //                         hash: 0.4138620115984899
                //                     },
                //                     {
                //                         attr: 'tamanho',
                //                         hash: 0.14862723589608873,
                //                         val: [
                //                             '2222'
                //                         ],
                //                         oper: 'GREATER_OR_EQUAL'
                //                     },
                //                     {
                //                         attr: 'nome_original',
                //                         hash: 0.22015022907149673,
                //                         oper: 'NO_CONTENT'
                //                     },
                //                     {}
                //                 ]
                //             }
                //         ]
                //     }
                // }
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
