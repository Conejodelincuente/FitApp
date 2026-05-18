import { View, Text } from 'react-native';
import { globalStyles } from '../styles/globalStyles';
import { SafeAreaView } from 'react-native-safe-area-context';
import Header from '../components/Header';

function ProfileScreen() {
  return (
    <SafeAreaView>
      <View style={globalStyles.containerMain}>
        <Header name="Perfil" />
        <Text>ProfileScreen - Mi perfil </Text>
      </View>
    </SafeAreaView>
  );
}

export default ProfileScreen;
