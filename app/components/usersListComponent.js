import $ from 'jquery';

class usersListComponent {

    constructor(users, element) {

        this.users = users;
        this.element = element;
    }

    render() {

        let html = '';

        this.users.forEach(function (user) {

            html += `<div><a href="/user/${user.id}">${user.userName}</a></div>`;
        });

        this.element.html(html);
    }
}

export default usersListComponent;