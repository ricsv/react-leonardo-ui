import React from 'react';
import { luiClassName } from '../util';

const PopoverFooter = ({ className, children, ...extraProps }) => {
  const finalClassName = luiClassName('popover__footer', { className });
  return (
    <div className={finalClassName} {...extraProps}>
      {children}
    </div>
  );
};

export default PopoverFooter;
