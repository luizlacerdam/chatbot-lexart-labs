import React from 'react';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import Chatbot from './pages/chatbot';
import Chats from './pages/chats';

function App() {
  return (
    <Routes>
      <Route path="/chats" element={ <Chats /> } />
      <Route path="/" element={ <Chatbot /> } />
    </Routes>
  );
}

export default App;
