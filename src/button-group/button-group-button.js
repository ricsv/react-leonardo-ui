import React from 'react';

import Button from '../button';
import { filterProps } from '../util';

const ButtonGroupButton = (props) => {
  const className = `lui-buttongroup__button  ${props.className || ''}`;
  return (
    <Button {...filterProps(props)} className={className}>
      {props.children}
    </Button>
  );
};

export default ButtonGroupButton;
