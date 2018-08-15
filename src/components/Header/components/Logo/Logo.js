import React from 'react';
import './Logo.css';
const Logo = ({ logoUrl }) => {
  return (
    <a className="header-logo-img" href="/browse">
      <img
        alt="netflix"
        src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/799px-Netflix_2015_logo.svg.png"
        height="25"
      />
    </a>
  );
};
export default Logo;
