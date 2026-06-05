
import { useState, useEffect } from 'react';
import { doc, getDoc } from 'firebase/firestore';
import { db } from '../../firebaseConfig';

export function useSportCenter(sportCenterId) {
  const [sportCenter, setSportCenter] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (!sportCenterId) {
      setSportCenter(null);
      setLoading(false);
      return;
    }
  setLoading(true);

    const fetchSportCenter = async () => {
      try {
        const centerRef = doc(db, 'sportCenters', sportCenterId);
        const centerSnap = await getDoc(centerRef);

        if (centerSnap.exists()) {
          setSportCenter(centerSnap.data());
        } else {
          setError('Centro deportivo no encontrado');
        }
      } catch (error) {
        setError(err.message);
        console.error('Error cargando centro:', err);
      } finally {
        setLoading(false);
      }
    };

    fetchSportCenter();
  }, [sportCenterId]);

  return { sportCenter, loading, error };
}