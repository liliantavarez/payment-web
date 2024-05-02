// ShippingForm.jsx
import React from "react";
import Label from "@/app/components/atoms/Label";
import Button from "@/app/components/atoms/Button";
import CustomSelect from "@/app/components/atoms/CustomSelect";
import InputTextForm from "@/app/components/atoms/InputTextForm";
import LineSvg from "@/app/icons//line.svg";
import CheckSvg from "@/app/icons//check.svg";

interface ShippingFormProps {
  onPayment: () => void;
}

const ShippingForm: React.FC<ShippingFormProps> = ({ onPayment }) => {

  const handlePaymentClick = () => {
    if (onPayment) {
      onPayment();
    }
  };

  return (
    <div>
      <div className="flex flex-row items-center text-center justify-center gap-2">
        <span className="text-b600 text-[20px] font-medium">Shipping</span>
        <LineSvg />
        <CheckSvg />
        <LineSvg />
        <span className="text-[#828282] text-[20px] font-medium">Payment</span>
      </div>
      <br />
      <Label text="Shipping Details" variant="primary" />
      <br />
      <br />
      <div className="flex flex-row justify-between items-center">
        <div className="mt-5">
          <Label text="Use saved address" variant="tertiary" />
        </div>
        <CustomSelect
          options={[{ label: "123, Electric avenue", value: "1" }]}
        />
      </div>
      <br />
      <Label text="First line of address" variant="quaternary" />
      <InputTextForm label="address" placeholder="Enter your Address" />
      <br />
      <Label text="Street name" variant="quaternary" />
      <InputTextForm label="streetName" placeholder="Enter your Street name" />
      <br />
      <div className="grid grid-flow-row-dense grid-cols-7 gap-8">
        <div className="col-span-3">
          <Label text="Postcode" variant="quaternary" />
          <InputTextForm
            label="postcode"
            placeholder="Enter your Street name"
          />
        </div>

        <div className="col-span-4">
          <Label text="Select shipping" variant="quaternary" />

          <CustomSelect options={[{ label: "Free delivery", value: "1" }]} />
        </div>
      </div>

      <br />

      <hr className="border-t-1 border-gray-300" />
      <br />

      <div className="flex justify-end">
        <Button label="Cancel Order" variant="secondary" />
        <Button
          label="Payment"
          variant="primary"
          onClick={handlePaymentClick}
        />
      </div>
    </div>
  );
};

export default ShippingForm;
