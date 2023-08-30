import React from 'react';
import { useNavigate } from 'react-router-dom';
import Navbar from '../components/Navbar';
import lexArt from '../../assets/img/lex-white.svg';
import chatBot from '../../assets/img/chat_bot_icon.svg';

export default function Home() {
  const navigate = useNavigate();
  return (
    <div id="phone-wrapper">

      <div id="app">
        <Navbar />
        <div
          style={ { background: 'black' } }
          id="home-page"
        >
          <img
            id="lex-art-labs-logo"
            src={ lexArt }
            alt="lex-art-labs-logo"
          />
          <button
            className="btn-transparent"
            onClick={ () => navigate('/chatbot') }
          >
            <img
              id="chat-bot-icon"
              src={ chatBot }
              alt="chat-bot-icon"
            />
          </button>
        </div>

      </div>
    </div>
  );
}
