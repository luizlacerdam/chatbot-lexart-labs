import React, { useEffect } from 'react';
import propTypes from 'prop-types';
import timeStamp from '../../../utils/timeStamp';

export default function Chatbot({ setMessages, messages }) {
  function searchTerms() {
    const size = messages.length;
    content = messages[size - 1].content.toLowerCase();
    if (content.includes('hello')) {
      setMessages([
        ...messages, {
          sender: 'bot',
          content: 'Hello!',
          time: timeStamp(),
        },
      ]);
    }
  }
  useEffect(() => {
    searchTerms();
  }, [messages]);

  //   function responseMessage() {
  //     const initiateTerms = ['hello', 'goodbye', 'good', 'i want'];
  //     if (condition) {

  //     }
  //   }
  return (
    <div>
      Hello!
    </div>
  );
}

Chatbot.propTypes = {
  setMessages: propTypes.func.isRequired,
  messages: propTypes.arrayOf(propTypes.objectOf).isRequired,
};
