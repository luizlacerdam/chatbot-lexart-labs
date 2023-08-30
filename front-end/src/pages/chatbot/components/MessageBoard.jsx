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

  const handleInfos = (key, message) => {
    setMessages((prevState) => ([
      ...prevState, {
        sender: 'bot',
        content: message.infos[key].info,
        time: timeStamp(),

      },
    ]));
    setMessages((prevState) => ([
      ...prevState, {
        sender: 'bot',
        content: message.infos[key].url,
        type: 'url',
        time: timeStamp(),
      },
    ]));
  };

  return (
    <div id="message-board">
      {
        messages.map((message, index) => (
          <div
            key={ index }
            className={ `post post-${message.sender}` }
          >
            {!message.type ? (
              <>
                <span>
                  {message.content}
                </span>
                <span className="timestamp">{message.time}</span>
              </>
            ) : null}

            { message.sender === 'bot' && message.infos ? (
              message.infos.map((info, i) => (
                <div key={ i }>
                  <button
                    className="link-button"
                    onClick={ () => handleInfos(i, message) }
                  >
                    {info.title}
                  </button>

                </div>

              ))
            ) : null }

            { message.sender === 'bot' && message.type === 'url' ? (
              <a
                href={ message.content }
              >

                {message.content}
              </a>
            ) : null}

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
