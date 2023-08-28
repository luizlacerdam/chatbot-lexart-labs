/* eslint-disable react/jsx-max-depth */
import React from 'react';
import Navbar from './components/Navbar';
import MessageBoard from './components/MessageBoard';
import Form from './components/Form';

export default function Chatbot() {
  return (
    <div id="phone-wrapper">

      <div id="app">

        <Navbar />
        <MessageBoard />
        <Form />
      </div>

    </div>
  );
}
