import React from 'react';

import { luiClassName } from '../util';

const InputGroup = ({
  className,
  children,
  variant,
  ...extraProps
}) => {
  const finalClassName = luiClassName('input-group', {
    className,
    modifiers: { variant }
  });
  return (
    <div className={finalClassName} {...extraProps}>
      {children}
    </div>
  );
};

export default InputGroup;
