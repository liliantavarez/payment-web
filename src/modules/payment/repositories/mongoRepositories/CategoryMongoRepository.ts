import { PaymentEntity } from "./../../entities/PaymentEntity.js";
import { PaymentModel } from "../../../../models/PaymentModel.js";
import { PaymentRepository } from "../PaymentRepository.js";
export class PaymentMongoRepository implements PaymentRepository {
  database = PaymentModel;

  async create(category: PaymentEntity): Promise<PaymentEntity> {
    return this.database.create(category);
  }
}
