import React from 'react';
import { luiClassName } from '../util';

const PopoverTitle = ({ className, children, ...extraProps }) => {
  const finalClassName = luiClassName('popover__title', { className });
  return (
    <div className={finalClassName} {...extraProps}>
      {children}
    </div>
  );
};

export default PopoverTitle;
