import { Router } from "express";
import { authMiddleware } from "../../../shared/middlewares/authMiddleware.js";
import { paymentRequestMiddleware } from "../../../shared/middlewares/paymentRequestMiddleware.js";
import { paymentRequestValidator } from "../../../shared/validators/paymentRequestValidator.js";
import { paymentController } from "../../controllers/PaymentController.js";

const paymentRouter = Router();

paymentRouter.post(
  "/",
  authMiddleware,
  paymentRequestValidator(),
  paymentRequestMiddleware,
  paymentController.handler,
);

export { paymentRouter };
