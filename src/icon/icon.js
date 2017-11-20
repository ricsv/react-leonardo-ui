import React from 'react';

import { luiClassName } from '../util';

const Icon = ({
  className,
  name,
  size,
  ...extraProps
}) => {
  const finalClassName = luiClassName('icon', {
    className,
    modifiers: { name, size },
  });
  return (
    <span className={finalClassName} aria-hidden="true" {...extraProps} />
  );
};

export default Icon;
