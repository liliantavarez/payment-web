import React from "react";
import { UseFormRegister, UseFormRegisterReturn } from "react-hook-form";
import classNames from "classnames";

type InputProps = {
  label: string;
  placeholder?: string;
  register?: UseFormRegisterReturn;
  error?: boolean;
  onFocus?: () => void;
  onBlur?: () => void;
  className?: string; 
};

const InputTextForm: React.FC<InputProps> = ({
  placeholder,
  register,
  error,
  className,
}) => {
  return (
    <div className="relative">
      <div
        className={classNames(
          "flex items-center justify-between rounded-lg pt-4",
          className
        )}
      >
        <input
          type="text"
          {...register}
          placeholder={placeholder}
          className={`w-full bg-c300 text-b800 rounded-lg px-4 py-4 
                          focus:outline-none focus:ring-2 ${
                            error ? "focus:ring-red-500" : "focus:ring-blue-500"
                          }`}
        />
      </div>
    </div>
  );
};

export default InputTextForm;
