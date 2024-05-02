import React from "react";
import Label from "@/app/components/atoms/Label";
import Button from "@/app/components/atoms/Button";
import CustomSelect from "@/app/components/atoms/CustomSelect";
import InputTextForm from "@/app/components/atoms/InputTextForm";
import LineSvg from "@/app/icons/line.svg";
import CheckSvg from "@/app/icons/check.svg";
import ExpirationSvg from "@/app/icons/expiration-line.svg";
import InformationIconSvg from "@/app/icons/information.svg";
import { useForm } from "react-hook-form";
import {
  PaymentFormSchema,
  paymentFormSchema,
} from "@/app/types/PaymentFormSchema";
import { zodResolver } from "@hookform/resolvers/zod";
import { sendPaymentData } from "@/app/services/apiService";

interface PaymentFormProps {
  onCancelOrder: () => void;
}

const PaymentForm: React.FC<PaymentFormProps> = ({ onCancelOrder }) => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<PaymentFormSchema>({
    resolver: zodResolver(paymentFormSchema),
  });

  const onSubmit = async (data: any) => {
    const result = await sendPaymentData(data);

    alert(result.message);

    if (result.success) {
      console.log("Success");
      reset();
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}> 
          <div className="flex flex-row items-center text-center justify-center gap-2">
        <button
          className="text-b600 text-[20px] font-medium"
          onClick={onCancelOrder}
        >
          Shipping
        </button>
        <LineSvg />
        <CheckSvg />
        <LineSvg />
        <span className="text-b600 text-[20px] font-medium">Payment</span>
      </div>
      <br />
      <Label text="Payment Details" variant="primary" />
      <br />
      <br />
      <div className="flex flex-row justify-between items-center">
        <div className="mt-5">
          <Label text="Use saved card" variant="tertiary" />
        </div>
        <CustomSelect
          options={[
            {
              label: "Mastercard ending 234",
              value: "mastercard ending 234",
            },
          ]}
          register={register("savedCard", { required: true })}
        />
      </div>
      <br />
      <Label text="Name on card" variant="quaternary" />
      <InputTextForm
        label="nameOnCard"
        placeholder="Enter Name on Card"
        register={register("nameOnCard")}
        error={errors.nameOnCard !== undefined}
      />

      {errors.nameOnCard && (
        <span className="text-red-500">{errors.nameOnCard.message}</span>
      )}
      <br />
      <Label text="Card number" variant="quaternary" />
      <InputTextForm
        label="cardNumber"
        placeholder="Enter Card number"
        register={register("cardNumber")}
        error={errors.cardNumber !== undefined}
      />
      {errors.cardNumber && (
        <span className="text-red-500">{errors.cardNumber.message}</span>
      )}
      <br />
      <div className="grid grid-flow-row-dense grid-cols-7 gap-6">
        <div className="col-span-3 p-0 flex flex-col">
          <Label text="Expiration" variant="quaternary" />
          <div className="flex flex-row items-center text-center justify-start gap-2">
            <InputTextForm
              label="expirationDateMM"
              placeholder="MM"
              register={register("expirationDateMM")}
              error={errors.expirationDateMM !== undefined}
            />
            <div className="flex mt-3 mr-0">
              <ExpirationSvg />
            </div>
            <InputTextForm
              label="expirationDateYY"
              placeholder="YY"
              register={register("expirationDateYY")}
              error={errors.expirationDateYY !== undefined}
            />
          </div>
          {errors.expirationDateYY && !errors.expirationDateMM && (
            <span className="text-red-500">
              {errors.expirationDateYY.message}
            </span>
          )}
          {errors.expirationDateMM && (
            <span className="text-red-500">
              {errors.expirationDateMM.message}
            </span>
          )}
        </div>

        <div className="col-span-4 flex-col">
          <div className="flex">
            <Label text="CVC" variant="quaternary" />
            <InformationIconSvg className="ml-3 mt-[-1]" />
          </div>
          <div>
            <InputTextForm
              label="cvc"
              placeholder="000"
              register={register("cvc")}
              error={errors.cvc !== undefined}
              className="pt-0"
            />
          </div>
          {errors.cvc && (
            <span className="text-red-500">{errors.cvc.message}</span>
          )}
        </div>
      </div>

      <br />

      <hr className="border-t-1 border-gray-300" />

      <br />

      <div className="flex justify-end">
        <Button
          label="Cancel Order"
          variant="secondary"
          onClick={onCancelOrder}
        />

        <Button
          label="Complete order"
          variant="primary"
        />
      </div>
    </form>
  );
};

export default PaymentForm;
