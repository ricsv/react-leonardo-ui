import React from 'react';
import { luiClassName } from '../util';

const Checkbox = ({
  children,
  className,
  title,
  htmlFor,
  active,
  variant,
  ...extraProps
}) => {
  const finalClassName = luiClassName('checkbox', {
    className,
    states: { active },
    modifiers: { variant },
  });
  return (
    <label htmlFor={htmlFor} title={title} className={finalClassName}>
      <input className="lui-checkbox__input" type="checkbox" {...extraProps} />
      <div className="lui-checkbox__check-wrap">
        <span className="lui-checkbox__check" />
        <span className="lui-checkbox__check-text">{children}</span>
      </div>
    </label>
  );
};

export default Checkbox;
