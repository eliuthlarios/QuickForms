import { clearForm } from './clearForm.js';

/**
 * Alterna el estado de visibilidad de la contraseña.
 * @param {Function} setShowPassword - Setter del estado de visibilidad.
 */

export const toggleForm = (isSignUp, setIsSignUp, setEmail, setPassword, setName) => {
  setIsSignUp(!isSignUp);
  clearForm(setEmail, setPassword, setName);
};

export const togglePasswordVisibility = (setShowPassword) => {
  setShowPassword((prev) => !prev);
};
