import React from 'react';

import Button from '../button';

const PopoverButton = ({ className, children, ...extraProps }) => {
  const finalClassName = `lui-popover__button ${className}`.trim();
  return (
    <Button className={finalClassName} {...extraProps}>
      {children}
    </Button>
  );
};

export default PopoverButton;
