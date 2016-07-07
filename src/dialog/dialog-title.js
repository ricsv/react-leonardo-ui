import React from 'react';
import { luiClassName, filterProps } from '../util';

const DialogTitle = (props) => {
  const className = luiClassName('dialog__title', { props });
  return (
    <div className={className} {...filterProps(props)}>
      {props.children}
    </div>
  );
};

export default DialogTitle;
