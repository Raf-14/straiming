import { FC } from "react";
import { InputProps } from "../types/interfaces";

    
export const Input: FC<InputProps> = ({ type, name,  placeholder, className, value, onChange }: InputProps) => {
    return (
        <input
            type={type}
            placeholder={placeholder}
            className={`md:w-xl text-zinc-100 w-30 m-5 h-10 rounded-xl md:m-5 p-5 focus:outline-none focus:border focus:border-green-600 ${className}`}
            onChange={onChange}
            value={value}
            name={name}
        />
    );
};
