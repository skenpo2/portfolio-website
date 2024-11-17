import React from 'react';

const Navlink = ({ name, url, setCurrentItem, index }) => {
  return (
    <a onClick={() => setCurrentItem(index)} href={url}>
      {name}
    </a>
  );
};

export default Navlink;
