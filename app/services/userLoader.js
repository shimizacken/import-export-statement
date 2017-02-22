import $ from 'jquery';
import ServiceBase from './serviceBase.js'
import AjaxService from './ajaxService.js'

class UserLoader extends ServiceBase {

    load() {

        return new Promise((resolve, reject) => {


            let ajaxService = new AjaxService();
            ajaxService.get('http://someurl.com/api/users')
                .then(function (result) {

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
                    }, {
                        id: 4,
                        userName: 'Elinor'
                    }];

                    setTimeout(() => resolve(users), 100);
                });
        });
    }
}

export default UserLoader;