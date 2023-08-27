import React, { useState } from 'react';
import menuWhite from '../../assets/img/menu_white_36dp.svg';
import menuClose from '../../assets/img/close_white_36dp.svg';
import leftArrow from '../../assets/img/left_arrow_white.svg';

export default function Navbar() {
  const [menu, setMenu] = useState(false);
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
            <li id="chats" className="nav-link">

              Chats
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
