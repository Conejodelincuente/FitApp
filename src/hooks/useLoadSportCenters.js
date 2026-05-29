import { useState, useEffect } from 'react';
import { collection, getDocs } from 'firebase/firestore';
import { db } from '../../firebaseConfig';

export function useLoadSportCenters() {
  const [sportCenters, setSportCenters] = useState([]);
  useEffect(() => {
    const loadSportCenters = async () => {
      try {
        const querySnapshot = await getDocs(
          collection(db, 'sportCenters')
        );
        const centers = querySnapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));
        setSportCenters(centers);
      } catch (error) {
        console.error('Error cargando centros:', error);
      }
    };

    loadSportCenters();
  }, []);

  return { sportCenters };
}
