import React, { createContext, useContext, useState } from "react";
// import { jwtDecode } from "jwt-decode";
// Create a context with an initial value (null in this case)
const AuthContext = createContext(null);
export const ContextData = createContext();

// Create a provider component that wraps your app
export const AuthProvider = ({ children }) => {
  const [token, setToken] = useState(localStorage.getItem("token"));

  const login = (newToken) => {
    setToken(newToken);
    localStorage.setItem("token", newToken);
   
  };

  const logout = () => {
    setToken(null);
    localStorage.removeItem("token");
  };
  // Check if the token is present and a string before decoding
  //  const Decoded = token && typeof token === 'string' ? jwtDecode(token) : null;
  //  console.log(Decoded, "tokanrole");
  //  const Role = Decoded.role;
  //  console.log(Role,"role")
  const check_Validation = (event, fun_name, setState) => {
    const form = event.currentTarget;
    event.preventDefault();
    setState(true);
    if (form.checkValidity() === false) {
      event.stopPropagation();
      return false;
    } else {
      fun_name();
      return true;
    }
  };
  return (
    <AuthContext.Provider
      value={{ token, login, logout, setToken, check_Validation }}
    >
      {children}
    </AuthContext.Provider>
  );
};

// Create a custom hook to use the AuthContext in your components
export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
};
