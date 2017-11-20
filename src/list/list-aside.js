import React from 'react';

const ListAside = ({ className = '', children, ...extraProps }) => {
  const finalClassName = `lui-list__aside  ${className}`.trim();
  return (
    <div className={finalClassName} {...extraProps}>
      {children}
    </div>
  );
};

export default ListAside;
