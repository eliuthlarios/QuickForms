//La logica sera reemplazada por la del backend mas adelante
import API from '../API/api';

import {toast} from 'react-hot-toast';

const handleAdminLogin = (email, password, navigate) => {
    // Simulación de validaciones de backend para administrador
  
    // Validaciones de frontend
    if (!email || !password) {
      toast.error('Email and password are required')
      return;
    }
  
    // Validaciones simuladas de backend (por el momento simuladas)
    if (email === mockAdminData.email && password === mockAdminData.password) {
      toast.success('Admin login successful')
      navigate('/admin'); 
    } else {
      toast.error('Invalid admin credentials');
    }
  };
  
  export default handleAdminLogin;
  