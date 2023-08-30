import React, { useState } from 'react';
import { Link, useNavigate, useResolvedPath } from 'react-router-dom';
import menuWhite from '../../assets/img/menu_white_36dp.svg';
import menuClose from '../../assets/img/close_white_36dp.svg';
import leftArrow from '../../assets/img/left_arrow_white.svg';

export default function Navbar() {
  const [menu, setMenu] = useState(false);
  const navigate = useNavigate();
  const path = useResolvedPath();

  return (
    <div id="header" className="bg-dark">
      <button
        className="btn-transparent"
        onClick={ () => navigate(-1) }
      >
        { path.pathname !== '/' && (
          <img
            id="back-button"
            src={ leftArrow }
            alt="left-arrow-icon"
          />
        ) }
      </button>

      <div className="text-light align-center">
        <h2>ChatBot</h2>
      </div>
      <div>
        <button
          className="btn-transparent"
          onClick={ () => setMenu(!menu) }

        >

          <img
            src={ !menu ? menuWhite : menuClose }
            alt="menu-icon"
            id="nav-icon"
          />
        </button>
        <nav
          id="nav-container"
          style={ !menu ? { display: 'none' } : { display: 'block' } }
        >
          <ul className="nav">

            <li id="home" className="nav-link">
              <Link to="/">Home</Link>
            </li>

            <li id="chats" className="nav-link">
              <Link to="/chats">Chats</Link>
            </li>

            <li id="chatbot" className="nav-link">
              <Link to="/chatbot">Chatbot</Link>
            </li>

            <hr />
            <li id="sign-out" className="nav-link">

              Sign out
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
}
