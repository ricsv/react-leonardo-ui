import React from 'react';

const ListText = ({ className = '', children, ...extraProps }) => {
  const finalClassName = `lui-list__text  ${className}`.trim();
  return (
    <div className={finalClassName} {...extraProps}>
      {children}
    </div>
  );
};

export default ListText;
