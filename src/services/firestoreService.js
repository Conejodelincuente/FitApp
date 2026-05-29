import { doc, setDoc } from 'firebase/firestore';
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