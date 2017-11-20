import React from 'react';

import { luiClassName } from '../util';

const List = ({
  className,
  children,
  variant,
  ...extraProps
}) => {
  const finalClassName = luiClassName('list', {
    className,
    modifiers: { variant },
  });
  return (
    <ul className={finalClassName} {...extraProps}>
      {children}
    </ul>
  );
};

export default List;
