import React from 'react';
import { luiClassName, filterProps } from '../util';

const DialogHeader = (props) => {
  const className = luiClassName('dialog__header', { props });
  return (
    <div className={className} {...filterProps(props)}>
      {props.children}
    </div>
  );
};

export default DialogHeader;
