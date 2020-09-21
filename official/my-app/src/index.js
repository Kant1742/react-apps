import React from 'react';
import ReactDOM from 'react-dom';

const users = [
  { id: 1, name: 'Вася' },
  { id: 2, name: 'Петя' },
  { id: 3, name: 'Максим' },
  { id: 4, name: 'Егор' }];

function UserItem(props) {
  const user = props.user
  //Правильно! Здесь не нужно указывать ключ:
  return (<li>{user.name}</li>)
}

function UserList(props) {
  const users = props.users;
  const items = users.map((user) => {
    //Правильно! Здесь должен быть указан ключ:
    return <UserItem key={user.id} user={user} />;
  });
  return (<ul>{items}</ul>);
}

ReactDOM.render(<UserList users={users} />, document.getElementById('root'));

function Chat(props) {
  const user = props.user;

  const userList = (
    <p> Users of the chast:
      {users.map((user) => 
        <b key={user.id}>{user.name};</b>
      )}
    </p>
  );

  const messageList = props.messages.map((message) => {
    let author = null;

    users.forEach((user) => {if(user.id === message.authorId) author=user});

    return (
      <p key={message.id}>
        <b>{author.name}: </b>
        <span>{message.messages}</span>
      </p>
    )
  });

  return (
    <p>
      {userList}
      {messageList}
    </p>
  )
}


