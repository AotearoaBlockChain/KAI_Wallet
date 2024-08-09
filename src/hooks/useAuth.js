// hooks/useAuth.js
import { useState } from 'react';
import { loginUser, registerUser } from '../services/authService';

const useAuth = () => {
  const [user, setUser] = useState(null);

  const login = async (credentials) => {
    try {
      const data = await loginUser(credentials);
      setUser(data.user);
    } catch (error) {
      console.error(error.message);
    }
  };

  const register = async (userData) => {
    try {
      const data = await registerUser(userData);
      setUser(data.user);
    } catch (error) {
      console.error(error.message);
    }
  };

  return { user, login, register };
};

export default useAuth;
