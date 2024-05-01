import { model, Schema } from "mongoose";
import { PaymentEntity } from "../modules/payment/entities/PaymentEntity.js";
import { paymentSchemaSettings } from "./settings/paymentSchemaSettings.js";

const PaymentSchema = new Schema<PaymentEntity>(paymentSchemaSettings);

const PaymentModel = model<PaymentEntity>("payment", PaymentSchema, "payments");

export { PaymentModel };
