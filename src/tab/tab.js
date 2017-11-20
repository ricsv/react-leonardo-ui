import React from 'react';

import { luiClassName } from '../util';

const Tab = ({
  className,
  children,
  variant,
  active,
  disabled,
  ...extraProps
}) => {
  const finalClassName = luiClassName('tab', {
    className,
    modifiers: { variant },
    states: { active, disabled },
  });

  return (
    <li className={finalClassName} {...extraProps}>
      {children}
    </li>
  );
};

export default Tab;
