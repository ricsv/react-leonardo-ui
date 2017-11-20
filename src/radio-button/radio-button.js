import React from 'react';

import { luiClassName } from '../util';

const RadioButton = ({
  children,
  className,
  title,
  htmlFor,
  active,
  variant,
  ...extraProps
}) => {
  const finalClassName = luiClassName('radiobutton', {
    className,
    states: { active },
    modifiers: { variant },
  });

  return (
    <label htmlFor={htmlFor} className={finalClassName}>
      <input className="lui-radiobutton__input" {...extraProps} type="radio" />
      <div className="lui-radiobutton__radio-wrap">
        <span className="lui-radiobutton__radio" />
        <span className="lui-radiobutton__radio-text">{children}</span>
      </div>
    </label>
  );
};

export default RadioButton;
