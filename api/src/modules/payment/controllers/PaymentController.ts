import { Request, Response } from "express";
import { PaymentMongoRepository } from "../repositories/mongoRepositories/CategoryMongoRepository.js";
import { PaymentService } from "../services/PaymentService.js";
import { createdResponse, serverErrorResponse } from "../../shared/utils/appResponses.js";
import { validarPagamento } from "../../shared/utils/paymentValidation.js";

class PaymentController {
  async handler(req: Request, res: Response) {
    try {
      const body = req.body;
      const validationError = validarPagamento(body);
      
      if (validationError) {
        return serverErrorResponse(res, new Error(validationError));
      }
      
      const paymentRepository = new PaymentMongoRepository();
      const paymentService = new PaymentService(paymentRepository);

      const result = await paymentService.execute({
        ...body,
      });

      return createdResponse(res, { data: result });
    } catch (error) {
      return serverErrorResponse(res, error as Error);
    }
  }
}

export const paymentController = new PaymentController();
