import React from 'react';

import { luiClassName, filterProps } from '../util';

const modifiers = ['variant'];
const states = ['active'];

const RadioButton = (props) => {
  const className = luiClassName('radiobutton', {
    props,
    modifiers,
    states
  });

  return (
    <label htmlFor={props.htmlFor} className={className}>
      <input className="lui-radiobutton__input" type="radio" {...filterProps(props, modifiers, states, 'type')} />
      <div className="lui-radiobutton__radio-wrap">
        <span className="lui-radiobutton__radio" />
        <span className="lui-radiobutton__radio-text">{props.children}</span>
      </div>
    </label>
  );
};

export default RadioButton;
