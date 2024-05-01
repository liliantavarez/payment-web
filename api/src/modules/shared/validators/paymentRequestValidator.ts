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
        const currentYear = getYear(currentDate) % 100;

        if (!isValid(parse(value, "MM/yy", new Date()))) {
          throw new Error("A data de expiração deve estar no formato MM/YY");
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
      .isLength({ min: 3, max: 3 })
      .withMessage("O CVC deve ter exatamente 3 caracteres numéricos"),
  ];
};
