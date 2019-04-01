let config;

export default class Dispatcher {

    constructor() {
        this.xhr = new XMLHttpRequest();
    }

    static config(cfg) {
        if (!cfg) return;
        if (config) {
            throw new Error('Já está configurado');
        }
        config = cfg;
    }

    doRequest(url, type, param = undefined) {
        return new Promise((resolve, reject) => {
            this.xhr.open(type, config.baseURL + url, true);
            this.xhr.setRequestHeader('Content-Type', 'application/json');
            this.xhr.setRequestHeader('SessionId', '9031378129736105629');
            this.xhr.onload = function() {
                if (this.status >= 200 && this.status < 300) {
                    resolve(JSON.parse(this.response));
                } else {
                    // eslint-disable-next-line prefer-promise-reject-errors
                    reject({
                        status: this.status,
                        statusText: this.statusText
                    });
                }
            };
            this.xhr.send(param);
        });
    }

    doGet(url) {
        return this.doRequest(url, 'GET');
    }
    doPost(url, param) {
        return this.doRequest(url, 'POST', JSON.stringify(param));
    }
    doPut(url, param) {
        return this.doRequest(url, 'PUT', JSON.stringify(param));
    }
    doDelete(url) {
        return this.doRequest(url, 'DELETE');
    }
}
