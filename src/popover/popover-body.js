import React from 'react';
import { luiClassName } from '../util';

const PopoverBody = ({
  className,
  children,
  nopad,
  ...extraProps
}) => {
  const finalClassName = luiClassName('popover__body', {
    className,
    states: { nopad },
  });
  return (
    <div className={finalClassName} {...extraProps}>
      {children}
    </div>
  );
};

export default PopoverBody;
