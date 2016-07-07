import React from 'react';
import { luiClassName, filterProps } from '../util';

const DialogBody = (props) => {
  const className = luiClassName('dialog__body', { props });
  return (
    <div className={className} {...filterProps(props)}>
      {props.children}
    </div>
  );
};

export default DialogBody;
