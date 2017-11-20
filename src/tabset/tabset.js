import React from 'react';

import { luiClassName } from '../util';

const Tabset = ({
  className,
  children,
  variant,
  fill,
  ...extraProps
}) => {
  const finalClassName = luiClassName('tabset', {
    className,
    modifiers: { variant, fill }
  });
  return (
    <ul className={finalClassName} {...extraProps}>
      {children}
    </ul>
  );
};

export default Tabset;
