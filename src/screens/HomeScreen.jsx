import { View, Text } from 'react-native';
import Header from '../components/Header';
import CardHeaderComp from '../components/CardHeader';
import { globalStyles } from '../styles/globalStyles';
import { SafeAreaView } from 'react-native-safe-area-context';

function HomeScreen() {
  return (
    <SafeAreaView>
      <View style={globalStyles.containerMain}>
      <Header name="Inicio" />
      <CardHeaderComp/>
    </View>
    </SafeAreaView>

  );
}

export default HomeScreen