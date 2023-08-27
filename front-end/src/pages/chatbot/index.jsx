/* eslint-disable react/jsx-max-depth */
import React from 'react';
import Navbar from '../components/Navbar';

export default function Chatbot() {
  return (
    <div id="phone-wrapper">

      <div id="app">

        <Navbar />

        <div id="message-board" />
        <div id="form" className="bg-light">
          <div
            id="message"
            placeholder="Type your message here"
            rows="1"
            contentEditable
          />
          <div>
            <button id="send" type="" className="btn-transparent btn-icon" />
          </div>
        </div>
      </div>

    </div>
  );
}
