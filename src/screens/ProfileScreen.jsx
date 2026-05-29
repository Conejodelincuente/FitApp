import { View, Text } from 'react-native';
import { Header, Button } from '../components/index';
import { useContext } from 'react';
import { AuthContext } from '../context/AuthContext';
import { globalStyles } from '../styles/globalStyles';
import { SafeAreaView } from 'react-native-safe-area-context';
import { colors } from '../styles/constants';

function ProfileScreen() {
  const { user, logout } = useContext(AuthContext);

  return (
    <SafeAreaView style={globalStyles.safeAreaContainer}>
      <View>
        <Header name="Perfil" />
      </View >
      <View style={{ flex: 1, padding: 20 }}>
        <Text style={{ color: 'white', marginBottom: 10 }}>
          ProfileScreen - Mi perfil{' '}
        </Text>
        <View style={{ flex: 1 }}/>
        <Button
          label="Cerrar Sesión"
          onPress={logout}
          iconName="log-out-outline"
        />
      </View>
    </SafeAreaView>
  );
}

export default ProfileScreen;
