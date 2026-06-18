import { View, Text, StyleSheet } from 'react-native';
import { Header, Button } from '../components/index';
import { useContext, useMemo } from 'react';
import { AuthContext } from '../context/AuthContext';
import { globalStyles } from '../styles/globalStyles';
import { SafeAreaView } from 'react-native-safe-area-context';
import { colors, spacing, typography } from '../styles/constants/index';
import { Ionicons } from '@expo/vector-icons';

function ProfileScreen() {
  const { user, classes, userData, logout } = useContext(AuthContext);

  // Calculo número de reservas activas
  const totalReservations = useMemo(() => {
    if (!classes || !user) return 0;
    return classes.filter((item) => {
      const studentsArray = Array.isArray(item.students) ? item.students : [];
      return studentsArray.includes(user.uid);
    }).length;
  }, [classes, user]);

  return (
    <SafeAreaView style={globalStyles.safeAreaContainer}>
      <View style={[globalStyles.containerMain, { alignItems: 'stretch' }]}>
        <Header name="Perfil" />

        {/* SECCIÓN 1*/}
        <View style={styles.profileCard}>
          <View style={styles.avatarCircle}>
            <Ionicons name="person" size={40} color={colors.textAlternative || '#aaa'} />
          </View>

          <View style={styles.infoWrapper}>
            {/* Nombre dinámico */}
            <Text style={styles.nameText}>
              {userData?.name || userData?.firstName || 'Atleta FitApp'}
            </Text>
            {/* Correo de autenticación directo */}
            <Text style={styles.emailText}>
              {user?.email || 'usuario@fitapp.com'}
            </Text>
          </View>
        </View>

        {/* SECCIÓN 2*/}
        <View style={styles.statsContainer}>
          <View style={styles.statBox}>
            <Ionicons name="fitness-outline" size={24} color={colors.primary} />
            <Text style={styles.statNumber}>{totalReservations}</Text>
            <Text style={styles.statLabel}>Clases Reservadas</Text>
          </View>

          <View style={styles.statBox}>
            <Ionicons name="ribbon-outline" size={24} color={colors.info || '#2196F3'} />
            <Text style={styles.statNumber}>{userData?.level || 'General'}</Text>
            <Text style={styles.statLabel}>Nivel de Acceso</Text>
          </View>
        </View>

        {/* SECCIÓN 3*/}
        {userData?.sportCenterName && (
          <View style={styles.centerInfoCard}>
            <Ionicons name="location-outline" size={20} color={colors.textAlternative} />
            <Text style={styles.centerText}>
              Sede Principal: <Text style={{ fontWeight: '600', color: '#fff' }}>{userData.sportCenterName}</Text>
            </Text>
          </View>
        )}

        <View style={{ flex: 1 }} />

        {/* Botón Cierre de Sesión */}
        <View style={styles.footerButtonContainer}>
          <Button
            variant = 'outLine'
            label="Cerrar Sesión"
            onPress={logout}
            color={colors.textAlternative}
            iconName="log-out-outline"
          />
        </View>
      </View>
    </SafeAreaView>
  );
}

// Estilos complementarios
const styles = StyleSheet.create({
  profileCard: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: colors.surface || '#1e1e1e',
    padding: spacing.md || 16,
    borderRadius: 16,
    marginTop: spacing.sm,
    marginBottom: spacing.md,
  },
  avatarCircle: {
    width: 70,
    height: 70,
    borderRadius: 35,
    backgroundColor: '#2a2a2a',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: spacing.md || 16,
  },
  infoWrapper: {
    flex: 1,
  },
  nameText: {
    fontSize: typography.h2.fontSize,
    fontWeight: typography.h2.fontWeight,
    fontFamily: typography.h2.fontFamily,
    color: '#fff',
  },
  emailText: {
    fontSize: typography.body.fontSize,
    fontFamily: typography.body.fontFamily,
    color: colors.textAlternative || '#aaa',
    marginTop: 4,
  },
  statsContainer: {
    flexDirection: 'row',
    gap: spacing.sm || 10,
    marginBottom: spacing.md,
  },
  statBox: {
    flex: 1,
    backgroundColor: colors.surface || '#1e1e1e',
    padding: spacing.md || 16,
    borderRadius: 16,
    alignItems: 'center',
    justifyContent: 'center',
    gap: 6,
  },
  statNumber: {
    fontSize: typography.h1.fontSize,
    fontWeight: typography.h1.fontWeight,
    color: colors.primary || '#fff',
  },
  statLabel: {
    fontSize: typography.caption.fontSize,
    color: colors.textAlternative || '#aaa',
    textAlign: 'center',
  },
  centerInfoCard: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: colors.surface || '#1e1e1e',
    padding: spacing.md || 16,
    borderRadius: 16,
    gap: 10,
  },
  centerText: {
    fontSize: typography.body.fontSize,
    color: colors.textAlternative || '#aaa',
  },
  footerButtonContainer: {
    width: '100%',
    paddingBottom: spacing.sm,
  },
});

export default ProfileScreen;