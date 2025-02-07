import React from "react";


interface InputProps {
    type: string;
    placeholder: string;
    value?: string;
    className: string;
    onChange: (event: React.FormEvent<HTMLInputElement>) => void;
}

export const Input: React.FC<InputProps> = ({ type, placeholder, className, value,onChange }: InputProps) => {
    return (
        <input
            type={type}
            placeholder={placeholder}
            className={`w-md h-10 rounded-xl m-5 p-5 ${className}`}
            onChange={onChange}
            value={onChange}
        />
    );
};