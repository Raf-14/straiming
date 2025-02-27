import { FC } from 'react';
import { ButtonProps } from '../types/interfaces';



const Button: FC<ButtonProps> = ({
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

