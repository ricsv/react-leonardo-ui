import React from 'react';
import { luiClassName } from '../util';

const DialogFooter = ({
  className,
  children,
  nopad,
  ...extraProps
}) => {
  const finalClassName = luiClassName('dialog__footer', {
    className,
    states: { nopad },
  });
  return (
    <div className={finalClassName} {...extraProps}>
      {children}
    </div>
  );
};

export default DialogFooter;
