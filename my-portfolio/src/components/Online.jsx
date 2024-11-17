import React from 'react';
import { GoDotFill } from 'react-icons/go';
import avatar from '../assets/avatar.png';

const Online = () => {
  return (
    <div className="online-container">
      <img className="online-image" src={avatar} width="40px" height="40px" />{' '}
      <GoDotFill className="online-icon" />
      <span className="online-text"> Available for work! </span>
    </div>
  );
};

export default Online;
