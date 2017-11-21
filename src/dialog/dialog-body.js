import React from 'react';
import { luiClassName } from '../util';

const DialogBody = ({
  className,
  children,
  nopad,
  ...extraProps
}) => {
  const finalClassName = luiClassName('dialog__body', {
    className,
    states: { nopad },
  });
  return (
    <div className={finalClassName} {...extraProps}>
      {children}
    </div>
  );
};

export default DialogBody;
