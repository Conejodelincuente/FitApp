import { NavigationContainer } from '@react-navigation/native';
import { useContext } from 'react';
import { ActivityIndicator, View } from 'react-native';
import { AuthContext } from '../context/AuthContext';
import { LoginScreen } from '../screens';
import TabNavigator from './TabNavigator';
import AuthNavigation from './AuthNavigator';
import { globalStyles } from '../styles/globalStyles';
import { colors } from '../styles/constants';
import AuthNavigator from './AuthNavigator';

function RootNavigator() {
  const { isLogin, loading } = useContext(AuthContext);

  if (loading) {
    return (
      <View style={globalStyles.containerMain}>
        <ActivityIndicator size="large" color={colors.primary} />
      </View>
    );
  }

  return (
    <NavigationContainer>
      {isLogin ? <TabNavigator /> : <AuthNavigator/>}
    </NavigationContainer>
  );
}

export default RootNavigator;
