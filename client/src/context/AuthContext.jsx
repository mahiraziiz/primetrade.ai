import React, { createContext, useState, useEffect } from "react";
import { authAPI } from "../api/api";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Check if user is already logged in on mount
  useEffect(() => {
    const checkAuth = async () => {
      const token = localStorage.getItem("accessToken");
      if (token) {
        try {
          const response = await authAPI.getCurrentUser();
          if (response.statusCode < 400 && response.data) {
            setUser(response.data);
          } else {
            localStorage.removeItem("accessToken");
            localStorage.removeItem("refreshToken");
          }
        } catch {
          localStorage.removeItem("accessToken");
          localStorage.removeItem("refreshToken");
        }
      }
      setLoading(false);
    };

    checkAuth();
  }, []);

  const register = async (userData) => {
    try {
      setError(null);
      const response = await authAPI.register(userData);

      if (response.statusCode >= 400) {
        setError(response.message);
        return { success: false, message: response.message };
      }

      // Auto login after registration
      return {
        success: true,
        message: "Registration successful. Please login.",
      };
    } catch (err) {
      const errorMsg = err.message || "Registration failed";
      setError(errorMsg);
      return { success: false, message: errorMsg };
    }
  };

  const login = async (credentials) => {
    try {
      setError(null);
      const response = await authAPI.login(credentials);

      if (response.statusCode >= 400) {
        setError(response.message);
        return { success: false, message: response.message };
      }

      // Store tokens
      if (response.data?.accessToken) {
        localStorage.setItem("accessToken", response.data.accessToken);
      }
      if (response.data?.refreshToken) {
        localStorage.setItem("refreshToken", response.data.refreshToken);
      }

      // Set user
      setUser(response.data.user || response.data);

      return { success: true, message: "Login successful" };
    } catch (err) {
      const errorMsg = err.message || "Login failed";
      setError(errorMsg);
      return { success: false, message: errorMsg };
    }
  };

  const logout = async () => {
    try {
      await authAPI.logout();
    } catch (err) {
      console.error("Logout error:", err);
    } finally {
      localStorage.removeItem("accessToken");
      localStorage.removeItem("refreshToken");
      setUser(null);
    }
  };

  const clearError = () => {
    setError(null);
  };

  const value = {
    user,
    loading,
    error,
    register,
    login,
    logout,
    clearError,
    isAuthenticated: !!user,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

export { AuthContext };
