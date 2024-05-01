import { PaymentEntity } from "./../entities/PaymentEntity";

export interface PaymentRepository {
  create(payment: PaymentEntity): Promise<PaymentEntity>;
}
