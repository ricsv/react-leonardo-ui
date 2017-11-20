import React from 'react';
import { luiClassName } from '../util';

const DialogHeader = ({ className, children, ...extraProps }) => {
  const finalClassName = luiClassName('dialog__header', { className });
  return (
    <div className={finalClassName} {...extraProps}>
      {children}
    </div>
  );
};

export default DialogHeader;
