import axios from 'axios';

export const useResultsController = () => {
  // Obtener respuestas del backend
  const fetchResults = async (formId) => {
    try {
      const response = await axios.get(
        `${process.env.REACT_APP_BACKEND_URL}/responses/${formId}`
      );
      return response.data;
    } catch (error) {
      console.error('Error al obtener resultados:', error);
      throw new Error('No se pudieron obtener los resultados.');
    }
  };

  return {
    fetchResults,
  };
};
