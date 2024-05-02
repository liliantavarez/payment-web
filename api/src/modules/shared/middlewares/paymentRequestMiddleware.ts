import { validationResult, ValidationError } from "express-validator";
import { Request, Response, NextFunction } from "express";

interface ApiResponse {
  message: string;
}

export const paymentRequestMiddleware = async (req: Request, res: Response, next: NextFunction) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    const firstError = errors.array()[0];
    const errorMessage: ApiResponse = { message: firstError.msg };
    return res.status(400).json(errorMessage);
  }

  next();
};
