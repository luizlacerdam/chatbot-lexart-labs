import React from 'react';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import Chatbot from './pages/chatbot';

function App() {
  return (
    <Routes>
      <Route path="/" element={ <Chatbot /> } />
    </Routes>
  );
}

export default App;
