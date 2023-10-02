import React from 'react';
import { Navigate } from 'react-router-dom'; // Import Navigate
import { useUser } from './UserProvider'; // Import useUser
import Login from './Login';

function PrivateRoute({ component }) {
  const { user } = useUser();

  if (!user) {
    return <Navigate to="/login" />; // Use Navigate to redirect
  }

  return component;
}

export default PrivateRoute;
