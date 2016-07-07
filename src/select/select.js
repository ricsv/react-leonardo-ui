import React from 'react';
import { filterProps, luiClassName } from '../util';

const modifiers = ['variant'];
const states = ['active', 'disabled'];

const Select = (props) => {
  const className = luiClassName('select', {
    props,
    states,
    modifiers
  });
  return (
    <select className={className} {...filterProps(props, states, modifiers)}>
      {props.children}
    </select>
  );
};

export default Select;
