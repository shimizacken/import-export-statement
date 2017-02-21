import $ from 'jquery';
import ServiceBase from './serviceBase.js'
import AjaxService from './ajaxService.js'
import UserList from '../components/usersList.js';

class UserLoader extends ServiceBase {

    load() {

        let ajaxService = new AjaxService();
        ajaxService.get('http://someurl.com/api/users')
            .then(function (result) {

                let userList = new UserList(result).render();
                $('#mainContainer').html(userList);
            });
    }
}

export default UserLoader;