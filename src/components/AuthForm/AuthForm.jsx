import React, { useState } from 'react';
import {
  Box,
  Button,
  TextField,
  Typography,
  IconButton,
  InputAdornment,
} from '@mui/material';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import BuildIcon from '@mui/icons-material/Build';
import PersonIcon from '@mui/icons-material/Person';
import './AuthForm.css';
import handleRegistration from '../../utils/AuthFormUtils/handleRegistration.js';
import handleLogin from '../../utils/AuthFormUtils/handleLogin.js';
import handleAdminLogin from '../../utils/AuthFormUtils/handleAdminLogin.js';
import { Toaster } from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';

const AuthForm = () => {
  const [isSignUp, setIsSignUp] = useState(true);
  const [showPassword, setShowPassword] = useState(false);
  const [showAdminForm, setShowAdminForm] = useState(false); // Estado para alternar entre formularios(usuarios,administrador)
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');

  const navigate = useNavigate();

  const handleFormSubmit = (e) => {
    e.preventDefault();

    if (showAdminForm) {
      // Lógica para administradores
      handleAdminLogin(email, password, navigate);
    } else if ((isSignUp) && (!showAdminForm) ) {
      // Lógica para registro de usuarios
      handleRegistration(name, email, password, navigate);
    } else if ((!isSignUp) && (!showAdminForm)){
      // Lógica para inicio de sesión de usuarios
      handleLogin(email, password, navigate);
    }
  };

  const handleToggleForm = () => {
    setShowAdminForm((prev) => !prev);
    setEmail('');
    setPassword('');
    setName('');
    setShowPassword(false);
  };

  return (
    <>
      <Toaster />

      <Box className="auth-form-container">

        {/* Formulario de Usuario */}
        <Box
          className={`auth-form ${showAdminForm ? 'slide-out' : 'slide-in'}`}
          component="form"
          onSubmit={handleFormSubmit}
        >
          <IconButton className="admin-switch-btn" onClick={handleToggleForm}>
            {showAdminForm ? <PersonIcon /> : <BuildIcon />}
          </IconButton>
          <Typography variant="h5" className="auth-title">
            {isSignUp ? 'SIGN UP HERE!' : 'LOG IN HERE!'}
          </Typography>

          {isSignUp && (
            <TextField
              label="Name"
              variant="outlined"
              fullWidth
              margin="normal"
              className="auth-input"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
          )}
          <TextField
            label="Email"
            type="email"
            variant="outlined"
            fullWidth
            margin="normal"
            className="auth-input"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <TextField
            label="Password"
            type={showPassword ? 'text' : 'password'}
            variant="outlined"
            fullWidth
            margin="normal"
            className="auth-input"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            InputProps={{
              endAdornment: (
                <InputAdornment position="end">
                  <IconButton
                    onClick={() => setShowPassword((prev) => !prev)}
                    edge="end"
                  >
                    {showPassword ? <VisibilityOff /> : <Visibility />}
                  </IconButton>
                </InputAdornment>
              ),
            }}
          />
          <Button
            variant="contained"
            fullWidth
            className="auth-button"
            sx={{ marginTop: 2 }}
            type="submit"
          >
            {isSignUp ? 'Sign up' : 'Log in'}
          </Button>
          <Button
            variant="text"
            fullWidth
            className="toggle-button"
            sx={{ marginTop: 1 }}
            onClick={() => {
              setIsSignUp((prev) => !prev);
              setEmail('');
              setPassword('');
              setName('');
              setShowPassword(false);
            }}
          >
            {isSignUp ? 'Log in' : 'Sign up'}
          </Button>
        </Box>


        {/* Formulario de Administrador */}
        <Box
          className={`auth-form ${!showAdminForm ? 'slide-out' : 'slide-in'}`}
          component="form"
          onSubmit={handleFormSubmit}
        >
          <IconButton className="admin-switch-btn" onClick={handleToggleForm}>
            {showAdminForm ? <PersonIcon /> : <BuildIcon />}
          </IconButton>
          <Typography variant="h5" className="auth-title">
            ADMIN LOGIN
          </Typography>
          <TextField
            label="Admin Email"
            type="email"
            variant="outlined"
            fullWidth
            margin="normal"
            className="auth-input"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <TextField
            label="Admin Password"
            type={showPassword ? 'text' : 'password'}
            variant="outlined"
            fullWidth
            margin="normal"
            className="auth-input"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            InputProps={{
              endAdornment: (
                <InputAdornment position="end">
                  <IconButton onClick={() => setShowPassword((prev) => !prev)} edge="end">
                    {showPassword ? <VisibilityOff /> : <Visibility />}
                  </IconButton>
                </InputAdornment>
              ),
            }}
          />
          <Button
            variant="contained"
            fullWidth
            className="auth-button"
            sx={{ marginTop: 2 }}
            type="submit"
          >
            Login as Admin
          </Button>
        </Box>

      </Box>
    </>
  );
};

export default AuthForm;


