import React from 'react';

import { luiClassName, filterProps } from '../util';

const modifiers = ['size', 'name'];

const Icon = (props) => {
  const className = luiClassName('icon', {
    props,
    modifiers
  });
  return (
    <span className={className} aria-hidden="true" {...filterProps(props, modifiers)} />
  );
};

export default Icon;
