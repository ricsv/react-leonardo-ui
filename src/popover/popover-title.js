import React from 'react';
import { luiClassName, filterProps } from '../util';

const PopoverTitle = (props) => {
  const className = luiClassName('popover__title', { props });
  return (
    <div className={className} {...filterProps(props)}>
      {props.children}
    </div>
  );
};

export default PopoverTitle;
