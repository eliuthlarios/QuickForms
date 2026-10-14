import { toast } from 'react-hot-toast';

const handleRegistration = (name, email, password, navigate) => {
  // Validaciones en el frontend
  const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  const passwordRegex = /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[!@#$%^&*]).{8,}$/;

  if (!name || name.length < 4) {
    toast.error('Name should be at least 4 characters long.');
    return;
  }

  if (!email || !emailRegex.test(email)) {
    toast.error('Please enter a valid email address.');
    return;
  }

  if (!password || !passwordRegex.test(password)) {
    toast.error('Password must be at least 8 characters long and contain at least one uppercase letter, one number, and one special character.');
    return;
  }

  // Simulación de registro exitoso (Backend)
  // En un entorno real, aquí se realizaría una solicitud HTTP POST al endpoint de registro.
  toast.success('User registered successfully!');
  localStorage.setItem('authToken', 'registrationToken'); // Simula un token de registro
  navigate('/dashboard');
};

export default handleRegistration;
