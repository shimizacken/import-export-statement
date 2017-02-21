import {Core, Web, IO} from './app/services/tools.js';
import AjaxService from './app/services/ajaxService.js'
import UserLoader from './app/services/userLoader.js'

// 1. http request mock
AjaxService.get('http://someurl.com/api/users')
    .then((result) => successCallback(result));

function successCallback(result){
    debugger;
}


