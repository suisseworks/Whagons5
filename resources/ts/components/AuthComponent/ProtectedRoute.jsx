import React from 'react';
import { Outlet, Navigate } from 'react-router-dom';
import { useContext } from 'react';
import { AuthContext } from '../../context/AuthContext/AuthContext';

const ProtectedRoute = () => {

  const auth = useContext(AuthContext);
  const { isAuthenticated } = auth;

  return (
    isAuthenticated ? <Outlet /> : <Navigate to="/login" />
  );
};

export default ProtectedRoute;