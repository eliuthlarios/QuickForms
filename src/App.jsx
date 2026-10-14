import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import AppRoutes from './routes/AppRoutes.jsx';
import { Toaster } from 'react-hot-toast';

const App = () => {
  return (
    <Router>
      <AppRoutes /> {/* Usamos las rutas definidas en AppRoutes.jsx */}
      <Toaster /> {/* Componente global para las notificaciones personalizadas */}
    </Router>
  );
};

export default App;




