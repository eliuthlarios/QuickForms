import { useNavigate, useLocation } from "react-router-dom";
import axios from 'axios';

// Lógica para manejar la navegación
export const useNavController = () => {
  const navigate = useNavigate();
  const location = useLocation();

  // Maneja los cambios de pestañas en el Nav
  const handleTabChange = (event, newValue) => {
    if (newValue === 0) navigate("/form");
    if (newValue === 1) navigate("/results");
  };

  // Maneja el botón de regresar
  const handleBackClick = () => {
    navigate("/");
  };

  // Verifica si el formulario está guardado en la base de datos
  const checkFormSaved = async (formId) => {
    try {
      const response = await axios.get(
        `${process.env.REACT_APP_BACKEND_URL}/questions/check/${formId}`
      );
      return response.status === 200;
    } catch (error) {
      if (error.response && error.response.status === 404) {
        return false;
      }
      throw new Error('Error verificando el formulario.');
    }
  };

  // Genera un enlace para compartir
  const generateLink = (formId) => {
    return `${window.location.origin}/form/${formId}`;
  };

  return {
    location,
    handleTabChange,
    handleBackClick,
    checkFormSaved,
    generateLink
  };
};
