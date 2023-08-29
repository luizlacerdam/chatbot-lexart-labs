import React from 'react';
import propTypes from 'prop-types';
import { setItem } from '../utils/localStorageHandling';

export default function Login({ setUsername, username, setStartChat }) {
  const [password, setPassword] = React.useState('');

  function handleInput({ target }) {
    if (target.name === 'username') {
      setUsername(target.value);
    } else {
      setPassword(target.value);
    }
  }

  const handleStartChat = () => {
    setStartChat(true);
    setItem('username', username);
  };
  return (
    <div id="landing" className="bg-dark text-light">
      <span className="fas fa-robot fa-4x" />
      <div>
        <h1 className="mt-3">Optus</h1>
        <h3>Please log in to chat</h3>
      </div>
      <form id="form-start">
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
      </form>
    </div>
  );
}

Login.propTypes = {
  setUsername: propTypes.func.isRequired,
  username: propTypes.string.isRequired,
  setStartChat: propTypes.func.isRequired,
};
