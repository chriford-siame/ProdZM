import { useState } from "react";
import { useContext } from "react";
import { login, logout } from "../api/auth";
import { AppContext } from "../context/app_context";

export const useAuth = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(!!localStorage.getItem("access_token"));
  const appContext = useContext(AppContext);
    if (!appContext) {
      throw new Error('component must be wrapped in a provider');
    }

  const {setUser} = appContext;

  const handleLogin = async (username: string, password: string) => {
    try {
      await login(username, password);
      setIsAuthenticated(true);
      
    } catch (error) {
      console.error("Login failed", error);
      throw error;
    }
  };

  const handleLogout = () => {
    logout();
    setIsAuthenticated(false);
  };

  return { isAuthenticated, handleLogin, handleLogout };
};
