/* eslint-disable react/jsx-max-depth */
import React from 'react';
import Navbar from '../components/Navbar';
import MessageBoard from './components/MessageBoard';
import Form from './components/Form';
import Login from './components/Login';

export default function Chatbot() {
  const [messages, setMessages] = React.useState([]);
  const [username, setUsername] = React.useState('');
  const [startChat, setStartChat] = React.useState(false);

  return (
    <div id="phone-wrapper">

      <div id="app">
        { startChat && (
          <Login
            username={ username }
            setUsername={ setUsername }
            setStartChat={ setStartChat }
            startChat={ startChat }
          />) }
        <Navbar />
        <MessageBoard
          messages={ messages }
          setMessages={ setMessages }
        />
        <Form
          messages={ messages }
          setMessages={ setMessages }
          setStartChat={ setStartChat }
          username={ username }
        />
      </div>

    </div>
  );
}
