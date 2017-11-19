import React from 'react';

import Button from '../button';
import { luiClassName } from '../util';

const PopoverButton = ({ className, children, ...extraProps }) => {
  const finalClassName = luiClassName('lui-popover__button', { className });
  return (
    <Button className={finalClassName} {...extraProps}>
      {children}
    </Button>
  );
};

export default PopoverButton;
