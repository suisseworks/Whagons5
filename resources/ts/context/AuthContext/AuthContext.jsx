import { createContext, useState, useMemo } from 'react';

export const AuthContext = createContext(null);

export const AuthProvider = ({ children }) => {

  const [isAuthenticated, setIsAuthenticated] = useState(() => {
    const stored = localStorage.getItem('isAuthenticated');
    return stored ? JSON.parse(stored) : false;
  });

  const [user, setUser] = useState(() => {
    const storedUser = localStorage.getItem('userData');
    return storedUser ? JSON.parse(storedUser) : null;
  });

  const authUser = ({ user, token }) => {
    console.log("Login correct 2");

    setUser(user);
    setIsAuthenticated(true);

    localStorage.setItem('isAuthenticated', 'true');
    localStorage.setItem('authToken', token);
    localStorage.setItem('userData', JSON.stringify(user));
  };

  const logout = () => {
    setIsAuthenticated(false);
  };


  const authValue = useMemo(() => ({ isAuthenticated, user, authUser, logout }), [isAuthenticated]);

  return (
    // <AuthContext.Provider value={{ isAuthenticated, login, logout }}>
    <AuthContext.Provider value={ authValue }>
      {children}
    </AuthContext.Provider>
  );
};
