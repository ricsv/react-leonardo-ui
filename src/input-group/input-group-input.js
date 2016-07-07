import React from 'react';

import Input from '../input';
import { filterProps } from '../util';

const InputGroupInput = (props) => {
  const className = `lui-input-group__item  lui-input-group__input  ${props.className || ''}`;
  return <Input className={className} {...filterProps(props)} />;
};

export default InputGroupInput;
