import React from "react";

interface InputProps {
    type: string;
    placeholder: string;
    value?: string;
    className: string;
    name: string;
    onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}    
export const Input: React.FC<InputProps> = ({ type, name,  placeholder, className, value, onChange }: InputProps) => {
    return (
        <input
            type={type}
            placeholder={placeholder}
            className={`md:w-xl text-zinc-100 w-50 md:h-10 rounded-xl md:m-5 p-5 focus:outline-none focus:border focus:border-green-600 ${className}`}
            onChange={onChange}
            value={value}
            name={name}
        />
    );
};
