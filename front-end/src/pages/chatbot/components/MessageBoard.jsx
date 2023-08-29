import React from 'react';
import propTypes from 'prop-types';

export default function MessageBoard({ messages }) {
  return (
    <div id="message-board">
      {
        messages.map((message, index) => (
          <div
            key={ index }
            className={ message.sender === 'bot' ? 'post post-bot' : 'post post-user' }
          >
            { message.content }
            <span className="timestamp">{message.time}</span>
          </div>
        ))
      }
    </div>
  );
}

MessageBoard.propTypes = {
  messages: propTypes.arrayOf(propTypes.objectOf).isRequired,
};
