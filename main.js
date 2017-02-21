import $ from 'jquery';
import { Core, Web, IO } from './app/services/tools.js';
import UserLoader from './app/services/userLoader.js'

let userLoader = new UserLoader();
userLoader.load();
