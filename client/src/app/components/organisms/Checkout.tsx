"use client";
import React, { useState } from "react";
import OrderSummary from "@/app/components/molecules/OrderSummary";
import PaymentForm from "../molecules/PaymentForm";
import ShippingForm from "../molecules/ShippingForm";

export default function Checkout() {
  const [showPaymentForm, setShowPaymentForm] = useState(false);

  const handlePaymentButtonClick = () => {
    setShowPaymentForm(true);
  };

  const handleCancelOrder = () => {
    setShowPaymentForm(false);
  };

  return (
    <div className="grid grid-flow-row-dense gap-5 md:gap-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-7">
      <div className="bg-[#f6fafd] p-5 md:p-10 lg:px-20 lg:py-10 rounded-lg lg:col-span-4 col-span-1 md:col-span-1">
        {showPaymentForm ? (
          <PaymentForm onCancelOrder={handleCancelOrder} />
        ) : (
          <ShippingForm onPayment={handlePaymentButtonClick} />
        )}
      </div>

      <div className="bg-[#f6fafd] p-5 md:p-10 lg:p-10 rounded-lg lg:col-span-3 col-span-1 md:col-span-1">
        <OrderSummary />
      </div>
    </div>
  );
}
