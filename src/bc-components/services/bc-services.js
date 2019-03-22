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
    getLabelUIs(uis) {

        console.log(`getLabelUIs: ${uis}`);
        // console.log(axiosInstance);
        return metadata.uis;
        // const response = await axiosInstance.post('uis/', uis);
        // return response.data.searchResult;
    },

    async getAttribsFromUI(logicName) {
        const locale = navigator.language.slice(0, 2);
        const params = `/attributes?fields=label,type&flags=filterable,visible&loc=${locale}`;
        return await dispatcher.doGet(logicName + params);
    },

    getOperators(uiName, attribName) {
        return dispatcher.doGet(`${uiName}/${attribName}/operators?loc=pt`);
    }
};
