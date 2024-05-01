import { Request, Response, NextFunction } from "express";
import { clientErrorResponse, DataOrError } from "../utils/appResponses.js";
import { validationResult } from "express-validator";

export const paymentRequestMiddleware = async (req: Request, res: Response, next: NextFunction) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    const firstError = errors.array()[0];
    const errorMessage: DataOrError = { message: firstError.msg };
    return clientErrorResponse(res, errorMessage);
  }

  next();
};
