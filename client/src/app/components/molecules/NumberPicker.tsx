"use client";

import React, { useState } from "react";
import DecrementIcon from "@/app/icons/decrement.svg";
import IncrementIcon from "@/app/icons/increment.svg";

interface NumberPickerProps {
  initialValue?: number;
  min?: number;
  max?: number;
}

const NumberPicker: React.FC<NumberPickerProps> = ({
  initialValue = 1,
  min = 0,
  max = 10,
}) => {
  const [value, setValue] = useState(initialValue);

  const increment = () => {
    if (value < max) {
      setValue(value + 1);
    }
  };

  const decrement = () => {
    if (value > min) {
      setValue(value - 1);
    }
  };

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = parseInt(event.target.value);
    if (!isNaN(newValue) && newValue >= min && newValue <= max) {
      setValue(newValue);
    }
  };

  return (
    <div className="flex items-center">
      <button
        className="flex items-center justify-center w-10 h-10  bg-c300 text-black rounded-md"
        onClick={decrement}
      >
        <DecrementIcon />
      </button>
      <input
        type="text"
        value={value}
        onChange={handleChange}
        className="flex text-center w-10 bg-[#f6fafd]"
      />
      <button
        className="flex items-center justify-center  w-10 h-10 bg-c300 text-black rounded-md"
        onClick={increment}
      >
        <IncrementIcon />
      </button>
    </div>
  );
};

export default NumberPicker;
