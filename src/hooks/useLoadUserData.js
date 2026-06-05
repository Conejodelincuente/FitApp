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
        const userDocRef = doc(db, 'users', user.uid);
        const userDocSnap = await getDoc(userDocRef);
        if (userDocSnap.exists()) {
          setUserData(userDocSnap.data());
        } else {
          console.log(
            'No existe el documento para el UID:',
            user.uid
          );
        }
      } catch (error) {
        console.error('Error cargando datos del usuario:', error);
      }
    };

    loadUserData();
  }, [user]);

  return { userData, setUserData };
}
