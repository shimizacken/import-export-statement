import ServiceBase from './serviceBase.js'

class AjaxService extends ServiceBase {

    constructor() {
        super();
    }

    get(url) {
        
        return new Promise((resolve, reject) => {

            setTimeout(() => resolve({}), 100);
        })
    }

    post(url, data) {

    }

    put(url, data) {

    }

    delete(url, data) {

    }
}

export default AjaxService;