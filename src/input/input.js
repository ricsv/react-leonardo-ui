import React from 'react';
import { filterProps, luiClassName } from '../util';

const modifiers = ['variant', 'size'];

const states = ['invalid'];

const Input = (props) => {
  const className = luiClassName('input', {
    props,
    states,
    modifiers
  });
  const attributes = filterProps(props, modifiers, states, 'type');
  return (
    <input className={className} {...attributes} />
  );
};

export default Input;
