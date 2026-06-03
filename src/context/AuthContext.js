import { useState, createContext, useEffect } from 'react';
import { auth } from '../../firebaseConfig';
import { onAuthStateChanged, signOut } from 'firebase/auth';
import { useLoadSportCenters, useLoadUserData} from '../hooks/index';

export const AuthContext = createContext();

export function AuthProvider({ children }) {
  const [user, setUser] = useState(null);
  const [isLogin, setIsLogin] = useState(false);
  const [loading, setLoading] = useState(true);

  // Cargar centros deportivos
  const { sportCenters } = useLoadSportCenters();

  // Cargar datos del usuario cuando se loguea
  const { userData, setUserData } = useLoadUserData(user);

  // Escuchar cambios de autenticación
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (firebaseUser) => {
      console.log('onAuthStateChanged fired:', firebaseUser?.uid);
      if (firebaseUser) {
        setUser(firebaseUser);
        setIsLogin(true);
      } else {
        setUser(null);
        setIsLogin(false);
        setUserData(null);
      }
      setLoading(false);
    });

    return unsubscribe;
  }, []);

  // Funcion para cerrar sesión
  const logout = async () => {
  try {
    await signOut(auth);
  } catch (error) {
    console.error("Error en logout:", error);
  }
};

  const value = {
    isLogin,
    user,
    userData,
    setUserData,
    sportCenters,
    loading,
    logout
  };

  return (
    <AuthContext.Provider value={value}>
      {!loading && children}
    </AuthContext.Provider>
  );
}