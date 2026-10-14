import API from './api';
import { toast } from 'react-hot-toast';

export const deleteUser = async (userId) => {
  try {
    if (!userId) {
      toast.error("No valid user ID provided for deletion.");
      return;
    }
    const response = await API.delete(`/admin/delete-user/${userId}`);
    toast.success(response.data.message || `User with ID: ${userId} deleted.`);
  } catch (error) {
    console.error(error);
    toast.error("Failed to delete user.");
  }
};

export const ChangeUserPassword = async (userId, newPassword) => {
  const passwordRegex = /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[!@#$%^&*]).{8,}$/;

  if (!userId || !newPassword) {
    toast.error("Missing parameters: user ID or new password.");
    return;
  }

  if (!passwordRegex.test(newPassword)) {
    toast.error("Password does not meet the required criteria.");
    return;
  }

  try {
    const response = await API.patch(`/admin/change-password/${userId}`, {
      newPassword,
    });
    toast.success(response.data.message || "Password updated successfully.");
  } catch (error) {
    console.error(error);
    toast.error("Failed to update password.");
  }
};

export const handleAdminLogin = async (email, password, navigate) => {
  if (!email || !password) {
    toast.error("Email and password are required.");
    return;
  }

  try {
    const response = await API.post('/admin/login', { email, password });
    const { token } = response.data;

    localStorage.setItem('authToken', token);
    toast.success("Admin login successful!");
    navigate('/admin');
  } catch (error) {
    console.error(error);
    toast.error("Invalid admin credentials.");
  }
};

export const listAllUsers = async () => {
    try {
      const response = await API.get('/admin/users');
      toast.success('Users fetched successfully');
      return response.data.users; // Asegúrate de que el backend devuelve los usuarios en `users`
    } catch (error) {
      console.error(error);
      toast.error('Failed to fetch users.');
      return [];
    }
};

