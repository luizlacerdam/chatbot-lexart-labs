import React from 'react';
import plusIcon from '../../../assets/img/plus_icon.svg';
import cameraIcon from '../../../assets/img/camera_icon.svg';
import imgIcon from '../../../assets/img/img_icon.svg';
import microphoneIcon from '../../../assets/img/microphone_icon.svg';
import likeIcon from '../../../assets/img/like_icon.svg';

export default function Form() {
  return (
    <div id="form" className="bg-light">
      <button
        className="btn-transparent btn"
      >
        <img src={ plusIcon } alt="plus-icon" />
      </button>
      <button
        className="btn-transparent btn"
      >
        <img src={ cameraIcon } alt="camera-icon" />
      </button>
      <button
        className="btn-transparent btn"
      >
        <img src={ imgIcon } alt="img-icon" />
      </button>
      <button
        className="btn-transparent btn"
      >
        <img src={ microphoneIcon } alt="microphone-icon" />
      </button>

      <div
        id="message"
        placeholder="Type your message here"
        rows="1"
        contentEditable
      />
      <button
        className="btn-transparent btn"
      >
        <img src={ likeIcon } alt="like-icon" />
      </button>
    </div>
  );
}
