import {
  View,
  Text,
  TouchableOpacity,
  Animated,
} from 'react-native';
import { useContext, useState, useRef, memo } from 'react';
import { AuthContext } from '../context/AuthContext';
import { useGlobalModal } from '../context/ModalContext';
import { toggleClassReservation } from '../services/firestoreService';
import { Ionicons } from '@expo/vector-icons';
import {
  enrollInClass,
  cancelReservation,
} from '../services/firestoreService';
import { classListCompStyles } from '../styles/components/classListComp';
import { colors } from '../styles/constants';


function ClassListComp({ item, navigation }) {
  const { user } = useContext(AuthContext);
  const { showConfirmModal } = useGlobalModal();
  const [isProcessing, setIsProcessing] = useState(false);
  const [alertVisible, setAlertVisible] = useState(false);
  const fadeAnim = useRef(new Animated.Value(0)).current;

  if (!item) {
    return null;
  }

  const studentsArray = Array.isArray(item.students)
    ? item.students
    : [];

  const isEnrolled = user ? studentsArray.includes(user.uid) : false;
  const capacity = Number(item.capacity) || 0;
  const enrolled = studentsArray.length;
  const availableSpots = Math.max(0, capacity - enrolled);

  const time = item.time || 'N/A';
  const displayDate = item.date || 'N/A';

  // Animación del Toast de Éxito
  const triggerAlert = () => {
    setAlertVisible(true);
    Animated.timing(fadeAnim, {
      toValue: 1,
      duration: 300,
      useNativeDriver: true,
    }).start(() => {
      setTimeout(() => {
        Animated.timing(fadeAnim, {
          toValue: 0,
          duration: 300,
          useNativeDriver: true,
        }).start(() => setAlertVisible(false));
      }, 3000);
    });
  };

  // Manejador del boton de cancelacion
  const handleToggleReservation = async () => {
    if (isProcessing || !user) return;

    const actionData = {
      classId: item.id,
      userId: user.uid,
      isEnrolled: isEnrolled,
      availableSpots: availableSpots,
    };

    try {
      if (isEnrolled) {
        showConfirmModal(
        async () => { await toggleClassReservation(actionData); },
        "¿Quieres eliminar la reserva?",
        `Vas a cancelar tu reserva en ${item.name}`
      );
      } else {
        setIsProcessing(true);
        if (availableSpots <= 0) {
          alert('¡Vaya! Esta clase se ha llenado.');
          setIsProcessing(false);
          return;
        }
        await toggleClassReservation(actionData);
      }
    } catch (error) {
      console.error('Error en la vista al gestionar reserva:', error);
      alert('Ocurrió un pequeño error. Inténtalo de nuevo.');
    } finally {
      setIsProcessing(false);
    }
  };

  return (
    <TouchableOpacity
      activeOpacity={0.8}
      style={classListCompStyles.cardWrapper}
      onPress={() =>
        navigation && navigation.navigate('DetailClass', { item })
      }
    >
      <View
        style={[
          classListCompStyles.container,
          isEnrolled && classListCompStyles.containerActive,
        ]}
      >
        {/* COLUMNA 1: Identificación (Logo + Info Principal) */}

        <View style={classListCompStyles.mainContent}>
          <Text style={classListCompStyles.classMeta}>
            {displayDate} - {time}
          </Text>
          <Text
            style={classListCompStyles.className}
            numberOfLines={1}
          >
            {item.name}
          </Text>
          <Text style={classListCompStyles.instructorName}>
            {item.instructor || 'Instructor'}
          </Text>
          <Text
            style={classListCompStyles.centerName}
            numberOfLines={1}
          >
            {item.sportCenterName || 'Centro'}
          </Text>
        </View>

        {/* COLUMNA 2: Estado de Plazas (Columna propia intermedia) */}
        <View style={classListCompStyles.spotsColumn}>
          <Text style={classListCompStyles.spotsCount}>
            {enrolled}/{capacity}
          </Text>
          <Text
            style={[
              classListCompStyles.spotsLabel,
              availableSpots === 0 && { color: colors.error },
            ]}
          >
            {availableSpots > 0
              ? `${availableSpots} libres`
              : 'Lleno'}
          </Text>
        </View>

        {/* COLUMNA 3: Acción (Botón circular + Texto abajo) */}
        <View style={classListCompStyles.actionColumn}>
          <TouchableOpacity
            activeOpacity={0.7}
            onPress={handleToggleReservation}
            disabled={isProcessing}
            style={classListCompStyles.actionButton}
          >
            <Ionicons
              name={isEnrolled ? 'checkmark-circle' : 'add-circle'}
              size={32}
              color={isEnrolled ? colors.success : colors.primary}
            />
          </TouchableOpacity>
          <Text
            style={[
              classListCompStyles.actionText,
              isEnrolled && { color: colors.success },
            ]}
          >
            {isEnrolled ? 'Desapuntarme' : 'Apuntarme'}
          </Text>
        </View>
      </View>
    </TouchableOpacity>
  );
}

export default memo(ClassListComp, (prevProps, nextProps) => {
  const prev = prevProps.item || {};
  const next = nextProps.item || {};

  const prevStudents = Array.isArray(prev.students)
    ? prev.students
    : [];
  const nextStudents = Array.isArray(next.students)
    ? next.students
    : [];

  return (
    prev.id === next.id &&
    prev.name === next.name &&
    prev.instructor === next.instructor &&
    prev.time === next.time &&
    prev.date === next.date &&
    prev.capacity === next.capacity &&
    prevStudents.length === nextStudents.length
  );
});
