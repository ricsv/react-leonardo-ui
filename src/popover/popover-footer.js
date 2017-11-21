import React from 'react';
import { luiClassName } from '../util';

const PopoverFooter = ({
  className,
  children,
  nopad,
  ...extraProps
}) => {
  const finalClassName = luiClassName('popover__footer', {
    className,
    states: { nopad },
  });
  return (
    <div className={finalClassName} {...extraProps}>
      {children}
    </div>
  );
};

export default PopoverFooter;
