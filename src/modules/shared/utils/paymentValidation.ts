import { PaymentDTO } from "../../payment/dtos/PaymentDTO";

export function validarPagamento(payment: PaymentDTO): string | null {
  const cardDigits = payment.cardNumber.replace(/\s/g, "");
  if (/^(\d)\1+$/.test(cardDigits)) {
    return "Pagamento recusado";
  }

  const today = new Date();
  const currentMonth = today.getMonth() + 1;
  const currentYear = today.getFullYear();
  const [expMonth, expYear] = payment.expiration.split("/").map(Number);

  if (expYear < currentYear || (expYear === currentYear && expMonth < currentMonth)) {
    return "Cartão expirado ou data de expiração inválida";
  }

  return null;
}
