import React, { useEffect, useRef } from 'react';
import propTypes from 'prop-types';
import timeStamp from '../utils/timeStamp';

export default function MessageBoard({ messages, setMessages }) {
  const messagesEndRef = useRef(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleInfo = (key, message) => {
    setMessages([
      ...messages, {
        sender: 'bot',
        content: message.links[key].info,
        time: timeStamp(),
      },
    ]);
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
            { message.sender === 'bot' && message.links ? (
              message.links.map((link, i) => (
                <div key={ i }>
                  <button
                    onClick={ () => handleInfo(i, message) }
                  >

                    {link.title}
                  </button>
                  {/* <span>
                    {link.info}
                  </span> */}

                  {/* {link.url} */}
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
