import React from 'react';
import { luiClassName, filterProps } from '../util';

const PopoverHeader = (props) => {
  const className = luiClassName('popover__header', { props });
  return (
    <div className={className} {...filterProps(props)}>
      {props.children}
    </div>
  );
};

export default PopoverHeader;
