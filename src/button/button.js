import React from 'react';

import { filterProps, luiClassName } from '../util';

const modifiers = ['variant', 'size', 'block', 'rounded'];
const states = ['active', 'disabled'];

const Button = (props) => {
  const className = luiClassName('button', {
    props,
    modifiers,
    states
  });
  return (
    <button className={className} {...filterProps(props, modifiers, states)}>
      {props.children}
    </button>
  );
};

export default Button;
