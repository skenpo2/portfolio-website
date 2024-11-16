import React from 'react';
import { GoDotFill } from 'react-icons/go';

const Online = () => {
  return (
    <div className="online-container">
      <img className="online-image" src="" width="20px" height="20px" />{' '}
      <GoDotFill className="online-icon" />
      <span className="online-text"> Available for work! </span>
    </div>
  );
};

export default Online;
