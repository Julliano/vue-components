import '@babel/polyfill';
import Dispatcher from '../utils/dispatcher.js';
import metadata from '../metadata';

/**
 * Criação das instâncias do Axios.
 */

Dispatcher.config({
    baseURL: '/bc/services/'
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
                        val: ['aplicacao|bc|140']
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
        'xml_config'
    ],
    offset: 0,
    limit: 1000
};

export default {
    getLocale() {
        return navigator.language.slice(0, 2);
    },
    getLabelUIs(uis) {

        console.log(`getLabelUIs: ${uis}`);
        // console.log(axiosInstance);
        return metadata.uis;
        // const response = await axiosInstance.post('uis/', uis);
        // return response.data.searchResult;
    },

    async getAttribsFromUI(logicName) {
        const locale = this.getLocale();
        // eslint-disable-next-line
        const url = `/metadata/${logicName}/attributes?fields=label,type&flags=filterable,visible&loc=${locale}`;
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
        return [{id: 1, name: 'Sem campo'}, {id: 2, name: 'TextCombo'}, {id: 3, name: 'TextField'}];
        // return dispatcher.doGet(`${uiName}/${attribName}/operators?loc=pt`);
    },

    async getSearchProfiles() {
        let response = await dispatcher.doPost('objectQuery', getProfileParams);
        return response;
    },

    saveSearchProfiles(obj, param = null) {
        if (param) {
            return console.log(`Salvar o perfil de id:\n
                ${obj.id_cnfg_usua_app_pes} com o novo nome : ${param.descricao}`);
        }
        return console.log(`Salvar o perfil de nome: ${param.descricao}`);
    },

    renameSearchProfiles(param, name) {
        console.log(`Renomear o perfil de id: ${param.id_cnfg_usua_app_pes}, para ${name}`);
    },

    deleteSearchProfiles(param) {
        console.log(`Deletar o perfil de id: ${param.id_cnfg_usua_app_pes}`);
    },

    setDefaultProfile(param) {
        console.log(`Setar como default o perfil de id: ${param.id_cnfg_usua_app_pes}`);
    }

};
