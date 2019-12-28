import * as React from 'react';
import ChannelSection from './channels/ChannelSection';
import UserSection from './users/UserSection';
import MessageSection from './message/MessageSection';

export default function App() {
  const [channels, setChannels] = React.useState([
    { name: 'channel 1', id: 0 },
    { name: 'channel 2', id: 1 },
    { name: 'channel 3', id: 2 },
  ]);
  const addChannel = name => {
    setChannels([...channels, { name: name, id: channels.length }]);
  };
  const [users, setUsers] = React.useState([
    { name: 'Toki', id: 0 },
    { name: 'Eno', id: 1 },
    { name: 'Blue', id: 2 },
  ]);
  const addUser = name => {
    setUsers([...users, { name: name, id: users.length }]);
  };
  const [messages, setMessage] = React.useState([
    { title: 'Toki', body: 'Toki is awesome', id: 0 },
    { title: 'Eno', body: 'Eno is awesome', id: 1 },
    { title: 'Blue', body: 'Blue is awesome', id: 2 },
  ]);
  const addMessage = (title, body) => {
    let createdAt = new Date();

    let author = users > 0 ? users[0].name : 'anonymous';

    setMessage([
      ...messages,
      { title: title, body: body, id: messages.length, author, createdAt },
    ]);
  };

  return (
    <>
      <ChannelSection addChannel={addChannel} channels={channels} />
      <UserSection users={users} addUser={addUser} />
      <MessageSection messages={messages} addMessage={addMessage} />
    </>
  );
}
