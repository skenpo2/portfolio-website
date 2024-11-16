import React from 'react';

const BigButton = (props) => {
  return (
    <button className={props.className} type="button">
      {props.name}
    </button>
  );
};

export default BigButton;
