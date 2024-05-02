import Label from "@/app/components/atoms/Label";
import NumberPicker from "@/app/components/molecules/NumberPicker";

import Image from "next/image";
import GiftCard from "./GiftCard";

export default function OrderSummary() {
  return (
    <>
      <Label text="Order Summary" variant="primary" />
      <Image
        className="py-4"
        src="/phone.svg"
        width={0}
        height={0}
        sizes="100vw"
        style={{ width: "100%", height: "auto" }}
        priority={true}
        alt="Sony wireless headphones"
      />

      <div className="pb-5 flex flex-row justify-between">
        <Label text="Sony wireless headphones" variant="primary" />
        <NumberPicker initialValue={1} min={1} max={10}></NumberPicker>
      </div>

      <Label  text="£320.45" variant="bold" />

      <GiftCard />

      <div className="flex flex-row justify-between">
        <Label className="pb-5" text="Sub total" variant="secondary" />
        <Label className="pb-5" text="£316.55" variant="price" />
      </div>

      <div className="flex flex-row justify-between">
        <Label className="pb-5" text="Tax" variant="secondary" />
        <Label className="pb-5" text="£3.45" variant="price" />
      </div>

      <div className="flex flex-row justify-between">
        <Label className="pb-5" text="Shipping" variant="secondary" />
        <Label className="pb-5" text="Free" variant="green" />
      </div>

      <div className="flex flex-row justify-between">
        <Label className="pb-5" text="Total" variant="bold" />
        <Label className="pb-5" text="£320.45" variant="price" />
      </div>
    </>
  );
}
