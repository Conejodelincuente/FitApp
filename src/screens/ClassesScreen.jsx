import {
  View,
  FlatList,
  ActivityIndicator,
  Text,
  StyleSheet,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useContext, useMemo } from 'react';
import { AuthContext } from '../context/AuthContext';
import ClassListComp from '../components/ClassListComp';
import Header from '../components/Header';
import SectionTitleLinkComp from '../components/SectionTitleLinkComp';
import { colors, spacing, typography } from '../styles/constants';
import { globalStyles } from '../styles/globalStyles';
import { Ionicons } from '@expo/vector-icons';

function ClassesScreen({ navigation }) {
  const { classes, userData, loading } = useContext(AuthContext);

  const filteredClasses = useMemo(() => {
    if (!classes) return [];
    return classes.filter(
      (item) => item.sportCenterId === userData?.sportCenterId
    );
  }, [classes, userData?.sportCenterId]);

  if (loading || !userData || !classes) {
    return (
      <View
        style={[
          globalStyles.safeAreaContainer,
          styles.centeredLoading,
        ]}
      >
        <ActivityIndicator size="large" color={colors.primary} />
      </View>
    );
  }

  return (
    <SafeAreaView style={globalStyles.safeAreaContainer}>
      <Header name="Clases" />

      <View
        style={[
          globalStyles.containerMain,
          { alignItems: 'stretch' },
        ]}
      >
        {userData?.sportCenterName && (
          <View style={styles.centerBadge}>
            <Ionicons
              name="location-sharp"
              size={14}
              color={colors.primary || '#E74C3C'}
            />
            <Text style={styles.centerBadgeText}>
              Sede: {userData.sportCenterName}
            </Text>
          </View>
        )}

        <SectionTitleLinkComp
          title={'Horario Disponible'}
          linkText={''}
        >
          <FlatList
            data={filteredClasses}
            renderItem={({ item }) => (
              <ClassListComp item={item} navigation={navigation} />
            )}
            keyExtractor={(item) => item.id}
            showsVerticalScrollIndicator={false}
            contentContainerStyle={styles.listPadding}
            ListEmptyComponent={
              <View style={styles.emptyContainer}>
                <View style={styles.iconCircle}>
                  <Ionicons
                    name="barbell-outline"
                    size={32}
                    color={colors.textDisabled || '#666'}
                  />
                </View>
                <Text style={styles.emptyTextTitle}>
                  No hay clases programadas
                </Text>
                <Text style={styles.emptyTextSubtitle}>
                  Parece que no hay sesiones disponibles en este
                  centro para las próximas horas.
                </Text>
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
  centeredLoading: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  centerBadge: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: colors.surface || '#1e1e1e',
    paddingVertical: spacing.xs || 8,
    paddingHorizontal: spacing.sm || 12,
    borderRadius: 20,
    alignSelf: 'flex-start',
    gap: 6,
    marginLeft: spacing.sm || 8,
    marginBottom: spacing.xs || 4,
  },
  centerBadgeText: {
    color: colors.textAlternative || '#aaa',
    fontSize: typography.caption.fontSize,
    fontFamily: typography.caption.fontFamily,
    fontWeight: '500',
  },
  listPadding: {
    paddingHorizontal: spacing.sm || 8,
    paddingVertical: spacing.xs || 6,
    flexGrow: 1,
  },
  emptyContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 40,
    paddingHorizontal: spacing.md || 16,
  },
  iconCircle: {
    width: 64,
    height: 64,
    borderRadius: 32,
    backgroundColor: colors.surface || '#1e1e1e',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: spacing.sm || 12,
  },
  emptyTextTitle: {
    color: '#fff',
    fontSize: typography.h3.fontSize,
    fontWeight: typography.h3.fontWeight,
    fontFamily: typography.h3.fontFamily,
    marginBottom: 6,
  },
  emptyTextSubtitle: {
    color: colors.textDisabled || '#888',
    fontSize: typography.body.fontSize,
    fontFamily: typography.body.fontFamily,
    textAlign: 'center',
    lineHeight: 20,
  },
});

export default ClassesScreen;
