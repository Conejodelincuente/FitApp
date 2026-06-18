import { Text, View } from 'react-native';
import Button from './ButtonComp';
import ConfirmModalComp from './ConfirmModalComp';
import { useConfirmModal } from '../hooks/useConfirmModal';
import { reservationPreviewStyles } from '../styles/components/reservationPreview';
import { colors } from '../styles/constants';

export default function ReservationPreviewComp({
  classData,
  onDelete = () => {},
}) {
  const { name, date, time, students, capacity } = classData;

  const { modalVisible, loading, handleModal, openModal, closeModal } =
    useConfirmModal();

  // CORRECCIÓN DE DATOS
  const studentsArray = Array.isArray(students) ? students : [];
  const enrolledCount = studentsArray.length;

  const classDate = new Date(date);
  const dayName = classDate.toLocaleDateString('es-ES', {
    weekday: 'long',
  });

  const handleConfirmDelete = async () => {
    await handleModal(onDelete);
  };

  return (
    <>
      <View style={reservationPreviewStyles.container}>
        <View style={reservationPreviewStyles.dateColumn}>
          <Text style={reservationPreviewStyles.textSecndary}>
            {dayName}
          </Text>
          <Text style={reservationPreviewStyles.textSecndary}>
            {time}
          </Text>
        </View>
        <Text
          style={[
            reservationPreviewStyles.textTitle,
            { flex: 3, textAlign: 'center' },
          ]}
        >
          {name}
        </Text>
        <Text style={reservationPreviewStyles.textSecndary}>
          {enrolledCount}/{capacity || 0}
        </Text>
        <Button
          variant="icon"
          color={colors.error}
          iconName={'close'}
          onPress={openModal}
        />
      </View>
      <ConfirmModalComp
        visible={modalVisible}
        title="¿Quieres eliminar la reserva?"
        description={`Vas a cancelar tu reserva en ${name}`}
        icon="alert-circle"
        iconColor={colors.error}
        cancelText="Cancelar"
        acceptText="Eliminar"
        onCancel={closeModal}
        onAccept={handleConfirmDelete}
        loading={loading}
      />
    </>
  );
}
