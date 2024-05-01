import { PaymentDTO } from "../../payment/dtos/PaymentDTO";
import { parse } from "date-fns";

export function validarPagamento(payment: PaymentDTO): string | null {
  const cardDigits = payment.cardNumber.replace(/\s/g, "");

  if (/(\d)\1{3}/.test(cardDigits)) {
    return "Pagamento recusado";
  }

  if (/(012|123|234|345|456|567|678|789|890)/.test(cardDigits)) {
    return "Pagamento recusado"; 
  }

  const expirationDate = parse(payment.expiration, "MM/yy", new Date());

  if (expirationDate < new Date()) {
    return "Cartão expirado ou data de expiração inválida";
  }

  return null;
}
