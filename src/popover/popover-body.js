import React from 'react';
import { filterProps } from '../util';

const PopoverBody = (props) => {
  const className = `lui-popover__body ${props.className ? props.className : ''}`;
  return (
    <div className={className} {...filterProps(props)}>
      {props.children}
    </div>
  );
};

export default PopoverBody;
