import { PaymentFormSchema } from "../types/PaymentFormSchema";

const API_BASE_URL = "http://localhost:3001";

interface ApiResponse {
  success: boolean;
  message: string;
}

export const sendPaymentData = async (
  data: PaymentFormSchema
): Promise<ApiResponse> => {
  try {
    const expiration = `${data.expirationDateMM.padStart(2, "0")}/${
      data.expirationDateYY
    }`;

    const { expirationDateMM, expirationDateYY, ...requestData } = data;

    const requestBody = {
      ...requestData,
      expiration,
    };

    const response = await fetch(
      `${API_BASE_URL}/payments?access_token=ABCDE12345`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(requestBody),
      }
    );

    if (!response.ok) {
      const errorData = await response.json();
      const errorMessage =
        errorData.message || "Erro no formulário. Verifique os campos.";
      return {
        success: false,
        message: errorMessage,
      };
    }

    const responseData = await response.json();
    const successMessage =
      responseData.message || "Formulário enviado com sucesso!";
    return {
      success: true,
      message: successMessage,
    };
  } catch (error: any) {
    const errorMessage =
      error.message || "Erro desconhecido ao enviar o formulário";
    return {
      success: false,
      message: errorMessage,
    };
  }
};
