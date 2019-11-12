import React from 'react';
import { luiClassName } from '../util';

const FadeButton = ({
  className,
  children,
  variant,
  size,
  block,
  rounded,
  active,
  ...extraProps
}) => {
  const finalClassName = luiClassName('fade-button', {
    className,
    modifiers: {
      variant,
      size,
      block,
      rounded,
    },
    states: { active },
  });

  return (
    <button type="button" className={finalClassName} {...extraProps}>
      {children}
    </button>
  );
};

export default FadeButton;
