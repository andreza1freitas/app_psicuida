import React from 'react';
import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';

const AuthRedirect = () => {
  const isAuthenticated = useSelector(state => state.user.isAuthenticated);

  return isAuthenticated ? <Navigate to="/dashboard" /> : <Navigate to="/" />;
};

export default AuthRedirect;