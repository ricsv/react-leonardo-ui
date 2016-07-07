import React from 'react';
import { luiClassName, filterProps } from '../util';

const ListItem = (props) => {
  const className = luiClassName('list__item', { props });
  return (
    <li className={className} {...filterProps(props)}>
      {props.children}
    </li>
  );
};

export default ListItem;
