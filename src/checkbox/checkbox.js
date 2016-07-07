import React from 'react';
import { filterProps, luiClassName } from '../util';

const states = ['active', 'disabled'];
const modifiers = ['variant'];

const Checkbox = (props) => {
  const attributes = filterProps(props, states, modifiers, 'title', 'type');

  const className = luiClassName('checkbox', {
    props,
    states,
    modifiers
  });
  return (
    <label htmlFor={props.htmlFor} title={props.title} className={className}>
      <input className="lui-checkbox__input" type="checkbox" {...attributes} />
      <div className="lui-checkbox__check-wrap">
        <span className="lui-checkbox__check" />
        <span className="lui-checkbox__check-text">{props.children}</span>
      </div>
    </label>
  );
};

export default Checkbox;
