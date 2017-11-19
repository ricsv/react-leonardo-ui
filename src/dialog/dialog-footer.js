import React from 'react';
import { luiClassName } from '../util';

const DialogFooter = ({ className, children, ...extraProps }) => {
  const finalClassName = luiClassName('dialog__footer', { className });
  return (
    <div className={finalClassName} {...extraProps}>
      {children}
    </div>
  );
};

export default DialogFooter;
