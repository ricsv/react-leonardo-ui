import React from 'react';
import { luiClassName } from '../util';

const PopoverBody = ({ className, children, ...extraProps }) => {
  const finalClassName = luiClassName('popover__body', { className });
  return (
    <div className={finalClassName} {...extraProps}>
      {children}
    </div>
  );
};

export default PopoverBody;
