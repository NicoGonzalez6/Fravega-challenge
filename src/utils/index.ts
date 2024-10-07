import axios from "axios";

/**
 * Serializes Axios errors into a user-friendly message. this is a very basic implementation
 *
 * @param {unknown} error - The error object to serialize.
 * @returns {string} A user-friendly error message.
 */
export const serializeAxiosError = (error: unknown): string => {
  if (axios.isAxiosError(error)) {
    const { response, request, message } = error;
    if (response) {
      return `Error ${response.status}: ${response.data.message || "Ocurrió un error en el servidor."}`;
    }
    if (request) {
      return "Error: No se recibió respuesta del servidor. Verifica tu conexión.";
    }
    return `Error: ${message}`;
  }

  return "Error: Ocurrió un error desconocido.";
};
