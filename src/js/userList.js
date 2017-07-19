import _ from 'lodash';

/*
Тестовый коммент №2
 */

function userList(users){
    const container = document.getElementById('root');
    const sortedUsers = _.sortBy(users, 'age');
    this.showList = () => {
        sortedUsers.forEach((user) => {
          const div = document.createElement('div');
          div.className = 'user';
          const avatar = document.createElement('div');
          avatar.className = 'avatar';
          const span = document.createElement('span');
          span.innerHTML = `${user.name} ${user.age}`;
          div.appendChild(avatar);
          div.appendChild(span);
          container.appendChild(div);
        });
    }
}

export default userList;