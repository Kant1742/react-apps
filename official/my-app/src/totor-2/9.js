import React from 'react';
import ReactDOM from 'react-dom';

const users = ['Вася', 'Петя', 'Максим', 'Егор'];
function UserList(props) {
    const items = users.map((users) => <li>{user}</li>)
    console.log(result);

}

ReactDOM.render(<UserList users={users} />, document.getElementById('root'));