import { useState, createContext, useEffect } from 'react';
import { auth } from '../../firebaseConfig';
import { onAuthStateChanged, signOut } from 'firebase/auth';
import { useLoadSportCenters } from '../hooks/useLoadSportCenters';
import { useLoadUserData } from '../hooks/useLoadUserData';
import { useLoadClasses } from '../hooks/useLoadClasses';
import AsyncStorage from '@react-native-async-storage/async-storage';

export const AuthContext = createContext();

export function AuthProvider({ children }) {
  const [user, setUser] = useState(null);
  const [isLogin, setIsLogin] = useState(false);
  const [loading, setLoading] = useState(true);

  // Cargar centros deportivos
  const { sportCenters } = useLoadSportCenters();

  // Cargar datos del usuario cuando se loguea
  const { userData, setUserData } = useLoadUserData(user);

  // Cargar datos del usuario cuando se loguea
  const { classes } = useLoadClasses();

  // Escuchar cambios de autenticación
  useEffect(() => {
    const checkAsyncStorage = async () => {
      try {
        const keys = await AsyncStorage.getAllKeys();
      } catch (error) {
        console.log('AsyncStorage error:', error);
      }
    };

    const unsubscribe = onAuthStateChanged(auth, (firebaseUser) => {
      checkAsyncStorage();

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
      console.error('Error en logout:', error);
    }
  };

  const isAppLoading = loading || (user && (!userData || !classes));

  const value = {
    isLogin,
    user,
    classes,
    userData,
    setUserData,
    sportCenters,
    loading: isAppLoading,
    logout,
  };

  return (
    <AuthContext.Provider value={value}>
      {!isAppLoading && children}
    </AuthContext.Provider>
  );
}