import React, {
  createContext,
  useState,
  useContext,
  useCallback,
} from 'react';
import ConfirmModalComp from '../components/ConfirmModalComp';
import { colors } from '../styles/constants';

const ModalContext = createContext();

export function ModalProvider({ children }) {
  const [visible, setVisible] = useState(false);
  const [loading, setLoading] = useState(false);
  const [config, setConfig] = useState({
    title: '¿Confirmar acción?',
    description: '',
    onConfirm: () => {},
  });

  const showConfirmModal = useCallback(
    (onConfirmAction, customTitle, customDescription) => {
      setConfig({
        title: customTitle || '¿Quieres eliminar la reserva?',
        description:
          customDescription || 'Esta acción no se puede deshacer.',
        onConfirm: onConfirmAction,
      });
      setVisible(true);
    },
    []
  );

  const closeModal = useCallback(() => {
    setVisible(false);
    setLoading(false);
  }, []);

  const handleAccept = async () => {
    setLoading(true);
    try {
      await config.onConfirm();
      setVisible(false);
    } catch (error) {
      console.error('Error en ejecución del modal global:', error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <ModalContext.Provider value={{ showConfirmModal, closeModal }}>
      {children}
      <ConfirmModalComp
        visible={visible}
        title={config.title}
        description={config.description}
        icon="alert-circle"
        iconColor={colors.error}
        cancelText="Cancelar"
        acceptText="Eliminar"
        onCancel={closeModal}
        onAccept={handleAccept}
        loading={loading}
      />
    </ModalContext.Provider>
  );
}
export const useGlobalModal = () => useContext(ModalContext);
