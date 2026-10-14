import API from './api';
import { toast } from 'react-hot-toast';

export const handleLogin = async (email, password, navigate) => {
  const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

  if (!email || !emailRegex.test(email)) {
    toast.error("Please enter a valid email address.");
    return;
  }

  if (!password) {
    toast.error("Password is required.");
    return;
  }

  try {
    const response = await API.post('/user/login', { email, password });
    const { token } = response.data;

    localStorage.setItem('authToken', token);
    toast.success("User logged in successfully!");
    navigate('/dashboard');
  } catch (error) {
    console.error(error);
    toast.error("Login failed.");
  }
};

export const handleRegistration = async (name, email, password, navigate) => {
  const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

  if (!name || !email || !password || !emailRegex.test(email)) {
    toast.error("Please provide valid registration details.");
    return;
  }

  try {
    const response = await API.post('/user/signup', {
      username: name,
      email,
      password,
    });
    const { token } = response.data;

    localStorage.setItem('authToken', token);
    toast.success("User registered successfully!");
    navigate('/dashboard');
  } catch (error) {
    console.error(error);
    toast.error("Registration failed.");
  }
};
