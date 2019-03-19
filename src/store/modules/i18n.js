import { portuguese } from '../../i18n/pt_br';
import { spanish } from '../../i18n/es';

const state = {
    language: null,
    languageText: ''
};

const mutations = {
    setLanguageText(estado, language) {
        switch (language) {
            case 'es':
                state.languageText = spanish;
                break;
            default:
                state.languageText = portuguese;
                break;
        }
    }
};

export default {
    state,
    mutations
};
