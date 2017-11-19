import React from 'react';

import Button from '../button';

const ButtonGroupButton = ({ className = '', children, ...extraProps }) => {
  const finalClassName = `lui-buttongroup__button  ${className}`.trim();
  return (
    <Button {...extraProps} className={finalClassName}>
      {children}
    </Button>
  );
};

export default ButtonGroupButton;
