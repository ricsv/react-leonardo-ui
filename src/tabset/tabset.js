import React from 'react';

import { luiClassName, filterProps } from '../util';

const modifiers = ['variant', 'fill'];

const Tabset = (props) => {
  const className = luiClassName('tabset', {
    props,
    modifiers
  });
  return (
    <ul className={className} {...filterProps(props, modifiers)}>
      {props.children}
    </ul>
  );
};

export default Tabset;
