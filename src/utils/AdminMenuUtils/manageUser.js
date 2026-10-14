import { toast } from 'react-hot-toast';

// Expresión regular para validar la contraseña
const passwordRegex = /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[!@#$%^&*]).{8,}$/;

// Simula la eliminación de un usuario
export const deleteUser = (userId) => {
  if (userId) {
    toast.success(`Simulating deletion of user with ID: ${userId}.`)
    // Aquí se integrará el backend para eliminar el usuario
  } else {
    toast.error("No valid user ID provided for deletion.");
  }
};

// Simula el cambio de contraseña de un usuario
export const renameUser = (userId, newPassword) => {
  if (userId && newPassword) {
    // Validar que la nueva contraseña cumpla con los requisitos
    if (passwordRegex.test(newPassword)) {
      toast.success(`Simulating the password change of the user with ID: ${userId}. New password: ${newPassword}`);
      // Aquí se integrará el backend para actualizar la contraseña del usuario
    } else {
      toast.error("The new password does not meet the required criteria. It must be at least 8 characters long, contain a mix of uppercase, lowercase, a number, and a special character.");
    }
  } else {
    toast.error("Parameters to change the password (user ID or new password) are missing.");
  }
};
