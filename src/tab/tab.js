import React from 'react';

import { filterProps, luiClassName } from '../util';

const modifiers = ['variant'];
const states = ['active', 'disabled'];

const Tab = (props) => {
  const className = luiClassName('tab', {
    props,
    states,
    modifiers
  });
  const attributes = filterProps(props, modifiers, states);
  return (
    <li className={className} {...attributes}>
      {props.children}
    </li>
  );
};

export default Tab;
