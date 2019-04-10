import '@babel/polyfill';
import Dispatcher from '../utils/dispatcher.js';

/**
 * Criação das instâncias do Axios.
 */
let userId = process.env.USER_ID !== undefined ? `usuario|bc|${process.env.USER_ID}` :
    `usuario|bc|${parent.loginClientDTO.loginId}`;
let sessionId = process.env.SESSION_ID ? process.env.SESSION_ID : parent.loginClientDTO.sessionId;
let idAplicacao = 'aplicacao|bc|140';
let tipoPesquisa = 'E';

Dispatcher.config({
    baseURL: '/bc/services/',
    sessionID: sessionId
});

const dispatcher = new Dispatcher();

let getProfileParams = {
    ui: 'cnfg_usua_app_pes',
    filter: {
        AND: [
            {
                AND: [
                    {
                        oper: 'EQUAL',
                        attr: 'cnfg_usua_app_pes.aplicacao_id_aplicacao.id_aplicacao',
                        val: [idAplicacao]
                    },
                    {
                        oper: 'EQUAL',
                        attr: 'cnfg_usua_app_pes.usuario_id_pessoa._id',
                        val: [userId]
                    },
                    {
                        oper: 'EQUAL',
                        attr: 'cnfg_usua_app_pes.id_tipo_pesquisa',
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

let include = {
    oper: 'EQUAL',
    attr: 'cnfg_usua_app_pes.flg_default',
    val: ['S']
};

export default {
    getLocale() {
        return navigator.language.slice(0, 2);
    },
    async getLabelUIs(uis) {
        const locale = this.getLocale();
        const url = `metadata?flags=filterable,visible&loc=${locale}`;
        const allMetaUis = await dispatcher.doGet(url);
        return !uis ? allMetaUis : allMetaUis.filter(metaUi => uis.indexOf(metaUi.name) !== -1);
    },

    async getAttribsFromUI(logicName) {
        const locale = this.getLocale();
        // eslint-disable-next-line
        const url = `metadata/${logicName}/attributes?fields=label,autocomplete,type&flags=filterable,visible&loc=${locale}`;
        return await dispatcher.doGet(url);
    },

    getOperators(uiName, attribName) {
        return dispatcher.doGet(`metadata/${uiName}/${attribName}/operators?loc=pt`);
    },

    async getSourcesForUI(logicName) {
        return await dispatcher
            .doGet(`metadata/${logicName}/sources?loc=${this.getLocale()}`);
    },

    getAutocompleteFieldoptions() {
        return [{name: 'teste'}, {name: 'abc'}, {name: 'def'}, {name: 'aab'}, {name: 'bbe'}];
        // return dispatcher.doGet(`${uiName}/${attribName}/operators?loc=pt`);
    },

    getTipoSelecaoOptions() {
        return [
            {id: 'S', value: 'Sim'},
            {id: 'N', value: 'Não'}
        ];
        // return dispatcher.doGet(`${uiName}/${attribName}/operators?loc=pt`);
    },

    async getSearchProfiles() {
        return await dispatcher.doPost('objectQuery', getProfileParams);
    },

    async getProfileDirectory() {
        return await dispatcher
            .doGet('access/userDataDirectory');
    },
    async saveSearchProfiles(obj, param = null, xml = null) {
        if (param) {
            let response = await this.getProfileDirectory();
            obj.descricao = param.descricao;
            delete obj.flg_default;
            delete obj.id_cnfg_usua_app_pes;
            obj['_diretorios'] = {
                add: [response.id]
            };
            if (tipoPesquisa) obj.id_tipo_pesquisa = 'Perfil de pesquisa avançado de dados coletados';
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
    async replaceSearchProfiles(obj, xml) {
        let json = {
            cnfg_usua_app_pes: [
                {
                    id_cnfg_usua_app_pes: obj.id_cnfg_usua_app_pes,
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

    async setDefaultProfile(param) {
        await this.getDefaultsAndSetAsNotDefault();
        if (param.flg_default && param.flg_default.valor === 'Não') {
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
        let response = await dispatcher.doPost('objectQuery', params);
        let obj = {
            cnfg_usua_app_pes: [
            ]
        };
        if (response.uis.length) {
            response.uis.forEach(ui => {
                if (ui.flg_default.valor === 'Sim') {
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
