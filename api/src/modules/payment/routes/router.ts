import { Router } from "express";
import { paymentRouter } from "./payments/paymentsRoutes.js";

const router = Router();

router.get("/", (_, res) => res.json({ message: "Bem vindo a API payment-web" }));
router.use("/payments", paymentRouter);
router.get("*", (_, res) => res.json({ message: "Rota não encontrada" }));

export { router };
