import React from 'react';

const ListItem = ({ className = '', children, ...extraProps }) => {
  const finalClassName = `lui-list__item  ${className}`.trim();
  return (
    <li className={finalClassName} {...extraProps}>
      {children}
    </li>
  );
};

export default ListItem;
