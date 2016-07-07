import React from 'react';

import { filterProps, luiClassName } from '../util';

const modifiers = ['variant'];

const List = (props) => {
  const className = luiClassName('list', {
    props,
    modifiers
  });
  return (
    <ul className={className} {...filterProps(props, modifiers)}>
      {props.children}
    </ul>
  );
};

export default List;
