import { View, Text, Image } from 'react-native';
import BudgetComp from './BudgetComp';
import { cardHeaderStyles } from '../styles/components/cardHeader';

export default function CardHeaderComp() {
  return (
    <View style={cardHeaderStyles.cardContainer}>
      <Text style={cardHeaderStyles.title}>
        Bienvenido Jorge
      </Text>
      <View style={cardHeaderStyles.rowContainer}>
        <Image
            source={{
              uri: 'https://previews.123rf.com/images/serkorkin/serkorkin1404/serkorkin140400025/27449159-man-logo-sign-for-sport-club-health-center-music-festival-etc.avif',
            }}
            style={{
              width: 60,
              height: 60,
              borderRadius: 30,
            }}
          />
        <View style={cardHeaderStyles.maincolum}>
          <Text style={cardHeaderStyles.title}>
            Fitnes park
          </Text>
          <Text style={cardHeaderStyles.subtitle}>
            12 class  368 Alumnos
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
