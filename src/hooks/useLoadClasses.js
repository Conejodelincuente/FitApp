import { useState, useEffect } from 'react';
import {
  collection,
  onSnapshot,
  doc,
  getDoc,
} from 'firebase/firestore';
import { db } from '../../firebaseConfig';

export function useLoadClasses() {
  const [classes, setClasses] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const classesRef = collection(db, 'classes');
    const unsubscribe = onSnapshot(
      classesRef,
      (snapshot) => {
        try {const classesData = snapshot.docs.map((classDoc) => ({
            id: classDoc.id,
            ...classDoc.data(),
          }));
          console.log('Classes loaded:', classesData.length);
          setClasses(classesData);
          setError(null);
        } catch (err) {
          setError(err.message);
          console.error('Error loading classes:', err);
        } finally {
          setLoading(false);
        }
      },
      (err) => {
        setError(err.message);
        console.error('Firestore listener error:', err);
        setLoading(false);
      }
    );

    return unsubscribe;
  }, []);
  return { classes, loading, error };
}
