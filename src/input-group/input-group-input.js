import React from 'react';

import Input from '../input';

const InputGroupInput = ({ className = '', ...extraProps }) => {
  const finalClassName = `lui-input-group__item  lui-input-group__input  ${className}`.trim();
  return <Input className={finalClassName} {...extraProps} />;
};

export default InputGroupInput;
