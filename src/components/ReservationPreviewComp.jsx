import { Text, View } from 'react-native';
import Button from './ButtonComp';
import { classes } from '../data/mockClasses';
import { reservationPreviewStyles } from '../styles/components/reservationPreview';
import { colors } from '../styles/constants';

export default function ReservationPreviewComp({
  classData,
  onDelete= () => {},
}) {
  const { name, date, time, students, capacity } =
    classData;

  const classDate = new Date(date);
  const dayName = classDate.toLocaleDateString('es-ES', {
    weekday: 'long',
  });

  return (
    <View style={reservationPreviewStyles.container}>
      <Text style={reservationPreviewStyles.textPrimary}>
        {dayName}
      </Text>
      <Text style={reservationPreviewStyles.textPrimary}>
        {time}
      </Text>
      <Text style={[reservationPreviewStyles.textPrimary, { flex: 3, textAlign: 'center' }]}>
        {name}
      </Text>
      <Text style={reservationPreviewStyles.textSecndary}>
        {students}/{capacity}
      </Text>
      <Button
        variant="icon"
        color={colors.error}
        iconName={'close'}
        onPress={onDelete}
      />
    </View>
  );
}
