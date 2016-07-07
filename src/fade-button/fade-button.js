import React from 'react';
import { filterProps, luiClassName } from '../util';

const states = ['active', 'disabled'];
const modifiers = ['variant', 'block', 'rounded', 'size'];

const FadeButton = (props) => {
  const className = luiClassName('fade-button', {
    props,
    states,
    modifiers
  });

  return (
    <button className={className} {...filterProps(props, modifiers, states)}>
      {props.children}
    </button>
  );
};

export default FadeButton;
