//Este archivo puede ser modificado mas adelante para conectarla al backend


import { useNavigate } from 'react-router-dom';

const useLogout = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem('authToken'); 
    navigate('/');
  };

  return { handleLogout };
};

export default useLogout;
