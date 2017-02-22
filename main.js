import $ from 'jquery';
import { Core, Web, IO } from './app/services/tools.js';
import UserLoader from './app/services/userLoader.js'
import UsersListComponent from './app/components/usersListComponent.js';
import HeaderComponent from './app/components/headerComponent.js';
import FooterComponent from './app/components/footerComponent.js';

new HeaderComponent($('header')).render();
new FooterComponent($('footer')).render();

let users = new UserLoader().load().then(function(users){

    new UsersListComponent(users, $('#mainContainer')).render();
});
