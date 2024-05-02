import React from "react";
import { UseFormRegisterReturn } from "react-hook-form";

interface Option {
  label: string;
  value: string;
}

interface CustomSelectProps {
  options: Option[];
  register?: UseFormRegisterReturn;
}

const CustomSelect: React.FC<CustomSelectProps> = ({ options, register }) => {
  return (
    <div className="relative">
      <div className="flex items-center justify-between rounded-lg pt-4">
        <select
          {...register}
          className="w-full bg-c300 text-b800 rounded-lg pl-4 pr-16 py-4 focus:outline-none focus:ring-2 focus:ring-blue-500 appearance-none"
        >
          {options.map((option, index) => (
            <option key={index} value={option.value}>
              {option.label}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
};

export default CustomSelect;
