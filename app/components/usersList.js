import $ from 'jquery';

class UserList {

    constructor(users) {

        this.users = users;
    }

    render() {

        let html = '';

        this.users.forEach(function (user) {

            html += '<div>' + user.userName + '</div>';
        });

        return html;

    }
}

export default UserList;