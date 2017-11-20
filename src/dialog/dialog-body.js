import React from 'react';
import { luiClassName } from '../util';

const DialogBody = ({ className, children, ...extraProps }) => {
  const finalClassName = luiClassName('dialog__body', { className });
  return (
    <div className={finalClassName} {...extraProps}>
      {children}
    </div>
  );
};

export default DialogBody;
