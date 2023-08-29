import React, { useState } from 'react';
import { Link, useResolvedPath } from 'react-router-dom';
import menuWhite from '../../assets/img/menu_white_36dp.svg';
import menuClose from '../../assets/img/close_white_36dp.svg';
import leftArrow from '../../assets/img/left_arrow_white.svg';

export default function Navbar() {
  const [menu, setMenu] = useState(false);
  const path = useResolvedPath();
  return (
    <div id="header" className="bg-dark">

      <img
        id="back-button"
        src={ leftArrow }
        alt=""
      />

      <div className="text-light align-center">
        <h2>Optus</h2>
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
            { path.pathname !== '/chats' && (
              <li id="chats" className="nav-link">
                <Link to="/chats">Chats</Link>
              </li>
            )}
            { path.pathname !== '/' && (
              <li id="chatbot" className="nav-link">
                <Link to="/">Chatbot</Link>
              </li>
            )}

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
