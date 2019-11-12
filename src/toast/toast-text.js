import React from 'react';

const ToastText = ({ className = '', children, ...extraProps }) => {
  const finalClassName = `lui-toast__text ${className}`.trim();
  return (
    <div className={finalClassName} {...extraProps}>
      {children}
    </div>
  );
};

export default ToastText;
