import $ from 'jquery';
import { Core, Web, IO } from './app/services/tools.js';
import AjaxService from './app/services/ajaxService.js'
import UserLoader from './app/services/userLoader.js'

let ajaxService = new AjaxService();
ajaxService.get('http://someurl.com/api/users')
    .then((result) => successCallback(result));

function successCallback(result) {

    result.forEach(function (element) {

        $('#mainContainer').append(element.userName + '<br />');
    });
}
