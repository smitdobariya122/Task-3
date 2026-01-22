import React from 'react';
import './Card.css';

/**
 * Reusable Card Component
 * @param {React.ReactNode} children - Card content
 * @param {string} title - Card title (optional)
 * @param {string} subtitle - Card subtitle (optional)
 * @param {React.ReactNode} footer - Card footer content (optional)
 * @param {string} className - Additional CSS classes
 * @param {boolean} hoverable - Whether card should have hover effect
 * @param {boolean} shadow - Whether card should have shadow
 */
const Card = ({
  children,
  title,
  subtitle,
  footer,
  className = '',
  hoverable = false,
  shadow = true,
  ...props
}) => {
  const cardClasses = `card ${hoverable ? 'card-hoverable' : ''} ${shadow ? 'card-shadow' : ''} ${className}`.trim();

  return (
    <div className={cardClasses} {...props}>
      {(title || subtitle) && (
        <div className="card-header">
          {title && <h3 className="card-title">{title}</h3>}
          {subtitle && <p className="card-subtitle">{subtitle}</p>}
        </div>
      )}
      <div className="card-body">{children}</div>
      {footer && <div className="card-footer">{footer}</div>}
    </div>
  );
};

export default Card;
