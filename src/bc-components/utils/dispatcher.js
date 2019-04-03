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

    // eslint-disable-next-line class-methods-use-this
    doRequest(xhr, url, type, param = undefined) {
        return new Promise((resolve, reject) => {
            xhr.open(type, config.baseURL + url, true);
            xhr.setRequestHeader('Content-Type', 'application/json');
            xhr.setRequestHeader('SessionId', '847394656470301487');
            xhr.onload = function() {
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
            xhr.send(param);
        });
    }

    async doGet(url) {
        let xhr = new XMLHttpRequest();
        return await this.doRequest(xhr, url, 'GET');
    }
    async doPost(url, param) {
        let xhr = new XMLHttpRequest();
        return await this.doRequest(xhr, url, 'POST', JSON.stringify(param));
    }
    doPut(url, param) {
        let xhr = new XMLHttpRequest();
        return this.doRequest(xhr, url, 'PUT', JSON.stringify(param));
    }
    doDelete(url) {
        let xhr = new XMLHttpRequest();
        return this.doRequest(xhr, url, 'DELETE');
    }
}
