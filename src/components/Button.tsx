import React from 'react';

interface ButtonProps {
  title: string;
  className: string;
  disabled?: boolean;
  type: string;
  onClick?: () => void;
}

const SIZE = {
  xs: 'w-xs h-10',
};

const Button: React.FC<ButtonProps> = ({
  title,
  className,
  disabled = false,
  type,
  onClick,
}: ButtonProps) => {
  return (
    <button
      type={type as 'button' | 'submit' | 'reset'}
      className={`w-md h-10 text-white bg-purple-600 rounded-2xl m-2 hover:bg-purple-400 cursor-pointer transition-opacity shadow-2xl ${className}`}
      disabled={disabled}
      onClick={onClick}
    >
      {title}
    </button>
  );
};

export default Button;

