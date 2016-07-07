import React from 'react';

import { luiClassName, filterProps } from '../util';

const ButtonGroup = (props) => {
  const className = luiClassName('buttongroup', {
    props
  });
  return (
    <div {...filterProps(props)} className={className}>
      {props.children}
    </div>
  );
};

export default ButtonGroup;
