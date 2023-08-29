import React from 'react';
import propTypes from 'prop-types';

export default function MessageBoard({ messages }) {
  const [divStyle, setDivStyle] = React.useState({});
  const toggleStyle = (key) => {
    if (divStyle[key]) {
      divStyle[key] = { display: 'none' };
      setDivStyle({ ...divStyle,
        div,
      });
    } else {
      const newStyle = {};
      newStyle[key] = { display: 'block' };
      setDivStyle({ ...divStyle,
        ...newStyle });
    }
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
                    onClick={ () => toggleStyle(i) }
                  >

                    {link.title}
                  </button>
                  <span
                    style={ divStyle[i] || { display: 'none' } }
                  >
                    {link.info}
                  </span>

                  {/* {link.url} */}
                </div>

              ))
            ) : null }

          </div>
        ))
      }
    </div>
  );
}

MessageBoard.propTypes = {
  messages: propTypes.arrayOf(propTypes.objectOf).isRequired,
};
