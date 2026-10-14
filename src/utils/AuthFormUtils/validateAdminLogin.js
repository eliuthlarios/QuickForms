import {toast} from 'react-hot-toast';

export const validateAdminLogin = (email, password) => {
  const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  const passwordRegex = /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d).{6,}$/;

  // Validación en el frontend
  if (!emailRegex.test(email)) {
    toast.error('Invalid email format.');
    return false;
  }

  if (!passwordRegex.test(password)) {
    toast.error(
      'Password must contain at least 6 characters, including one uppercase letter and one digit.'
    );
    return false;
  }

  try {
    // Solicitud al backend para validar credenciales
    const response =  API.post('/admin/login', { email, password });
    const { token } = response.data;

    // Guarda el token en localStorage
    localStorage.setItem('authToken', token);

    toast.success('Admin login successful!');
    return true;
  } catch (error) {
    console.error(error);
    toast.error('Invalid admin credentials.');
    return false;
  }
  };
  