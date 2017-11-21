import React from 'react';
import { luiClassName } from '../util';

const PopoverHeader = ({
  className,
  children,
  nopad,
  ...extraProps
}) => {
  const finalClassName = luiClassName('popover__header', {
    className,
    states: { nopad },
  });
  return (
    <div className={finalClassName} {...extraProps}>
      {children}
    </div>
  );
};

export default PopoverHeader;
