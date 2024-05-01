import { Request, Response, NextFunction } from "express";
import { clientErrorResponse, DataOrError } from "../utils/appResponses.js";

export const authMiddleware = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const access_token = req.query.access_token as string;

    if (!access_token) {
      return res.status(401).json({ error: "Token de acesso não fornecido" });
    }

    const tokenEsperado = "ABCDE12345";
    if (access_token !== tokenEsperado) {
      return res.status(401).json({ error: "Token de acesso inválido" });
    }

    next();
  } catch (error) {
    if (error instanceof Error) {
      return clientErrorResponse(res, error);
    } else {
      return clientErrorResponse(res, { message: "Erro desconhecido" } as DataOrError);
    }
  }
};
