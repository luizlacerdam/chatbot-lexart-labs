import React, { useEffect, useState } from 'react';
import propTypes from 'prop-types';
import plusIcon from '../../../assets/img/plus_icon.svg';
import cameraIcon from '../../../assets/img/camera_icon.svg';
import imgIcon from '../../../assets/img/img_icon.svg';
import microphoneIcon from '../../../assets/img/microphone_icon.svg';
import sendIcon from '../../../assets/img/send_icon.svg';
import timeStamp from '../utils/timeStamp';
import { getItem, setItem } from '../utils/localStorageHandling';

export default function Form({ setMessages, messages, setStartChat }) {
  const [localMessage, setLocalMessage] = useState('');
  const [username, setUsername] = useState();

  useEffect(() => {
    setMessages(getItem('messages') || []);
    setUsername(getItem('username'));
  }, []);

  function chatBot() {
    const size = messages.length;
    if (size > 0) {
      const lastMessage = messages[size - 1];
      const content = messages[size - 1].content.toLowerCase();
      const initiateTerms = ['hello', 'goodbye', 'good', 'i want'];

      if (initiateTerms.some(
        (term) => content.includes(term) && lastMessage.sender === 'user' && !username,
      )) {
        setMessages([
          ...messages, {
            sender: 'bot',
            content: 'Hello, my name is Optus. Please log in so I can assist you today!',
            time: timeStamp(),
          },
        ]);
        setTimeout(() => {
          setStartChat(true);
        }, 3500);
      }
    }
  }

  useEffect(() => {
    if (messages.length > 0) {
      setItem('messages', messages);
    }
    chatBot();
  }, [messages]);

  const handleMessege = () => {
    if (localMessage !== '') {
      setMessages([
        ...messages, {
          sender: 'user',
          content: localMessage,
          time: timeStamp(),
        },
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
  setStartChat: propTypes.func.isRequired,
};
