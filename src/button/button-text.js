import React from 'react';

const ButtonText = ({ children, ...extraProps }) =>
  <span className="lui-button__text" {...extraProps}>{children}</span>;

export default ButtonText;
