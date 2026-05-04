import React from 'react';
import './DocumentStats.css';

/**
 * DocumentStats component
 * 
 * @param {Object} props
 * @param {string} [props.className] - Optional custom class name
 * @param {React.ReactNode} [props.children] - Component children
 */
export const DocumentStats = ({ className = '', children, ...props }) => {
  return (
    <div className={`document-stats ${className}`} {...props}>
      {children}
    </div>
  );
};
