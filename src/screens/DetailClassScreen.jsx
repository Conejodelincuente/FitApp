import React, { useContext, useState, useMemo, } from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  ActivityIndicator,
  ToastAndroid
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { AuthContext } from '../context/AuthContext';
import { useGlobalModal } from '../context/ModalContext';
import { toggleClassReservation } from '../services/firestoreService';
import { useConfirmModal } from '../hooks/useConfirmModal';

// COMPONENTES PROPIOS
import Header from '../components/Header';
import SimpleBadgeComp from '../components/SimpleBadgeComp';
import Button from '../components/ButtonComp';
import IconInfoComp from '../components/IconInfoComp';
import WodBoxComp from '../components/WodBoxComp';
import ConfirmModalComp from '../components/ConfirmModalComp';

// ESTILOS
import { globalStyles } from '../styles/globalStyles';
import {
  colors,
  spacing,
  typography,
} from '../styles/constants/index';

export default function DetailClassScreen({ route, navigation }) {
  const { item } = route.params || {};
  const { user } = useContext(AuthContext);
  const { showConfirmModal } = useGlobalModal();
  const [isProcessing, setIsProcessing] = useState(false);

  if (!item) return null;

  // Lógica y desestructuración
  const studentsArray = Array.isArray(item.students)
    ? item.students
    : [];
  const isEnrolled = user ? studentsArray.includes(user.uid) : false;
  const capacity = Number(item.capacity) || 0;
  const enrolledCount = studentsArray.length;
  const availableSpots = Math.max(0, capacity - enrolledCount);

  // Formateo seguro de la fecha para evitar el bug de iOS
  const dayName = useMemo(() => {
    if (!item.date) return 'N/A';
    try {
      const [year, month, day] = item.date.split('-').map(Number);
      const classDate = new Date(year, month - 1, day);
      const rawDay = classDate.toLocaleDateString('es-ES', {
        weekday: 'short',
        day: 'numeric',
        month: 'short',
      });
      return rawDay.charAt(0).toUpperCase() + rawDay.slice(1);
    } catch {
      return item.date;
    }
  }, [item.date]);

  // Informacion de la clase

  const wodTitle = 'WOD - The Ghost';
  const wodSubTitle = '6 Rounds for time:';
  const wodDescription =
    item.description ||
    '• 20 Row calories\n' +
      '• 30 Kettlebell swings (24/16 kg)\n' +
      '• 20 Burpees';

  // Manejador del botón conectado a Firestore Services
  const handleAction = async () => {
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
          async () => {
            await toggleClassReservation(actionData);
            ToastAndroid.show(`Clase cancelada`, ToastAndroid.SHORT);
            navigation.navigate('ClassList');
          },
          '¿Quieres eliminar la reserva?',
          `Vas a cancelar tu reserva en ${item.name}`
        );
      } else {
        setIsProcessing(true);
        if (availableSpots <= 0) {
          ToastAndroid.show('¡Vaya! Esta clase se ha llenado.', ToastAndroid.SHORT);
          setIsProcessing(false);
          return;
        }
        await toggleClassReservation(actionData);
        ToastAndroid.show(`¡Ya estás apuntado en ${item.name}!`, ToastAndroid.SHORT);
        navigation.navigate('ClassList');
      }
    } catch (error) {
      console.error(error);
      alert(
        error.message === 'CAPACITY_FULL'
          ? '¡Vaya! La clase está completa.'
          : 'Error en la reserva.'
      );
    } finally {
      setIsProcessing(false);
    }
  };

  return (
    <SafeAreaView style={globalStyles.safeAreaContainer}>
      <Header
        name="Detalles de la Clase"
        onBack={() => navigation.goBack()}
      />
      <View
        style={[
          globalStyles.containerMain,
          { alignItems: 'stretch' },
        ]}
      >
        <ScrollView
          showsVerticalScrollIndicator={false}
          contentContainerStyle={{ paddingVertical: spacing.sm }}
        >
          <View
            style={[globalStyles.gridRow, { alignItems: 'baseline' }]}
          >
            <View style={{ flex: 1 }}>
              {/* TÍTULO DE LA CLASE CON TU CONFIGURACIÓN DE TYPOGRAPHY */}
              <Text style={styles.className}>{item.name}</Text>

              {/* MENCIÓN SIMPLE DEL INSTRUCTOR */}
              <Text style={styles.coachText}>
                Coach:{' '}
                <Text style={styles.coachName}>
                  {item.instructor || 'Staff'}
                </Text>
              </Text>
            </View>

            {item.level && (
              <View style={styles.badgeWrapper}>
                <SimpleBadgeComp
                  text={item.level}
                  backgroundColor={colors.info}
                />
              </View>
            )}
          </View>

          {/*  (gridRow) */}
          <View style={globalStyles.gridRow}>
            <IconInfoComp
              iconName="calendar-outline"
              title="Fecha"
              data={dayName}
            />
            <IconInfoComp
              iconName="time-outline"
              title="Hora"
              data={item.time || 'N/A'}
            />
            <IconInfoComp
              iconName="people-outline"
              title="Cupos"
              data={`${enrolledCount}/${capacity}`}
            />
          </View>

          {/* TU SECCIÓN DE ENTRENAMIENTO MODULAR */}
          <WodBoxComp
            title={wodTitle}
            subtitle={wodSubTitle}
            description={wodDescription}
          />
        </ScrollView>

        {/* BOTÓN COMPONENTE GLOBAL ADAPTADO */}
        <View style={styles.footerButtonContainer}>
          {isProcessing ? (
            <ActivityIndicator color={colors.error} />
          ) : (
            <Button
              label={
                isEnrolled
                  ? 'Desapuntarme de la Clase'
                  : 'Apuntarse a la Clase'
              }
              color={
                isEnrolled ? colors.textAlternative : colors.error
              }
              onPress={handleAction}
            />
          )}
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  badgeWrapper: {
    marginBottom: spacing.xs,
  },
  className: {
    fontSize: typography.h1.fontSize,
    fontWeight: typography.h1.fontWeight,
    lineHeight: typography.h1.lineHeight,
    fontFamily: typography.h1.fontFamily,
    color: colors.primary || '#fff',
    marginTop: spacing.xs,
  },
  coachText: {
    fontSize: typography.h3.fontSize,
    color: colors.textAlternative || '#aaa',
    fontWeight: '300',
    marginTop: spacing.xs,
    marginBottom: spacing.md,
  },
  coachName: {
    fontWeight: '600',
  },
  footerButtonContainer: {
    width: '100%',
    paddingVertical: spacing.md,
  },
});
