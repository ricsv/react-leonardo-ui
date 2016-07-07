import React from 'react';
import { luiClassName, filterProps } from '../util';

const ListText = (props) => {
  const className = luiClassName('list__text', { props });
  return (
    <div className={className} {...filterProps(props)}>
      {props.children}
    </div>
  );
};

export default ListText;
