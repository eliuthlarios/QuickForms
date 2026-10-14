import React from 'react';
import { Navigate } from 'react-router-dom';

/**
 * Función para validar si el usuario está autenticado.
 * En el futuro, debe realizarse una validación del token con el backend.
 */
const isAuthenticated = () => {
  const token = localStorage.getItem('authToken');
  // Devuelve true si el token existe y no está vacío
  return Boolean(token);
};

const ProtectedRoute = ({ children }) => {
  // Verifica autenticación
  const authenticated = isAuthenticated();

  if (!authenticated) {
    console.warn('Acceso denegado. Redirigiendo al inicio...');
    return <Navigate to="/" replace />;
  }

  console.log('Acceso permitido. Renderizando contenido protegido.');
  return children;
};

export default ProtectedRoute;
