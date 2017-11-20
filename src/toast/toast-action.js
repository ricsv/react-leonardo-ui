import React from 'react';

const ToastAction = ({ className, children, ...extraProps }) => {
  const finalClassName = `lui-toast__aside ${className}`.trim();
  return (
    <div className={finalClassName} {...extraProps}>
      {children}
    </div>
  );
};

export default ToastAction;

