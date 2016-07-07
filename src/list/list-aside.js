import React from 'react';
import { luiClassName, filterProps } from '../util';

const ListAside = (props) => {
  const className = luiClassName('list__aside', { props });
  return (
    <div className={className} {...filterProps(props)}>
      {props.children}
    </div>
  );
};

export default ListAside;
