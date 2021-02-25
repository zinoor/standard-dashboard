import React from 'react';

const Logo = (props) => {
  return (
    <img
      className="logo"
      alt="Logo"
      src="/static/images/products/icon-matlab.png"
      {...props}
    />
  );
};

export default Logo;
