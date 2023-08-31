/* eslint-disable react-func/max-lines-per-function */
import React, { useEffect, useState } from 'react';
import propTypes from 'prop-types';
import plusIcon from '../../../assets/img/plus_icon.svg';
import cameraIcon from '../../../assets/img/camera_icon.svg';
import imgIcon from '../../../assets/img/img_icon.svg';
import microphoneIcon from '../../../assets/img/microphone_icon.svg';
import likeIcon from '../../../assets/img/like_icon.svg';
import timeStamp from '../../../utils/timeStamp';
import { getItem, setItem } from '../../../utils/localStorageHandling';
import { requestPost } from '../../../utils/requests';

export default function Form({ setMessages, messages, setStartChat }) {
  const [localMessage, setLocalMessage] = useState('');
  const [username, setUsername] = useState();

  useEffect(() => {
    setMessages(getItem('messages') || []);
    setUsername(getItem('username'));
  }, []);

  useEffect(() => {
    if (username) {
      setMessages([
        ...messages, {
          sender: 'bot',
          content: `Hello ${username}! How can I help you today?`,
          time: timeStamp(),
        },
      ]);
    }
  }, [username]);

  function getCurrentDateTime() {
    const currentDate = new Date();
    const year = currentDate.getFullYear();
    const month = (currentDate.getMonth() + 1).toString().padStart(2, '0');
    const day = currentDate.getDate().toString().padStart(2, '0');
    const hours = currentDate.getHours().toString().padStart(2, '0');
    const minutes = currentDate.getMinutes().toString().padStart(2, '0');
    const seconds = currentDate.getSeconds().toString().padStart(2, '0');

    const dateTime = `${year}-${month}-${day} ${hours}:${minutes}:${seconds}`;
    return dateTime;
  }

  async function saveChat() {
    try {
      const localUsername = localStorage.getItem('username');
      const localMessages = localStorage.getItem('messages');
      const data = {
        username: localUsername,
        messages: localMessages,
        finished: getCurrentDateTime(),
      };
      const response = await requestPost('/', data);
      return response;
    } catch (error) {
      console.log(error);
    }
  }
  async function chatBot() {
    const localUsername = getItem('username');
    const size = messages.length;
    if (size > 0) {
      const lastMessage = messages[size - 1];
      const content = messages[size - 1].content.toLowerCase();
      const initiateTerms = ['hello', 'goodbye', 'good', 'i want'];

      if (initiateTerms.some(
        (term) => content.includes(term) && lastMessage.sender === 'user'
        && !localUsername,
      )) {
        setMessages([
          ...messages, {
            sender: 'bot',
            content: 'Hello, my name is Optus. Redirecting you to our login page.',
            time: timeStamp(),
          },
        ]);
        setTimeout(() => {
          setStartChat(true);
        }, 3000);
      }

      if (content.includes('loan') && lastMessage.sender === 'user' && localUsername) {
        setMessages([
          ...messages, {
            sender: 'bot',
            content: `Hello ${localUsername}! Here some helpfull info about loans.`,
            time: timeStamp(),
            infos: [
              {
                title: 'Do you wanto to apply for a loan?',
                info: 'We have a variety of loans available for you!',
                url: 'https://www.applyforloan.com',
              },
              {
                title: 'Loan conditions',
                info: 'Check the conditions for each loan.',
                url: 'https://www.checkconditionsloans.com',
              },
              {
                title: 'Help',
                info: 'If you need help, please contact us.',
                url: 'https://www.getloanshelphere.com',
              },
            ],
          },
        ]);
      }
      if (content.includes('goodbye') && lastMessage.sender === 'user' && localUsername) {
        setMessages([
          ...messages, {
            sender: 'bot',
            content: `Goodbye ${localUsername}! 
            You can always come back to chat with me!`,
            time: timeStamp(),
          },
        ]);

        saveChat();

        setTimeout(() => {
          setStartChat(false);
          setMessages([]);
          localStorage.clear();
        }, 5000);
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
      >
        <img src={ likeIcon } alt="like-icon" />
      </button>
    </div>
  );
}

Form.propTypes = {
  setMessages: propTypes.func.isRequired,
  messages: propTypes.arrayOf(propTypes.objectOf).isRequired,
  setStartChat: propTypes.func.isRequired,
};
