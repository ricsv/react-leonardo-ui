import React from 'react';
import { luiClassName, filterProps } from '../util';

const DialogFooter = (props) => {
  const className = luiClassName('dialog__footer', { props });
  return (
    <div className={className} {...filterProps(props)}>
      {props.children}
    </div>
  );
};

export default DialogFooter;
