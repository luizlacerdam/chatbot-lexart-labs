import React from 'react';
import propTypes from 'prop-types';
import { setItem } from '../../../utils/localStorageHandling';
import timeStamp from '../../../utils/timeStamp';

export default function Login({ setUsername,
  username, setStartChat, startChat, messages,
  setMessages }) {
  const [password, setPassword] = React.useState('');

  function handleInput({ target }) {
    if (target.name === 'username') {
      setUsername(target.value);
    } else {
      setPassword(target.value);
    }
  }

  const handleStartChat = () => {
    setStartChat(!startChat);
    setItem('username', username);
    setMessages([
      ...messages, {
        sender: 'bot',
        content: `Thank you for ${username}! Type "loans" to see our loan options.`,
        time: timeStamp(),
      },
    ]);
  };
  return (
    <div id="landing" className="bg-dark text-light">
      <span className="fas fa-robot fa-4x" />
      <div>
        <h1 className="mt-3">ChatBot</h1>
        <h3>Please log in to chat</h3>
      </div>
      <div id="form-start">
        <input
          type="text"
          name="username"
          id="username"
          placeholder="Username"
          onChange={ handleInput }
          value={ username }
          required
        />
        <input
          type="password"
          name="password"
          id="password"
          placeholder="Password"
          onChange={ handleInput }
          value={ password }
          required
        />
        <button
          id="start-chat"
          onClick={ handleStartChat }
        >
          Login

        </button>
      </div>
    </div>
  );
}

Login.propTypes = {
  setMessages: propTypes.func.isRequired,
  messages: propTypes.arrayOf(propTypes.objectOf).isRequired,
  setUsername: propTypes.func.isRequired,
  username: propTypes.string.isRequired,
  setStartChat: propTypes.func.isRequired,
  startChat: propTypes.bool.isRequired,
};
