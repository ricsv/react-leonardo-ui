import React from 'react';

const ListHeader = ({ className = '', children, ...extraProps }) => {
  const finalClassName = `lui-list__header  ${className}`.trim();
  return (
    <li className={finalClassName} {...extraProps}>
      {children}
    </li>
  );
};

export default ListHeader;
