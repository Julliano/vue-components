import '@babel/polyfill';
import axios from 'axios';
import metadata from '../metadata';

/**
 * Criação das instâncias do Axios.
 */
const axiosInstance = axios.create({
    baseURL: '/bc/services/metadata/'
});

export default {
    getLabelUIs(uis) {

        console.log(`getLabelUIs: ${uis}`);
        // console.log(axiosInstance);
        return metadata.uis;
        // const response = await axiosInstance.post('uis/', uis);
        // return response.data.searchResult;
    },

    async getAttibsFromUI(logicName) {
        return await axiosInstance
            .get(`${logicName}/attributes?fields=label,type&flags=filterable,visible`);
    }
};
