import $ from 'jquery';
import { Core, Web, IO } from './app/services/tools.js';
import UserLoader from './app/services/userLoader.js'
import usersListComponent from './app/components/usersListComponent.js';

let users = new UserLoader().load().then(function(users){

    new usersListComponent(users, $('#mainContainer')).render();
});
