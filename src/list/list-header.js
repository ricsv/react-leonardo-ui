import React from 'react';
import { luiClassName, filterProps } from '../util';

const ListAside = (props) => {
  const className = luiClassName('list__header', { props });
  return (
    <li className={className} {...filterProps(props)}>
      {props.children}
    </li>
  );
};

export default ListAside;
