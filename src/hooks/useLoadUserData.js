import { useState, useEffect } from 'react';
import { doc, getDoc } from 'firebase/firestore';
import { db } from '../../firebaseConfig';

export function useLoadUserData(user) {
  const [userData, setUserData] = useState(null);

  useEffect(() => {
    if (!user) {
      setUserData(null);
      return;
    }

    const loadUserData = async () => {
      try {
        const userDocRef = doc(db, 'users', user.uid, 'profile', 'data');
        const userDocSnap = await getDoc(userDocRef);
        if (userDocSnap.exists()) {
          setUserData(userDocSnap.data());
        }
      } catch (error) {
        console.error('Error cargando datos del usuario:', error);
      }
    };

    loadUserData();
  }, [user]);

  return { userData, setUserData };
}