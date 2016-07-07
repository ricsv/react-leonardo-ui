import React from 'react';

import { luiClassName, filterProps } from '../util';

const modifiers = ['variant'];

const InputGroup = (props) => {
  const className = luiClassName('input-group', {
    props,
    modifiers
  });
  return (
    <div className={className} {...filterProps(props, modifiers)}>
      {props.children}
    </div>
  );
};

export default InputGroup;
