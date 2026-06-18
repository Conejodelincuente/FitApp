import { useState, useCallback } from 'react'



export function useConfirmModal() {
  const [modalVisible, setModalVisible] = useState(false);
  const [loading, setLoading] = useState(false);


const handleModal = useCallback(async (onConfirm) => {
    setLoading(true);
    try {
      await onConfirm();
      setModalVisible(false);
    } catch (error) {
      console.error('Error en modal:', error);
      throw error;
    } finally {
      setLoading(false);
    }
  }, []);

  const openModal = useCallback(() => {
    setModalVisible(true);
  }, []);

  const closeModal = useCallback(() => {
    setModalVisible(false);
  }, []);

  return {
    modalVisible,
    loading,
    handleModal,
    openModal,
    closeModal,
  };

}