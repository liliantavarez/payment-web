import { Router } from "express";

const router = Router();

router.get("/", (_, res) => res.json({ message: "Bem vindo a API payment-web" }));
router.get("*", (_, res) => res.json({ message: "Rota não encontrada" }));
export { router };
