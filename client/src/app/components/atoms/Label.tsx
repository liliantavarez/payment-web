import React from "react";
import classNames from "classnames";

type LabelVariant =
  | "primary"
  | "secondary"
  | "tertiary"
  | "quaternary"
  | "bold"
  | "price"
  | "green"
  | "blue";

interface LabelProps {
  text: string;
  variant: LabelVariant;
  className?: string;
}

const Label: React.FC<LabelProps> = ({ text, variant, className }) => {
  const labelClass = classNames(className, {
    "font-inter text-left": true,
    "text-[20px] font-medium leading-[24.2px] text-black":
      variant === "primary",

    "text-[18px] font-medium leading-[21.78px] text-c700":
      variant === "secondary",

    "text-[16px] font-medium leading-[19.36px] text-b800":
      variant === "tertiary",
    "text-[16px] font-medium leading-[19.36px] text-c600":
      variant === "quaternary",

    "text-[20px] font-bold leading-[24.2px] text-black": variant === "bold",

    "text-[20px] font-medium leading-[24.2px] text-b800": variant === "price",

    "text-[20px] font-medium leading-[24.2px] text-v500": variant === "green",

    "text-[20px] font-medium leading-[24.2px] text-b600": variant === "blue",
  });

  return <span className={labelClass}>{text}</span>;
};

export default Label;
