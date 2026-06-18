import {
  View,
  FlatList,
  Text,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';
import {
  Header,
  CardHeaderComp,
  ReservationPreviewComp,
  SectionTitleLinkComp,
} from '../components/index';
import { useContext, useCallback, useMemo } from 'react';
import { AuthContext } from '../context/AuthContext';
import { toggleClassReservation } from '../services/firestoreService';
import { globalStyles } from '../styles/globalStyles';
import {
  colors,
  spacing,
  typography,
} from '../styles/constants/index';
import { Ionicons } from '@expo/vector-icons';
import { SafeAreaView } from 'react-native-safe-area-context';

function HomeScreen({ navigation }) {
  const { classes, user, userData } = useContext(AuthContext);

  // Filtrado array de claases del usuario + OPTIMIZACIÓN
  const myReservations = useMemo(() => {
    if (!classes || !user) return [];
    return classes.filter((item) => {
      const studentsArray = Array.isArray(item.students)
        ? item.students
        : [];
      return studentsArray.includes(user.uid);
    });
  }, [classes, user]);

  //Accion del boton de cancelación
  const handleDeleteReservation = useCallback(
    async (classId) => {
      if (!user) return;
      try {
        await toggleClassReservation({
          classId,
          userId: user.uid,
          isEnrolled: true,
        });
      } catch (error) {
        console.error('Error al cancelar desde el Home:', error);
        alert('No se pudo cancelar la reserva. Inténtalo de nuevo.');
      }
    },
    [user]
  );

  const renderItem = useCallback(
    ({ item }) => (
      <ReservationPreviewComp
        classData={item}
        onDelete={() => handleDeleteReservation(item.id)}
      />
    ),
    [handleDeleteReservation]
  );

  return (
    <SafeAreaView
      style={{ flex: 1, backgroundColor: colors.backgroundDark }}
    >
      <View style={globalStyles.containerMain}>
        {/* Cabecera Principal */}
        <Header name="Inicio" />

        {/* Tarjeta de Bienvenida */}
        <CardHeaderComp userData={userData} />

        {/* Sección de Reservas Activas */}
        <SectionTitleLinkComp
          title={`Mis reservas ${myReservations.length > 0 ? `(${myReservations.length})` : ''}`}
          linkText={myReservations.length > 0 ? 'Ver todas' : ''}
          onLink={() => navigation.navigate('Class')}
        >
          <FlatList
            data={myReservations}
            renderItem={renderItem}
            keyExtractor={(item) => item.id.toString()}
            initialNumToRender={4}
            maxToRenderPerBatch={4}
            contentContainerStyle={{ flexGrow: 1 }}
            ListEmptyComponent={
              <View style={styles.emptyContainer}>
                <View style={styles.iconCircle}>
                  <Ionicons
                    name="calendar-outline"
                    size={32}
                    color={colors.textAlternative || '#666'}
                  />
                </View>
                <Text style={styles.emptyTitle}>
                  No tienes reservas para hoy
                </Text>
                <Text style={styles.emptySubtitle}>
                  Mantente en movimiento. Explora el horario del
                  centro y asegura tu lugar en la próxima clase.
                </Text>

                <TouchableOpacity
                  style={styles.exploreButton}
                  onPress={() => navigation.navigate('Class')}
                  activeOpacity={0.8}
                >
                  <Text style={styles.exploreButtonText}>
                    Explorar Clases
                  </Text>
                  <Ionicons
                    name="arrow-forward"
                    size={16}
                    color="#fff"
                  />
                </TouchableOpacity>
              </View>
            }
          />
        </SectionTitleLinkComp>
      </View>
    </SafeAreaView>
  );
}

// Estilos complementarios
const styles = StyleSheet.create({
  emptyContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: spacing.xl || 32,
    paddingHorizontal: spacing.md || 16,
    backgroundColor: colors.surface || '#1e1e1e',
    borderRadius: 16,
    marginTop: spacing.sm,
  },
  iconCircle: {
    width: 64,
    height: 64,
    borderRadius: 32,
    backgroundColor: '#2a2a2a',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: spacing.sm,
  },
  emptyTitle: {
    fontSize: typography.h3.fontSize,
    fontWeight: typography.h3.fontWeight,
    fontFamily: typography.h3.fontFamily,
    color: '#fff',
    marginBottom: 6,
  },
  emptySubtitle: {
    fontSize: typography.body.fontSize,
    fontFamily: typography.body.fontFamily,
    color: colors.textAlternative || '#aaa',
    textAlign: 'center',
    lineHeight: 20,
    marginBottom: spacing.md || 16,
  },
  exploreButton: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: colors.primary || '#E74C3C',
    paddingVertical: 10,
    paddingHorizontal: 16,
    borderRadius: 12,
    gap: 8,
  },
  exploreButtonText: {
    color: '#fff',
    fontSize: typography.caption.fontSize,
    fontWeight: '700',
  },
});

export default HomeScreen;
