import React from 'react';
import propTypes from 'prop-types';

export default function Login({ setUsername, username, setStartChat }) {
  const [password, setPassword] = React.useState('');

  function handleInput({ target }) {
    if (target.name === 'username') {
      setUsername(target.value);
    } else {
      setPassword(target.value);
    }
  }

  return (
    <div id="landing" className="bg-dark text-light">
      <span className="fas fa-robot fa-4x" />
      <div>
        <h1 className="mt-3">ChatBot</h1>
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
          onClick={ () => setStartChat(true) }
        >
          Start chat

        </button>
      </form>
    </div>
  );
}

Login.propTypes = {
  setUsername: propTypes.string.isRequired,
  username: propTypes.string.isRequired,
  setStartChat: propTypes.func.isRequired,
};
