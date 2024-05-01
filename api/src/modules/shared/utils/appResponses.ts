import { Response } from "express";

export type DataOrError = { message: string } | Error;

export const createdResponse = (res: Response, data: any, status: number = 201) => {
  return res.status(status).json(data);
};

export const clientErrorResponse = (res: Response, error: DataOrError, status: number = 400) => {
  return res.status(status).json({
    message: error instanceof Error ? error.message : error,
  });
};

export const serverErrorResponse = (res: Response, error: DataOrError, status: number = 500) => {
  return res.status(status).json({
    message: error instanceof Error ? error.message : error,
  });
};
