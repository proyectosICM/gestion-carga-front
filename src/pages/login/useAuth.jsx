import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { base, loginURL } from "../../api/apiurls";

export const useAuth = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  const axiosInstance = axios.create({
    baseURL: base,
    withCredentials: true,
  });

  const login = async (username, password) => {
    setIsLoading(true);
    setError(null);
    try {
      const response = await axiosInstance.post(loginURL, {
        username,
        password,
      });
      localStorage.setItem("token", response.data.token);
      localStorage.setItem("username", username);
      navigate("/redirect", { state: { username } });
    } catch (error) {
      setError("Error en la autenticación");
      console.error(error);
    } finally {
      setIsLoading(false);
    }
  };

  return { login, isLoading, error };
};