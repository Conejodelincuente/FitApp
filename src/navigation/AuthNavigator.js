import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { LoginScreen, RegistrationScreen } from '../screens/index';

const Stack = createNativeStackNavigator();

function AuthNavigator() {

  return(
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
        contentStyle: { backgroundColor: 'transparent' }
      }}
    >
      <Stack.Screen name="Login" component={LoginScreen} />
      <Stack.Screen name="Registration" component={RegistrationScreen} />

    </Stack.Navigator>
)}


export default AuthNavigator;