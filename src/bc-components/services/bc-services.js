/* eslint-disable */
import '@babel/polyfill';
import Dispatcher from '../utils/dispatcher.js';

/**
 * Criação das instâncias do Axios.
 */
let userId = parent.loginClientDTO ? `usuario|bc|${parent.loginClientDTO.loginId}` :
    `usuario|bc|${process.env.USER_ID}`;
let sessionId = parent.loginClientDTO ? parent.loginClientDTO.sessionId : process.env.SESSION_ID;
// mudar devInstance para true quando for rodar os tests;
let devInstance = false;
// if (process.env) {
//     devInstance = true;
// }
let tipoPesquisa = '';

Dispatcher.config({
    baseURL: '/bc/services/',
    sessionID: sessionId
});

const dispatcher = new Dispatcher();

// <-- mock para ser usado em testes; -->
let _data_ref = [
    {
        name: 'any_content',
        label: 'Qualquer Conteúdo'
    },
    {
        name: 'no_content',
        label: 'Sem Conteúdo'
    },
    {
        name: 'equal',
        label: 'Igual'
    },
    {
        name: 'not_equal',
        label: 'Diferente'
    },
    {
        name: 'less_than',
        label: 'Menor'
    },
    {
        name: 'less_or_equal',
        label: 'Menor ou igual'
    },
    {
        name: 'greater_than',
        label: 'Maior'
    },
    {
        name: 'greater_or_equal',
        label: 'Maior ou igual'
    },
    {
        name: 'range',
        label: 'Intervalo'
    },
    {
        name: 'out_of_range',
        label: 'Fora do intervalo'
    },
    {
        name: 'period',
        label: 'Período',
        options: [
            {
                name: 'last_hour',
                label: 'Última Hora'
            },
            {
                name: 'last_2_hours',
                label: 'Últimas 2 Horas'
            },
            {
                name: 'last_6_hours',
                label: 'Últimas 6 Horas'
            },
            {
                name: 'last_12_hours',
                label: 'Últimas 12 Horas'
            },
            {
                name: 'last_24_hours',
                label: 'Últimas 24 Horas'
            },
            {
                name: 'last_48_hours',
                label: 'Últimas 48 Horas'
            },
            {
                name: 'last_72_hours',
                label: 'Últimas 72 Horas'
            },
            {
                name: 'last_week',
                label: 'Última Semana'
            },
            {
                name: 'last_2_weeks',
                label: 'Últimas 2 Semanas'
            },
            {
                name: 'last_3_weeks',
                label: 'Últimas 3 Semanas'
            },
            {
                name: 'last_month',
                label: 'Último Mês'
            },
            {
                name: 'last_2_months',
                label: 'Últimos 2 Meses'
            },
            {
                name: 'last_3_months',
                label: 'Últimos 3 Meses'
            }
        ]
    }
];
let _texto_delimitado = [
    {
        name: 'any_content',
        label: 'Qualquer Conteúdo'
    },
    {
        name: 'no_content',
        label: 'Sem Conteúdo'
    },
    {
        name: 'equal',
        label: 'Igual'
    },
    {
        name: 'contains',
        label: 'Contém'
    }
];
let _tipo_selecao = [
    {
        name: 'equal',
        label: 'Igual'
    }
];
let _data_hora = [
    {
        name: 'any_content',
        label: 'Qualquer Conteúdo'
    },
    {
        name: 'no_content',
        label: 'Sem Conteúdo'
    },
    {
        name: 'equal',
        label: 'Igual'
    },
    {
        name: 'not_equal',
        label: 'Diferente'
    },
    {
        name: 'less_than',
        label: 'Menor'
    },
    {
        name: 'less_or_equal',
        label: 'Menor ou igual'
    },
    {
        name: 'greater_than',
        label: 'Maior'
    },
    {
        name: 'greater_or_equal',
        label: 'Maior ou igual'
    },
    {
        name: 'range',
        label: 'Intervalo'
    },
    {
        name: 'out_of_range',
        label: 'Fora do intervalo'
    },
    {
        name: 'period',
        label: 'Período',
        options: [
            {
                name: 'last_hour',
                label: 'Última Hora'
            },
            {
                name: 'last_2_hours',
                label: 'Últimas 2 Horas'
            },
            {
                name: 'last_6_hours',
                label: 'Últimas 6 Horas'
            },
            {
                name: 'last_12_hours',
                label: 'Últimas 12 Horas'
            },
            {
                name: 'last_24_hours',
                label: 'Últimas 24 Horas'
            },
            {
                name: 'last_48_hours',
                label: 'Últimas 48 Horas'
            },
            {
                name: 'last_72_hours',
                label: 'Últimas 72 Horas'
            },
            {
                name: 'last_week',
                label: 'Última Semana'
            },
            {
                name: 'last_2_weeks',
                label: 'Últimas 2 Semanas'
            },
            {
                name: 'last_3_weeks',
                label: 'Últimas 3 Semanas'
            },
            {
                name: 'last_month',
                label: 'Último Mês'
            },
            {
                name: 'last_2_months',
                label: 'Últimos 2 Meses'
            },
            {
                name: 'last_3_months',
                label: 'Últimos 3 Meses'
            }
        ]
    }
];
let _decimal_64 = [
    {
        name: 'any_content',
        label: 'Qualquer Conteúdo'
    },
    {
        name: 'no_content',
        label: 'Sem Conteúdo'
    },
    {
        name: 'equal',
        label: 'Igual'
    },
    {
        name: 'not_equal',
        label: 'Diferente'
    },
    {
        name: 'less_than',
        label: 'Menor'
    },
    {
        name: 'less_or_equal',
        label: 'Menor ou igual'
    },
    {
        name: 'greater_than',
        label: 'Maior'
    },
    {
        name: 'greater_or_equal',
        label: 'Maior ou igual'
    },
    {
        name: 'range',
        label: 'Intervalo'
    },
    {
        name: 'out_of_range',
        label: 'Fora do intervalo'
    }
];
let _inteiro_64 = [
    {
        name: 'any_content',
        label: 'Qualquer Conteúdo'
    },
    {
        name: 'no_content',
        label: 'Sem Conteúdo'
    },
    {
        name: 'equal',
        label: 'Igual'
    },
    {
        name: 'not_equal',
        label: 'Diferente'
    },
    {
        name: 'less_than',
        label: 'Menor'
    },
    {
        name: 'less_or_equal',
        label: 'Menor ou igual'
    },
    {
        name: 'greater_than',
        label: 'Maior'
    },
    {
        name: 'greater_or_equal',
        label: 'Maior ou igual'
    },
    {
        name: 'range',
        label: 'Intervalo'
    },
    {
        name: 'out_of_range',
        label: 'Fora do intervalo'
    }
];
let _usuario = [
    {
        name: 'equal',
        label: 'Igual'
    }
];
let _data = [
    {
        name: 'any_content',
        label: 'Qualquer Conteúdo'
    },
    {
        name: 'no_content',
        label: 'Sem Conteúdo'
    },
    {
        name: 'equal',
        label: 'Igual'
    },
    {
        name: 'not_equal',
        label: 'Diferente'
    },
    {
        name: 'less_than',
        label: 'Menor'
    },
    {
        name: 'less_or_equal',
        label: 'Menor ou igual'
    },
    {
        name: 'greater_than',
        label: 'Maior'
    },
    {
        name: 'greater_or_equal',
        label: 'Maior ou igual'
    },
    {
        name: 'range',
        label: 'Intervalo'
    },
    {
        name: 'out_of_range',
        label: 'Fora do intervalo'
    },
    {
        name: 'period',
        label: 'Período',
        options: [
            {
                name: 'last_week',
                label: 'Última Semana'
            },
            {
                name: 'last_2_weeks',
                label: 'Últimas 2 Semanas'
            },
            {
                name: 'last_3_weeks',
                label: 'Últimas 3 Semanas'
            },
            {
                name: 'last_month',
                label: 'Último Mês'
            },
            {
                name: 'last_2_months',
                label: 'Últimos 2 Meses'
            },
            {
                name: 'last_3_months',
                label: 'Últimos 3 Meses'
            }
        ]
    }
];


let dc_teste = [
    {
        name: 'conta_servico',
        label: 'Conta',
        autocomplete: true,
        size: 255,
        type: '_texto_delimitado'
    },
    {
        name: 'categoria',
        label: 'Categoria do dado coletado',
        autocomplete: false,
        size: 18,
        type: '_tipo_selecao',
        lookup: 'dc_tipo_categoria'
    },
    {
        name: 'data_criacao',
        label: 'Data Criação',
        autocomplete: false,
        type: '_data_ref'
    },
    {
        name: 'operacao',
        label: 'Operação',
        autocomplete: false,
        type: '_meta_ui',
        metaType: 'operacao'
    },
    {
        name: 'coordenada',
        label: 'Coordenadas',
        autocomplete: false,
        type: '_coordenada'
    },
    {
        name: 'audio',
        label: 'Audio',
        autocomplete: false,
        type: '_audio'
    },
    {
        name: 'arquivo',
        label: 'Arquivo',
        autocomplete: false,
        type: '_arquivo'
    },
    {
        name: 'imagem',
        label: 'Imagem',
        autocomplete: false,
        type: '_imagem'
    },
    {
        name: 'tamanho',
        label: 'Tamanho',
        autocomplete: false,
        size: 18,
        type: '_inteiro_64'
    },
    {
        name: 'id_usuario_alteracao_analise',
        label: 'Usuário Alteração',
        autocomplete: false,
        type: '_usuario'
    },
    {
        name: 'flg_armazenar',
        label: 'Armazenar',
        autocomplete: false,
        size: 1,
        type: '_tipo_selecao',
        lookup: 'tipo_sim_nao'
    },
    {
        name: 'tags',
        label: 'Tags',
        autocomplete: false,
        type: '_meta_ui',
        metaType: 'oper_tag'
    },
    {
        name: 'relevancia',
        label: 'Relevância',
        autocomplete: false,
        size: 18,
        type: '_decimal_64'
    },
    {
        name: 'arquivo',
        label: 'Arquivo',
        autocomplete: false,
        type: '_arquivo'
    },
    {
        name: 'ponto_acesso',
        label: 'Ponto de Acesso',
        autocomplete: false,
        type: '_meta_ui',
        metaType: 'itcp_pto_acesso'
    },
    {
        name: 'data_inicial',
        label: 'Data Registro no IntelleTotum',
        autocomplete: false,
        type: '_data_hora'
    }
];
let dc_teste_2 = [
    {
        name: 'conta_servico',
        label: 'Conta',
        autocomplete: true,
        size: 255,
        type: '_texto_delimitado'
    },
    {
        name: 'categoria',
        label: 'Categoria do dado coletado',
        autocomplete: false,
        size: 18,
        type: '_tipo_selecao',
        lookup: 'dc_tipo_categoria'
    },
    {
        name: 'data_criacao',
        label: 'Data Criação',
        autocomplete: false,
        type: '_data_ref'
    },
    {
        name: 'operacao',
        label: 'Operação',
        autocomplete: false,
        type: '_meta_ui',
        metaType: 'operacao'
    },
    {
        name: 'coordenada',
        label: 'Coordenadas',
        autocomplete: false,
        type: '_coordenada'
    },
    {
        name: 'audio',
        label: 'Audio',
        autocomplete: false,
        type: '_audio'
    },
    {
        name: 'arquivo',
        label: 'Arquivo',
        autocomplete: false,
        type: '_arquivo'
    },
    {
        name: 'imagem',
        label: 'Imagem',
        autocomplete: false,
        type: '_imagem'
    },
    {
        name: 'tamanho',
        label: 'Tamanho',
        autocomplete: false,
        size: 18,
        type: '_inteiro_64'
    },
    {
        name: 'id_usuario_alteracao_analise',
        label: 'Usuário Alteração',
        autocomplete: false,
        type: '_usuario'
    },
    {
        name: 'flg_armazenar',
        label: 'Armazenar',
        autocomplete: false,
        size: 1,
        type: '_tipo_selecao',
        lookup: 'tipo_sim_nao'
    },
    {
        name: 'tags',
        label: 'Tags',
        autocomplete: false,
        type: '_meta_ui',
        metaType: 'oper_tag'
    },
    {
        name: 'relevancia',
        label: 'Relevância',
        autocomplete: false,
        size: 18,
        type: '_decimal_64'
    },
    {
        name: 'arquivo',
        label: 'Arquivo',
        autocomplete: false,
        type: '_arquivo'
    },
    {
        name: 'ponto_acesso',
        label: 'Ponto de Acesso',
        autocomplete: false,
        type: '_meta_ui',
        metaType: 'itcp_pto_acesso'
    },
    {
        name: 'data_inicial',
        label: 'Data Registro no IntelleTotum',
        autocomplete: false,
        type: '_data_hora'
    }
];
let operacao = [
    {
        name: 'nome',
        label: 'Nome da Operação',
        autocomplete: true,
        size: 64,
        type: '_texto_delimitado'
    },
    {
        name: 'sk_data_inicio',
        label: 'Data de início',
        autocomplete: false,
        type: '_data_ref'
    },
    {
        name: 'sk_data_termino',
        label: 'Data de término',
        autocomplete: false,
        type: '_data'
    },
    {
        name: 'flg_ativa',
        label: 'Situação',
        autocomplete: false,
        size: 64,
        type: '_tipo_selecao',
        lookup: 'tipo_ativo'
    },
    {
        name: 'codinome',
        label: 'Codinome',
        autocomplete: false,
        size: 64,
        type: '_texto_delimitado'
    },
    {
        name: 'inquerito_ocorrencia',
        label: 'Inquérito Policial / Ocorrência',
        autocomplete: false,
        size: 255,
        type: '_texto_delimitado'
    },
    {
        name: 'protocolo_numero',
        label: 'Número do protocolo da operação',
        autocomplete: false,
        size: 255,
        type: '_texto_delimitado'
    },
    {
        name: 'alvo_alvo',
        label: 'Alvos',
        autocomplete: false,
        type: '_meta_ui',
        metaType: 'alvo'
    },
    {
        name: 'sk_data_cadastro',
        label: 'Data de Cadastro',
        autocomplete: false,
        type: '_data'
    },
    {
        name: 'sk_data_altera',
        label: 'Data da Última Alteração',
        autocomplete: false,
        type: '_data'
    }
];
let alvo = [
    {
        name: 'nome',
        label: 'Nome do Alvo',
        autocomplete: true,
        size: 64,
        type: '_texto_delimitado'
    },
    {
        name: 'flg_ativo',
        label: 'Situação',
        autocomplete: false,
        size: 64,
        type: '_tipo_selecao',
        lookup: 'tipo_ativo'
    },
    {
        name: 'nivel_org_sk_nivel_org',
        label: 'Nível organizacional',
        autocomplete: false,
        type: '_meta_ui',
        metaType: 'nivel_org'
    },
    {
        name: 'oper_operacao_oper_operacao',
        label: 'Operações',
        autocomplete: false,
        type: '_meta_ui',
        metaType: 'operacao'
    },
    {
        name: 'telefone_gravado_sk_alvo',
        label: 'Telefones',
        autocomplete: false,
        type: '_meta_ui',
        metaType: 'telefone_gravado'
    },
    {
        name: 'itcp_pto_acesso_sk_alvo',
        label: 'Meios de contato',
        autocomplete: false,
        type: '_meta_ui',
        metaType: 'itcp_pto_acesso'
    },
    {
        name: 'apelido',
        label: 'Apelidos',
        autocomplete: true,
        type: '_meta_ui',
        metaType: 'alvo_apelido'
    },
    {
        name: 'sk_tipo_rotulo_alvo',
        label: 'Rótulo',
        autocomplete: false,
        size: 30,
        type: '_tipo_selecao',
        lookup: 'tipo_rotulo_alvo'
    },
    {
        name: 'nome_mae',
        label: 'Nome da mãe',
        autocomplete: false,
        size: 64,
        type: '_texto_delimitado'
    },
    {
        name: 'nome_pai',
        label: 'Nome do pai',
        autocomplete: false,
        size: 64,
        type: '_texto_delimitado'
    },
    {
        name: 'usuario_sk_agente_cadastro',
        label: 'Usuário cadastro',
        autocomplete: false,
        type: '_meta_ui',
        metaType: 'usuario'
    },
    {
        name: 'oper_mandado_judicial_mandados',
        label: 'Mandados',
        autocomplete: false,
        type: '_meta_ui',
        metaType: 'oper_mandado_judicial'
    },
    {
        name: 'alvo_documento_sk_alvo',
        label: 'Documentos',
        autocomplete: false,
        type: '_meta_ui',
        metaType: 'alvo_documento'
    },
    {
        name: 'alvo_caract_anatomica_sk_alvo',
        label: 'Características físicas',
        autocomplete: false,
        type: '_meta_ui',
        metaType: 'alvo_caract_anatomica'
    },
    {
        name: 'alvo_situacao_criminal_sk_alvo',
        label: 'Situações criminais',
        autocomplete: false,
        type: '_meta_ui',
        metaType: 'alvo_situacao_criminal'
    },
    {
        name: 'view_alvos_fotos_sk_alvo',
        label: 'Fotos',
        autocomplete: false,
        type: '_meta_ui',
        metaType: 'view_alvos_fotos'
    },
    {
        name: 'alvo_meio_contato_sk_alvo',
        label: 'Meios de contato',
        autocomplete: false,
        type: '_meta_ui',
        metaType: 'alvo_meio_contato'
    },
    {
        name: 'sk_data_cadastro',
        label: 'Data de Cadastro',
        autocomplete: false,
        type: '_data_ref'
    },
    {
        name: 'sk_data_altera',
        label: 'Data da Última Alteração',
        autocomplete: false,
        type: '_data'
    },
    {
        name: 'id_tipo_pessoa',
        label: 'Tipo de Pessoa',
        autocomplete: false,
        size: 50,
        type: '_tipo_selecao',
        lookup: 'tipo_pessoa'
    }
];

let filterMok = {
    getSourcesForUI: [
        {
            name: 'dc_teste',
            label: 'Teste Automatizado'
        }
    ],
    getSearchProfiles: [
        {
            id: 'd7bc445628870de894cfb4d5dd296501',
            total: 8,
            mocado: true,
            data: [
                {
                    xml_config: '{\"jsonView\":[{\"ui\":\"dc_historico_acesso\",\"criteria\":[{}],\"operator\":\"AND\"}],\"jsonBc\":[{\"filter\":null,\"ui\":\"dc_historico_acesso\"}]}',
                    data_ultima_alteracao: '2019-05-08T14:30:09',
                    flg_default: {
                        _id: 'N',
                        value: 'Não'
                    },
                    id_tipo_pesquisa: {
                        _id: 'E',
                        value: 'Perfil de pesquisa avançado de dados coletados'
                    },
                    aplicacao_id_aplicacao: {
                        id_aplicacao: 'aplicacao|bc|140'
                    },
                    id_cnfg_usua_app_pes: 'cnfg_usua_app_pes|bc|447',
                    descricao: 'PerfilPesquisaErro'
                },
                {
                    xml_config: '{\"jsonView\":[{\"ui\":\"dc_arquivo\",\"criteria\":[{\"attr\":\"conta_servico\",\"hash\":0.30856177348754343,\"oper\":\"ANY_CONTENT\"},{}],\"operator\":\"AND\"}],\"jsonBc\":[{\"filter\":{\"AND\":[{\"attr\":\"conta_servico\",\"oper\":\"ANY_CONTENT\"}]},\"ui\":\"dc_arquivo\"}]}',
                    data_ultima_alteracao: '2019-05-10T14:01:01',
                    flg_default: {
                        _id: 'N',
                        value: 'Não'
                    },
                    id_tipo_pesquisa: {
                        _id: 'E',
                        value: 'Perfil de pesquisa avançado de dados coletados'
                    },
                    aplicacao_id_aplicacao: {
                        id_aplicacao: 'aplicacao|bc|140'
                    },
                    id_cnfg_usua_app_pes: 'cnfg_usua_app_pes|bc|434',
                    descricao: 'teste'
                },
                {
                    xml_config: '{\"jsonView\":[{\"ui\":\"dc_view_arquivo\",\"criteria\":[{\"attr\":\"conta_servico\",\"hash\":0.8282032390826501,\"oper\":\"ANY_CONTENT\"},{}],\"operator\":\"AND\"}],\"jsonBc\":[{\"filter\":{\"AND\":[{\"attr\":\"conta_servico\",\"oper\":\"ANY_CONTENT\"}]},\"ui\":\"dc_view_arquivo\"}]}',
                    data_ultima_alteracao: '2019-05-10T18:06:42',
                    flg_default: {
                        _id: 'N',
                        value: 'Não'
                    },
                    id_tipo_pesquisa: {
                        _id: 'E',
                        value: 'Perfil de pesquisa avançado de dados coletados'
                    },
                    aplicacao_id_aplicacao: {
                        id_aplicacao: 'aplicacao|bc|140'
                    },
                    id_cnfg_usua_app_pes: 'cnfg_usua_app_pes|bc|433',
                    descricao: 'teste'
                },
                {
                    xml_config: '{\"jsonView\":[{\"ui\":\"dc_arquivo\",\"operator\":\"AND\",\"criteria\":[{}],\"hash\":0.5866211153377459}],\"jsonBc\":[{\"filter\":null,\"ui\":\"dc_arquivo\"}]}',
                    data_ultima_alteracao: '2019-05-10T20:07:23',
                    flg_default: {
                        _id: 'N',
                        value: 'Não'
                    },
                    id_tipo_pesquisa: {
                        _id: 'E',
                        value: 'Perfil de pesquisa avançado de dados coletados'
                    },
                    aplicacao_id_aplicacao: {
                        id_aplicacao: 'aplicacao|bc|140'
                    },
                    id_cnfg_usua_app_pes: 'cnfg_usua_app_pes|bc|459',
                    descricao: 'Avançada'
                },
                {
                    xml_config: '{\"jsonView\":[{\"operator\":\"AND\",\"criteria\":[{\"operator\":\"OR\",\"criteria\":[{\"attr\":\"oper_mandado_judicial_mandados\",\"hash\":0.04360633313394757,\"operator\":\"OR\",\"criteria\":[{\"attr\":\"numero\",\"hash\":0.43880212607014224,\"val\":[\"51185181\"],\"oper\":\"EQUAL\"},{\"attr\":\"sk_data_inicio\",\"hash\":0.17158884603428715,\"oper\":\"ANY_CONTENT\"},{}]},{\"attr\":\"oper_mandado_judicial_mandados\",\"hash\":0.6430441465970473,\"operator\":\"AND\",\"criteria\":[{\"attr\":\"sk_data_validade\",\"hash\":0.930443400227482,\"oper\":\"NO_CONTENT\"},{}]},{}],\"attr\":\"alvo\",\"hash\":0.16992102054939795},{}],\"ui\":\"dc_arquivo\",\"hash\":0.9715977784590697}],\"jsonBc\":[{\"filter\":{\"AND\":[{\"OR\":[{\"attr\":\"alvo.oper_mandado_judicial_mandados.numero\",\"val\":[\"51185181\"],\"oper\":\"EQUAL\"},{\"attr\":\"alvo.oper_mandado_judicial_mandados.sk_data_inicio\",\"oper\":\"ANY_CONTENT\"},{\"AND\":[{\"attr\":\"alvo.oper_mandado_judicial_mandados.sk_data_validade\",\"oper\":\"NO_CONTENT\"}]}]}]},\"ui\":\"dc_arquivo\"}]}',
                    data_ultima_alteracao: '2019-05-10T14:00:40',
                    flg_default: {
                        _id: 'N',
                        value: 'Não'
                    },
                    id_tipo_pesquisa: {
                        _id: 'E',
                        value: 'Perfil de pesquisa avançado de dados coletados'
                    },
                    aplicacao_id_aplicacao: {
                        id_aplicacao: 'aplicacao|bc|140'
                    },
                    id_cnfg_usua_app_pes: 'cnfg_usua_app_pes|bc|452',
                    descricao: 'bbbb'
                },
                {
                    xml_config: '{\"jsonView\":[{\"ui\":\"dc_arquivo\",\"criteria\":[{\"operator\":\"AND\",\"criteria\":[{\"attr\":\"oper_mandado_judicial_mandados\",\"hash\":0.9582164234265724,\"operator\":\"OR\",\"criteria\":[{\"attr\":\"numero\",\"hash\":0.26981972489509154,\"oper\":\"EQUAL\",\"val\":[\"58184181\"]},{\"attr\":\"data_cadastro\",\"hash\":0.6619266590659232,\"oper\":\"ANY_CONTENT\"},{}]},{}],\"attr\":\"alvo\",\"hash\":0.38960035399901805},{}],\"operator\":\"AND\"}],\"jsonBc\":[{\"filter\":{\"AND\":[{\"AND\":[{\"OR\":[{\"attr\":\"alvo.oper_mandado_judicial_mandados.numero\",\"oper\":\"EQUAL\",\"val\":[\"58184181\"]},{\"attr\":\"alvo.oper_mandado_judicial_mandados.data_cadastro\",\"oper\":\"ANY_CONTENT\"}]}]}]},\"ui\":\"dc_arquivo\"}]}',
                    data_ultima_alteracao: '2019-05-09T14:41:26',
                    flg_default: {
                        _id: 'N',
                        value: 'Não'
                    },
                    id_tipo_pesquisa: {
                        _id: 'E',
                        value: 'Perfil de pesquisa avançado de dados coletados'
                    },
                    aplicacao_id_aplicacao: {
                        id_aplicacao: 'aplicacao|bc|140'
                    },
                    id_cnfg_usua_app_pes: 'cnfg_usua_app_pes|bc|451',
                    descricao: 'aaaa'
                },
                {
                    xml_config: '{\"jsonView\":[{\"ui\":\"dc_arquivo\",\"criteria\":[{\"operator\":\"OR\",\"criteria\":[{\"attr\":\"oper_mandado_judicial_mandados\",\"hash\":0.3811159435037257,\"operator\":\"AND\",\"criteria\":[{\"attr\":\"numero\",\"hash\":0.04233268371327359,\"val\":[\"sdfsdfsdf\"],\"oper\":\"EQUAL\"},{}]},{\"attr\":\"nome\",\"hash\":0.8187746262543514,\"val\":[\"sdssdfsdsd\"],\"oper\":\"EQUAL\"},{}],\"attr\":\"alvo\",\"hash\":0.21735763659129947},{}],\"operator\":\"AND\"}],\"jsonBc\":[{\"filter\":{\"AND\":[{\"OR\":[{\"AND\":[{\"attr\":\"alvo.oper_mandado_judicial_mandados.numero\",\"val\":[\"sdfsdfsdf\"],\"oper\":\"EQUAL\"}]},{\"attr\":\"alvo.nome\",\"val\":[\"sdssdfsdsd\"],\"oper\":\"EQUAL\"}]}]},\"ui\":\"dc_arquivo\"}]}',
                    data_ultima_alteracao: '2019-04-10T18:00:55',
                    flg_default: {
                        _id: 'N',
                        value: 'Não'
                    },
                    id_tipo_pesquisa: {
                        _id: 'E',
                        value: 'Perfil de pesquisa avançado de dados coletados'
                    },
                    aplicacao_id_aplicacao: {
                        id_aplicacao: 'aplicacao|bc|140'
                    },
                    id_cnfg_usua_app_pes: 'cnfg_usua_app_pes|bc|450',
                    descricao: 'MeuQueridoFiltro'
                },
                {
                    xml_config: '{\"jsonView\":[{\"ui\":\"dc_arquivo\",\"criteria\":[{\"operator\":\"AND\",\"criteria\":[{\"attr\":\"nome\",\"hash\":0.1678466268124319,\"val\":[\"asdasdasdas\"],\"oper\":\"EQUAL\"},{}],\"attr\":\"alvo\",\"hash\":0.7174716307131808},{\"operator\":\"AND\",\"criteria\":[{\"attr\":\"nome\",\"hash\":0.3169984733852813,\"oper\":\"EQUAL\",\"val\":[\"asdasdasdasdasd\"]},{}],\"attr\":\"operacao\",\"hash\":0.4606427623548748},{\"attr\":\"conta_servico\",\"hash\":0.5015782223179657,\"val\":[\"84181891\"],\"oper\":\"EQUAL\"},{}],\"operator\":\"AND\"}],\"jsonBc\":[{\"filter\":{\"AND\":[{\"AND\":[{\"attr\":\"alvo.nome\",\"val\":[\"asdasdasdas\"],\"oper\":\"EQUAL\"}]},{\"AND\":[{\"attr\":\"operacao.nome\",\"oper\":\"EQUAL\",\"val\":[\"asdasdasdasdasd\"]}]},{\"attr\":\"conta_servico\",\"val\":[\"84181891\"],\"oper\":\"EQUAL\"}]},\"ui\":\"dc_arquivo\"}]}',
                    data_ultima_alteracao: '2019-04-10T18:00:55',
                    flg_default: {
                        _id: 'N',
                        value: 'Não'
                    },
                    id_tipo_pesquisa: {
                        _id: 'E',
                        value: 'Perfil de pesquisa avançado de dados coletados'
                    },
                    aplicacao_id_aplicacao: {
                        id_aplicacao: 'aplicacao|bc|140'
                    },
                    id_cnfg_usua_app_pes: 'cnfg_usua_app_pes|bc|449',
                    descricao: 'TesteSalvarPerfil2'
                }
            ]
        }
    ],
    getLabelUis: [
        {
            name: 'dc_teste',
            label: 'Teste Automatizado'
        },
        {
            name: 'dc_teste_2',
            label: 'Teste Automatizado 2'
        }
    ],
    getAttribsFromUI: {
        dc_teste,
        dc_teste_2,
        operacao,
        alvo
    },
    getOperators: {
        _data,
        _data_ref,
        _texto_delimitado,
        _tipo_selecao,
        _data_hora,
        _decimal_64,
        _inteiro_64,
        _usuario
    }
};

let getProfileParams = {
    ui: 'cnfg_usua_app_pes',
    filter: {
        AND: [
            {
                AND: [
                    {
                        oper: 'EQUAL',
                        attr: 'aplicacao_id_aplicacao.id_aplicacao',
                        val: []
                    },
                    {
                        oper: 'EQUAL',
                        attr: 'usuario_id_pessoa._id',
                        val: [userId]
                    },
                    {
                        oper: 'EQUAL',
                        attr: 'id_tipo_pesquisa',
                        val: [tipoPesquisa]
                    }
                ]
            }
        ]
    },
    sort: {
        descricao: 'ASC'
    },
    attribs: [
        'id_cnfg_usua_app_pes',
        'descricao',
        'flg_default',
        'id_tipo_pesquisa',
        'aplicacao_id_aplicacao.id_aplicacao',
        'xml_config',
        'data_ultima_alteracao'
    ],
    offset: 0,
    limit: 1000
};
// <-- fim do mock para ser usado em testes; -->

let include = {
    oper: 'EQUAL',
    attr: 'flg_default',
    val: ['S']
};

export default {
    getLocale() {
        return navigator.language.slice(0, 2);
    },
    async getLabelUIs(uis) {
        if (devInstance) return filterMok.getLabelUis;
        const locale = this.getLocale();
        const url = `metadata?flags=filterable,visible&loc=${locale}`;
        const allMetaUis = await dispatcher.doGet(url);
        return !uis ? allMetaUis : allMetaUis.filter(metaUi => uis.indexOf(metaUi.name) !== -1);
    },

    async getAttribsFromUI(logicName) {
        if (devInstance) return filterMok.getAttribsFromUI[logicName];
        const locale = this.getLocale();
        // eslint-disable-next-line
        const url = `metadata/${logicName}/attributes?fields=label,autocomplete,type,size&flags=filterable&loc=${locale}`;
        return await dispatcher.doGet(url);
    },

    getOperators(uiName, attribName, tipoAttrib) {
        if (devInstance) return filterMok.getOperators[tipoAttrib];
        return dispatcher.doGet(`metadata/${uiName}/${attribName}/operators?loc=pt`);
    },

    async getSourcesForUI(logicName) {
        if (devInstance) return filterMok.getSourcesForUI;
        return await dispatcher
            .doGet(`metadata/${logicName}/sources?loc=${this.getLocale()}`);
    },

    async getAutocompleteFieldoptions(uiName, attribName, value) {
        return await dispatcher
            .doGet(`query/autocomplete/${uiName}/${attribName}?value=${value}`);
    },

    getTipoSelecaoOptions(tipoSelec) {
        return dispatcher.doGet(`lookup/${tipoSelec}`);
    },

    getTipoSelecaoHierarquicoOptions(tipoSelec, id) {
        return dispatcher.doGet(`lookup/${tipoSelec}/?filter=${id}`);
    },

    async getSearchProfiles(param, idAplicacao) {
        if (devInstance) return filterMok.getSearchProfiles;
        getProfileParams.filter.AND[0].AND[2].val[0] = param;
        getProfileParams.filter.AND[0].AND[0].val[0] = idAplicacao;
        return await dispatcher.doPost('query/search', getProfileParams);
    },

    async getProfileDirectory() {
        return await dispatcher
            .doGet('access/userDataDirectory');
    },
    async saveSearchProfiles(obj, param = null, xml = null, idTipoPesquisa = '', idAplicacao) {
        if (param) {
            let response = await this.getProfileDirectory();
            obj.descricao = param.descricao;
            delete obj.flg_default;
            delete obj.id_cnfg_usua_app_pes;
            obj['_diretorios'] = {
                add: [response.id]
            };
            obj.id_tipo_pesquisa = idTipoPesquisa;
            obj.xml_config = JSON.stringify(xml);
            if (!obj.aplicacao_id_aplicacao) {
                obj.aplicacao_id_aplicacao = {id_aplicacao: idAplicacao};
            }
        }
        obj.usuario_id_pessoa = {
            id_usuario: userId
        };
        let json = {
            cnfg_usua_app_pes: [
                obj
            ]
        };
        return await dispatcher.doPost('persistence', json);
    },
    async replaceSearchProfiles(obj, xml, name) {
        let json = {
            cnfg_usua_app_pes: [
                {
                    id_cnfg_usua_app_pes: obj.id_cnfg_usua_app_pes,
                    descricao: name,
                    xml_config: JSON.stringify(xml),
                    data_ultima_alteracao: obj.data_ultima_alteracao
                }
            ]
        };
        return await dispatcher.doPut('persistence', json);
    },

    async renameSearchProfiles(param, name) {
        let obj = {
            cnfg_usua_app_pes: [
                {
                    id_cnfg_usua_app_pes: param.id_cnfg_usua_app_pes,
                    descricao: name,
                    data_ultima_alteracao: param.data_ultima_alteracao
                }
            ]
        };
        return await dispatcher.doPut('persistence', obj);
    },

    async editProfile(obj, xml) {
        let json = {
            cnfg_usua_app_pes: [
                {
                    id_cnfg_usua_app_pes: obj.id_cnfg_usua_app_pes,
                    descricao: obj.descricao,
                    data_ultima_alteracao: '2019-04-10T18:00:55.443Z',
                    xml_config: JSON.stringify(xml)
                }
            ]
        };
        return await dispatcher.doPut('persistence', json);
    },

    async deleteSearchProfiles(param) {
        await dispatcher.doDelete(`delete/cnfg_usua_app_pes/${param.id_cnfg_usua_app_pes}`);
    },

    async setDefaultProfile(param, idAplicacao) {
        await this.getDefaultsAndSetAsNotDefault(idAplicacao);
        if (param.flg_default && param.flg_default.value === 'Não') {
            let obj = {
                cnfg_usua_app_pes: [
                    {
                        id_cnfg_usua_app_pes: param.id_cnfg_usua_app_pes,
                        descricao: param.descricao,
                        data_ultima_alteracao: param.data_ultima_alteracao,
                        flg_default: 'S'
                    }
                ]
            };
            await dispatcher.doPut('persistence', obj);
        }
    },

    async getDefaultsAndSetAsNotDefault() {
        let count = 0;
        let params = JSON.parse(JSON.stringify(getProfileParams));
        params.filter.AND[0].AND.push(include);
        // params.filter.AND[0].AND[0].val[0] = param;
        let response = await dispatcher.doPost('query/search', params);
        let obj = {
            cnfg_usua_app_pes: [
            ]
        };
        if (response[0] && response[0].data.length) {
            response[0].data.forEach(ui => {
                if (ui.flg_default.value === 'Sim') {
                    obj = this.resetDefaultValue(obj, ui);
                    count += 1;
                }
            });
        }
        if (count) {
            await dispatcher.doPut('persistence', obj);
        }
        return;
    },

    resetDefaultValue(obj, ui) {
        obj.cnfg_usua_app_pes.push(
            {
                id_cnfg_usua_app_pes: ui.id_cnfg_usua_app_pes,
                descricao: ui.descricao,
                data_ultima_alteracao: ui.data_ultima_alteracao,
                flg_default: 'N'
            }
        );
        return obj;
    }

};
