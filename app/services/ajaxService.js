import ServiceBase from './serviceBase.js'

class AjaxService extends ServiceBase {

    constructor() {
        super();
    }

    get(url) {
        return new Promise((resolve, reject) => {

            var users = [{
              id: 1,
              userName: 'shimiz'
            }];

            setTimeout(() => resolve(users), 1000);
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