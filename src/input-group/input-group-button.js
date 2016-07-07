import React from 'react';

import Button from '../button';
import { filterProps } from '../util';

const InputGroupButton = (props) => {
  const className = `lui-input-group__item  lui-input-group__button  ${props.className || ''}`;
  return <Button className={className} {...filterProps(props)}>{props.children}</Button>;
};

export default InputGroupButton;
