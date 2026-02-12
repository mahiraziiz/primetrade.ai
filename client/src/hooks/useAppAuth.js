import { useDispatch, useSelector } from 'react-redux';
import { loginUser, registerUser, logoutUser, getCurrentUser, clearError } from '../redux/slices/authSlice';
import { useEffect } from 'react';

export const useAppAuth = () => {
  const dispatch = useDispatch();
  const { user, loading, error, isAuthenticated } = useSelector((state) => state.auth);

  useEffect(() => {
    const token = localStorage.getItem('accessToken');
    if (token && !user) {
      dispatch(getCurrentUser());
    }
  }, [dispatch, user]);

  const login = (credentials) => {
    return dispatch(loginUser(credentials)).unwrap();
  };

  const register = (userData) => {
    return dispatch(registerUser(userData)).unwrap();
  };

  const logout = () => {
    return dispatch(logoutUser()).unwrap();
  };

  const handleClearError = () => {
    dispatch(clearError());
  };

  return {
    user,
    loading,
    error,
    isAuthenticated,
    login,
    register,
    logout,
    clearError: handleClearError,
  };
};
