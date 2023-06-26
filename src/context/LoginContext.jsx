import { createContext, useState } from "react";
import PropTypes from "prop-types";
export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [token, setToken] = useState(null);

  const login = (token) => {
    setToken(token);
  };

  const logout = () => {
    setToken(null);
  };

  const isAuthenticated = () => {
    return token !== null;
  };

  return (
    <AuthContext.Provider value={{ token, login, logout, isAuthenticated }}>
      {children}
    </AuthContext.Provider>
  );
};

AuthProvider.propTypes = {
  children: PropTypes.node.isRequired,
};
