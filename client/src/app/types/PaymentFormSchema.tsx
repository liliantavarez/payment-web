import { z } from "zod";

export const paymentFormSchema = z.object({
  nameOnCard: z.string().min(3, "Nome no cartão: mínimo 3 caracteres"),
  cardNumber: z.string().regex(/^\d{15,16}$/, "Número do cartão: 15-16 dígitos"),
  expirationDateMM: z.string().regex(/^(0[1-9]|1[0-2])$/, "Mês de expiração: 01-12"),
  expirationDateYY: z.string().regex(/^\d{2}$/, "Ano de expiração: 2 dígitos"),
  cvc: z.string().regex(/^\d{3,4}$/, "CVC: 3-4 dígitos"),
  savedCard: z.string().optional(),
});

export type PaymentFormSchema = z.infer<typeof paymentFormSchema>;