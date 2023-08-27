import React from 'react';

export default function Chatbot() {
  return (
    <div id="phone-wrapper">

      <div id="app">
        
        <div id="header" className="bg-dark">
          
          <div className="text-light align-center">
            <h2>Optus</h2>
          </div>
        
        </div>
        <div id="message-board" />
        <div id="form" className="bg-light">
          <div 
          id="message" 
          placeholder="Type your message here" 
          rows="1" contentEditable />
          <div>
            <button id="send" type="" className="btn-transparent btn-icon" />
            </div>
        </div>
      </div>

    </div>
  );
}