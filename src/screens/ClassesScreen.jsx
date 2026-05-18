import { View, Text } from 'react-native';
import { globalStyles } from '../styles/globalStyles';
import { SafeAreaView } from 'react-native-safe-area-context';
import Header from '../components/Header';

function ClassesScreen() {
  return (
    <SafeAreaView>
      <View style={globalStyles.containerMain}>
        <Header name="Clases" />
        <Text>Class Screen - Mis clases </Text>
      </View>
    </SafeAreaView>
  );
}

export default ClassesScreen;
