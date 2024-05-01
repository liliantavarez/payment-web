import { PaymentEntity } from "../entities/PaymentEntity";
import { PaymentRepository } from "../repositories/PaymentRepository";

export class PaymentService {
  constructor(private readonly repository: PaymentRepository) {}

  async execute(category: PaymentEntity) {
    try {
      const result = await this.repository.create(category);

      return result;
    } catch (error) {
      throw new Error(error as string);
    }
  }
}
