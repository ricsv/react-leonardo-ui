import React from 'react';

import Button from '../button';

const InputGroupButton = ({ className = '', children, ...extraProps }) => {
  const finalClassName = `lui-input-group__item  lui-input-group__button  ${className}`.trim();
  return <Button className={finalClassName} {...extraProps}>{children}</Button>;
};

export default InputGroupButton;
