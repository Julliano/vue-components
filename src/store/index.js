import Vue from 'vue';
import Vuex from 'vuex';
import i18n from './modules/i18n';

Vue.use(Vuex);

export default new Vuex.Store({
    strict: true,
    modules: {
        i18n
    }
});
