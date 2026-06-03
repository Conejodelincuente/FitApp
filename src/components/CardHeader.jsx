import { View, Text, Image, ActivityIndicator } from 'react-native';
import BudgetComp from './BudgetComp';
import { useUserProfile, useSportCenter } from '../hooks/index';
import { cardHeaderStyles } from '../styles/components/cardHeader';
import { colors } from '../styles/constants/colors';


export default function CardHeaderComp() {

  const { userProfile, loading: userLoading, error: userError } = useUserProfile();

  const {
    sportCenter,
    loading: centerLoading,
    error: centerError,
  } = useSportCenter(userProfile?.sportCenterId || null);

  const isLoading = userLoading || centerLoading;
  const hasError = userError || centerError;

  if (isLoading) {
    return (
      <View style={cardHeaderStyles.cardContainer}>
        <ActivityIndicator size="large" color={colors.primary} />
      </View>
    );
  }
  if (hasError) {
    return (
      <View style={cardHeaderStyles.cardContainer}>
        <Text style={{ color: colors.error }}>Error: {hasError}</Text>
      </View>
    );
  }

  return (
    <View style={cardHeaderStyles.cardContainer}>
      <Text style={cardHeaderStyles.title}>
        Bienvenido {userProfile?.firstName || 'Usuario'}
      </Text>
      <View style={cardHeaderStyles.rowContainer}>
        <Image
          source={{
            uri: sportCenter?.image,
          }}
          style={{
            width: 60,
            height: 60,
            borderRadius: 30,
          }}
        />
        <View style={cardHeaderStyles.maincolum}>
          <Text style={cardHeaderStyles.title}>
            {sportCenter?.name || 'Centro Deportivo'}
          </Text>
          <Text style={cardHeaderStyles.subtitle}>
            {sportCenter?.students || 0} Alumnos
          </Text>
        </View>
        <BudgetComp
          label={'Pro'}
          iconName={'flash-outline'}
          credit={'32/120'}
        />
      </View>
    </View>
  );
}
