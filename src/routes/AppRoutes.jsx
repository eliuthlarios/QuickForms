import React from 'react';
import { Routes, Route } from 'react-router-dom';

import Home from '../pages/Home/Home';
import Contact from '../pages/Contact/Contact.jsx';
import PrivacyPolicy from '../pages/Privacy Policy/PrivacyPolicy.jsx';
import Dashboard from '../pages/MainMenu/Dashboard.jsx';
import QuestionForm from '../pages/question_form/Question_form.jsx'
import ResultPage from '../pages/results_form/ResultsPage.jsx';
import AdminMenu from '../pages/AdminMenu/AdminMenu.jsx';
import ProtectedRoute from './ProtectedRoute'; // Ruta protegida
import Error404 from '../pages/PageNotFound/Error404.jsx';

/**
 * Configuración de rutas de la aplicación.
 * Las rutas se dividen entre públicas y protegidas.
 */
const AppRoutes = () => {
  return (
    <Routes>
      {/* Rutas Públicas */}
      <Route path="/" element={<Home />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/privacy-policy" element={<PrivacyPolicy />} />

      {/* Rutas Protegidas */}
      <Route
        path="/dashboard"
        element={
          <ProtectedRoute>
            <Dashboard />
          </ProtectedRoute>
        }
      />
      <Route
        path="/form/:id"
        element={
          <ProtectedRoute>
            <QuestionForm/>
          </ProtectedRoute>
        }
      />

        <Route
        path="/results/:id"
        element={
          <ProtectedRoute>
            <ResultPage/>
          </ProtectedRoute>
        }
      />

      <Route
      path="/admin"
      element={
        <ProtectedRoute>
          <AdminMenu/>
        </ProtectedRoute>  
      }
    />

      {/* Ruta para manejar páginas no encontradas */}
      <Route path="*" element={<Error404/>} />
    </Routes>
  );
};

export default AppRoutes;
