import React from 'react';
import { Navigate } from 'react-router-dom'; // Import Navigate
import { useUser } from './UserProvider'; // Import useUser

export default function Login() {
  const { user, login } = useUser();

  return (
    <>
      {console.log('User name---------------' + user)}
      <div>
        {user ? (
          <Navigate to="/dash" /> // Use Navigate to redirect
        ) : (
          <>
            <h2>Please log in</h2>
            <button onClick={login}>Login</button>
          </>
        )}
      </div>
    </>
  );
}
