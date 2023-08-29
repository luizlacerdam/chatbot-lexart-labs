import React, { useEffect, useRef } from 'react';
import propTypes from 'prop-types';
import timeStamp from '../../../utils/timeStamp';

export default function MessageBoard({ messages, setMessages }) {
  const messagesEndRef = useRef(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleLinks = (key, message) => {
    setMessages([
      ...messages, {
        sender: 'bot',
        content: message.infos[key].info,
        time: timeStamp(),
      },
    ]);
    // falta mandar o link para o usuario
  };

  return (
    <div id="message-board">
      {
        messages.map((message, index) => (
          <div
            key={ index }
            className={ `post post-${message.sender}` }
          >
            { message.content }
            <span className="timestamp">{message.time}</span>
            { message.sender === 'bot' && message.infos ? (
              message.infos.map((info, i) => (
                <div key={ i }>
                  <button
                    className="link-button"
                    onClick={ () => handleLinks(i, message) }
                  >
                    {info.title}
                  </button>

                </div>

              ))
            ) : null }

          </div>
        ))
      }
      <div ref={ messagesEndRef } />
    </div>
  );
}

MessageBoard.propTypes = {
  messages: propTypes.arrayOf(propTypes.objectOf).isRequired,
  setMessages: propTypes.func.isRequired,
};
