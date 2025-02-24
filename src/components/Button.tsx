import React from 'react';

interface ButtonProps {
  children: string;
  className: string;
  disabled?: boolean;
  type: 'submit' | 'button' | 'reset';
  onClick?: () => void;
}

const Button: React.FC<ButtonProps> = ({
  children,
  className,
  disabled = false,
  type,
  onClick,
}: ButtonProps) => {
  return (
    <button
      type={type as 'button' | 'submit' | 'reset'}
      className={`h-10 cursor-pointer transition-opacity shadow-2xl ${className}`}
      disabled={disabled}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default Button;

