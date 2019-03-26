import '@babel/polyfill';
import Dispatcher from '../utils/dispatcher.js';
import metadata from '../metadata';

/**
 * Criação das instâncias do Axios.
 */

Dispatcher.config({
    baseURL: '/bc/services/metadata/'
});

const dispatcher = new Dispatcher();

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
        const params = `/attributes?fields=label,type&flags=filterable,visible&loc=${locale}`;
        return await dispatcher.doGet(logicName + params);
    },

    getOperators(uiName, attribName) {
        return dispatcher.doGet(`${uiName}/${attribName}/operators?loc=pt`);
    },

    async getSourcesForUI(logicName) {
        return await dispatcher
            .doGet(`${logicName}/sources?loc=${this.getLocale()}`);
    },

    getAutocompleteFieldoptions() {
        return [{name: 'teste'}, {name: 'abc'}, {name: 'def'}, {name: 'aab'}, {name: 'bbe'}];
        // return dispatcher.doGet(`${uiName}/${attribName}/operators?loc=pt`);
    },

    getTipoSelecaoOptions() {
        return [{id: 1, name: 'Sem campo'}, {id: 2, name: 'TextCombo'}, {id: 3, name: 'TextField'}];
        // return dispatcher.doGet(`${uiName}/${attribName}/operators?loc=pt`);
    }
};
