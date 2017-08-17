import React from 'react';
import { filterProps, luiClassName } from '../util';

const modifiers = ['variant'];

const states = ['invalid'];

const Textarea = (props) => {
  const className = luiClassName('textarea', {
    props,
    states,
    modifiers
  });
  return (
    <textarea className={className} {...filterProps(props, modifiers, states)} />
  );
};

export default Textarea;
