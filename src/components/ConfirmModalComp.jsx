import { Modal, View, Text, TouchableOpacity } from 'react-native';
import Button from './ButtonComp';
import { Ionicons } from '@expo/vector-icons';
import { confirmModalStyles } from '../styles/components/confirmModalStyles';
import { colors } from '../styles/constants';

export default function ConfirmModalComp({
  visible = false,
  title = 'Confirmar',
  description = '¿Estás seguro?',
  icon = 'alert-circle',
  iconColor = colors.error,
  cancelText = 'Cancelar',
  acceptText = 'Aceptar',
  onCancel = () => {},
  onAccept = () => {},
  loading = false,
}) {
  return (
    <Modal
      visible={visible}
      transparent={true}
      animationType="fade"
      onRequestClose={onCancel}
    >
      <View style={confirmModalStyles.overlay}>
        {/* Contenedor del modal */}
        <View style={confirmModalStyles.modalContainer}>
          {/* Icono */}
          <Ionicons
            name={icon}
            size={48}
            color={iconColor}
            style={confirmModalStyles.icon}
          />

          {/* Título */}
          <Text style={confirmModalStyles.title}>{title}</Text>

          {/* Descripción */}
          <Text style={confirmModalStyles.description}>
            {description}
          </Text>

          {/* Botones */}
          <View style={confirmModalStyles.buttonsContainer}>

            {/* Botón Cancelar */}
            <Button
              label={cancelText}
              variant="outLine"
              text="primary"
              onPress={onCancel}
              disabled={loading}
            />

            {/* Botón Aceptar */}

            <Button
              label={acceptText}
              variant="primary"
              text="alternative"
              onPress={onAccept}
              disabled={loading}
            />
          </View>
        </View>
      </View>
    </Modal>
  );
}
