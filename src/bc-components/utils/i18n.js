import pt from '../i18n/pt.js';
import es from '../i18n/es.js';


const data = {
    current: navigator.language.slice(0, 2),
    fallback: 'pt',
    available: {
        pt,
        es
    }
};

const get = (p, o) =>
    p.reduce((xs, x) =>
        (xs && xs[x]) ? xs[x] : null, o);

const getString = (key) => {
    const path = key.split('.');
    let usingDefault = data.current === data.fallback;
    let msgs = data.available[data.current];
    if (!msgs) {
        usingDefault = true;
        msgs = data.available[data.fallback];
    }

    let str = get(path, msgs);
    if (str === null && !usingDefault) {
        str = get(path, data.available[data.fallback]);
    }
    return str ? str : key;

};

const registerFilter = (component) => {

    const {filters} = component.$options;
    const key = 'i18n';
    if (key in filters) {
        return;
    }
    filters[key] = getString;
};

const i18n = {
    $localize(current, fallback = 'pt') {
        data.current = current;
        data.fallback = fallback;
    },
    mixin: {
        created() {
            registerFilter(this);
        },
        methods: {
            $t(key) {
                return getString(key);
            }
        }
    }
};

export default i18n;
