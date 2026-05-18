import { NavigationContainer } from '@react-navigation/native';
import { useContext } from 'react';
import { AuthContext } from '../context/AuthContext';
import { LoginScreen } from '../screens';
import TabNavigator from './TabNavigator';

function RootNavigator() {
  const { isLogin } = useContext(AuthContext);
  return (
    <NavigationContainer>
      {isLogin ? <TabNavigator /> : <LoginScreen />}
    </NavigationContainer>
  );
}

export default RootNavigator;
