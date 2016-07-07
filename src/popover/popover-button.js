import React from 'react';

import Button from '../button';
import { filterProps } from '../util';

const PopoverButton = (props) => {
  const className = `lui-popover__button  ${props.className || ''}`;
  return (
    <Button {...filterProps(props)} className={className}>
      {props.children}
    </Button>
  );
};

export default PopoverButton;
