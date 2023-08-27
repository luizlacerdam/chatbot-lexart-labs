/* eslint-disable react/jsx-max-depth */
import React from 'react';

export default function Chatbot() {
  return (
    <div id="phone-wrapper">

      <div id="app">

        <div id="header" className="bg-dark">
          <div>
            <button
              id="back-button"
              className="text-light btn-transparent btn-icon fas fa-arrow-left"
            />
          </div>
          <div className="text-light align-center">
            <h2>Optus</h2>
          </div>
          <div>
            <button
              id="nav-icon"
              className="text-light btn-transparent btn-icon"
            />
            <nav id="nav-container" style={ { display: 'none' } }>
              <ul className="nav">
                <li id="theme" className="nav-link">
                  <span className="" />
                  Chats
                </li>
                <hr />
                <li id="sign-out" className="nav-link">
                  <span className="" />
                  Sign out
                </li>
              </ul>
            </nav>
          </div>
        </div>

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
