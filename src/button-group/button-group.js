import React from 'react';

import { luiClassName } from '../util';

const ButtonGroup = ({ className, children, ...extraProps }) => {
  const finalClassName = luiClassName('buttongroup', {
    className,
    props: extraProps
  });
  return (
    <div {...extraProps} className={finalClassName}>
      {children}
    </div>
  );
};

export default ButtonGroup;
