import { body } from "express-validator";
import { isValid, parse, getYear } from "date-fns";

export const paymentRequestValidator = () => {
  return [
    body("nameOnCard")
      .trim()
      .isLength({ min: 2, max: 50 })
      .withMessage("O nome no cartão deve ter entre 2 e 50 caracteres"),

    body("cardNumber")
      .trim()
      .isNumeric()
      .withMessage("Deve conter apenas números")
      .isLength({ min: 15, max: 16 })
      .withMessage("Numero de cartão invalido"),

      body("expiration")
      .trim()
      .custom((value: string) => {
        const [monthStr, yearStr] = value.split("/");
        const month = parseInt(monthStr, 10);
        const year = parseInt(yearStr, 10);
        const currentDate = new Date();
        const currentYear = currentDate.getFullYear() % 100;
        
        if (month < 1 || month > 12) {
          throw new Error("O mês de expiração deve estar entre 01 e 12");
        }
        if (year < currentYear || (year === currentYear && month < currentDate.getMonth() + 1)) {
          throw new Error("A data de expiração deve ser uma data futura");
        }
    
        return true;
      })
      .withMessage("A data de expiração deve estar no formato MM/YY e ser uma data futura"),
    
    body("cvc")
      .trim()
      .isNumeric()
      .withMessage("CVC deve conter apenas números")
      .isLength({ min: 3, max: 4 })
      .withMessage("O CVC deve ter 3 ou 4 caracteres numéricos"),
  ];
};
