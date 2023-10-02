//src/UserProvider.js

import React from 'react';

// Create a context for user-related data
const UserContext = React.createContext();

// UserProvider component for managing user state
function UserProvider({ children }) {
  // Initialize the user state with null (user is not authenticated)
  const [user, setUser] = React.useState(null);

  // Simulate a successful login
  const login = () => {
    setUser({ username: 'user' });
  };

  // Simulate a logout
  const logout = () => {
    setUser(null);
  };

  // Provide the user, login, and logout functions to child components
  return (
    <UserContext.Provider value={{ user, login, logout }}>
      {children}
    </UserContext.Provider>
  );
}

// Custom hook to access the user context
function useUser() {
  // Use the useContext hook to access the UserContext
  return React.useContext(UserContext);
}

export { UserProvider, useUser }; // Export the UserProvider and useUser for use in other components
