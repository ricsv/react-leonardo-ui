import React from 'react';
import { luiClassName } from '../util';

const PopoverHeader = ({ className, children, ...extraProps }) => {
  const finalClassName = luiClassName('popover__header', { className });
  return (
    <div className={finalClassName} {...extraProps}>
      {children}
    </div>
  );
};

export default PopoverHeader;
