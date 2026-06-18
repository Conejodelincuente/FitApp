import {
  doc,
  setDoc,
  updateDoc,
  arrayUnion,
  arrayRemove,
} from 'firebase/firestore';
import { db } from '../../firebaseConfig';

export const firestoreService = {
  saveUserProfile: async (userId, profileData) => {
    try {
      const userProfileRef = doc(db, 'users', userId);
      await setDoc(userProfileRef, {
        ...profileData,
        createdAt: new Date(),
      });
      return { success: true };
    } catch (error) {
      return { success: false, error: error.message };
    }
  },
};

// Función para inscribirse a una clase
export const enrollInClass = async (classId, userId) => {
  try {
    const classRef = doc(db, 'classes', classId);
    await updateDoc(classRef, {
      students: arrayUnion(userId),
    });
  } catch (error) {
    console.error('Error al inscribirse en la clase: ', error);
    throw error;
  }
};

// Función para darse de baja de una clase
export const cancelReservation = async (classId, userId) => {
  try {
    const classRef = doc(db, 'classes', classId);
    await updateDoc(classRef, {
      students: arrayRemove(userId),
    });
  } catch (error) {
    console.error('Error al cancelar la reserva: ', error);
    throw error;
  }
};

// Función gestion total
export const toggleClassReservation = async ({
  classId,
  userId,
  isEnrolled,
  availableSpots,
}) => {
  if (!userId) throw new Error('Usuario no autenticado');

  if (isEnrolled) {
    await cancelReservation(classId, userId);
    return { action: 'removed' };
  } else {
    if (availableSpots <= 0) {
      throw new Error('CAPACITY_FULL');
    }
    await enrollInClass(classId, userId);
    return { action: 'added' };
  }
};
