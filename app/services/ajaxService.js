import ServiceBase from './serviceBase.js'

class AjaxService extends ServiceBase {

    constructor() {
        super();
    }

    get(url) {
        
        return new Promise((resolve, reject) => {

            var users = [{
              id: 1,
              userName: 'John'
            },
            {
              id: 2,
              userName: 'Ruth'
            },
            {
              id: 3,
              userName: 'Noah'
            },{
              id: 4,
              userName: 'Elinor'
            }];

            setTimeout(() => resolve(users), 100);
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