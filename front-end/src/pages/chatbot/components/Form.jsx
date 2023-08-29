import React, { useState } from 'react';
import propTypes from 'prop-types';
import plusIcon from '../../../assets/img/plus_icon.svg';
import cameraIcon from '../../../assets/img/camera_icon.svg';
import imgIcon from '../../../assets/img/img_icon.svg';
import microphoneIcon from '../../../assets/img/microphone_icon.svg';
import sendIcon from '../../../assets/img/send_icon.svg';

export default function Form({ setMessages, messages }) {
  const [localMessage, setLocalMessage] = useState('');

  const handleMessege = () => {
    if (localMessage !== '') {
      setMessages([
        ...messages, {
          sender: 'user',
          content: localMessage },
      ]);
      setLocalMessage('');
    }
  };

  const handleLocalMessage = ({ target }) => {
    setLocalMessage(target.value);
  };

  const handleKeyDown = (event) => {
    if (event.key === 'Enter') {
      handleMessege();
    }
  };

  return (
    <div id="form" className="bg-light">
      <button
        className="btn-transparent btn"
      >
        <img src={ plusIcon } alt="plus-icon" />
      </button>
      <button
        className="btn-transparent btn"
      >
        <img src={ cameraIcon } alt="camera-icon" />
      </button>
      <button
        className="btn-transparent btn"
      >
        <img src={ imgIcon } alt="img-icon" />
      </button>
      <button
        className="btn-transparent btn"
      >
        <img src={ microphoneIcon } alt="microphone-icon" />
      </button>

      <input
        type="text"
        id="message"
        onChange={ handleLocalMessage }
        onKeyDown={ handleKeyDown }
        value={ localMessage }
      />
      <button
        className="btn-transparent btn"
        onClick={ handleMessege }
      >
        <img src={ sendIcon } alt="send-icon" />
      </button>
    </div>
  );
}

Form.propTypes = {
  setMessages: propTypes.func.isRequired,
  messages: propTypes.arrayOf(propTypes.objectOf).isRequired,
};
