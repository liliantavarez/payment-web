export const paymentSchemaSettings = {
  nameOnCard: { type: String, required: true },
  cardNumber: { type: String, required: true },
  expiration: { type: String, required: true },
  cvc: { type: String, required: true },
};
