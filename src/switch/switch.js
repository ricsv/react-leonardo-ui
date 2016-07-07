import React from 'react';
import { filterProps, luiClassName } from '../util';

const modifiers = ['variant'];
const states = ['active', 'disabled'];

const Switch = (props) => {
  const className = luiClassName('switch', {
    props,
    states,
    modifiers
  });

  const attributes = filterProps(props, modifiers, states, 'title', 'type');
  return (
    <div className={className} title={props.title}>
      <label htmlFor={props.htmlFor} className="lui-switch__label">
        <input className="lui-switch__checkbox" type="checkbox" {...attributes} />
        <span className="lui-switch__wrap">
          <div className="lui-switch__inner" />
          <div className="lui-switch__switch" />
        </span>
      </label>
    </div>
  );
};

export default Switch;
