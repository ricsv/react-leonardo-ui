import React from 'react';
import { luiClassName, filterProps } from '../util';

const PopoverFooter = (props) => {
  const className = luiClassName('popover__footer', { props });
  return (
    <div className={className} {...filterProps(props)}>
      {props.children}
    </div>
  );
};

export default PopoverFooter;
