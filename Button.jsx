import React from 'react';
import './Button.css';

/**
 * Reusable Button Component
 * @param {string} variant - Button style variant: 'primary', 'secondary', 'outline', 'danger'
 * @param {string} size - Button size: 'small', 'medium', 'large'
 * @param {boolean} disabled - Whether the button is disabled
 * @param {string} type - Button type: 'button', 'submit', 'reset'
 * @param {function} onClick - Click handler function
 * @param {React.ReactNode} children - Button content
 * @param {string} className - Additional CSS classes
 */
const Button = ({
  variant = 'primary',
  size = 'medium',
  disabled = false,
  type = 'button',
  onClick,
  children,
  className = '',
  ...props
}) => {
  // Validate variant prop
  const validVariants = ['primary', 'secondary', 'outline', 'danger'];
  const validSizes = ['small', 'medium', 'large'];
  const validTypes = ['button', 'submit', 'reset'];
  
  const safeVariant = validVariants.includes(variant) ? variant : 'primary';
  const safeSize = validSizes.includes(size) ? size : 'medium';
  const safeType = validTypes.includes(type) ? type : 'button';

  const buttonClasses = `btn btn-${safeVariant} btn-${safeSize} ${className}`.trim();

  // Safe click handler
  const handleClick = (e) => {
    if (disabled) {
      e.preventDefault();
      return;
    }
    if (onClick && typeof onClick === 'function') {
      try {
        onClick(e);
      } catch (error) {
        console.error('Button onClick error:', error);
      }
    }
  };

  return (
    <button
      type={safeType}
      className={buttonClasses}
      disabled={disabled}
      onClick={handleClick}
      aria-disabled={disabled}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;
