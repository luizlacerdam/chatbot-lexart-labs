import React from 'react';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import Chatbot from './pages/chatbot';
import Chats from './pages/chats';
import Home from './pages/home';

function App() {
  return (
    <Routes>
      <Route path="/chats" element={ <Chats /> } />
      <Route path="/chatbot" element={ <Chatbot /> } />
      <Route path="/" element={ <Home /> } />

    </Routes>
  );
}

export default App;
