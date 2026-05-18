import { useState, createContext } from 'react';

export const AuthContext = createContext();

export function AuthProvider({ children }) {
  const [isLogin, setIsLogin] = useState(false);
  const [email, setEmail] = useState('');

  const value = {
    isLogin,
    setIsLogin,
    email,
    setEmail,
  };

  return (
    <AuthContext.Provider value={value}>
      {children}
    </AuthContext.Provider>
  );
}
