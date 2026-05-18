import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Header } from '../components';
import {
  HomeScreen,
  ClassesScreen,
  ProfileScreen,
} from '../screens';

const Tab = createBottomTabNavigator();

function TabNavigator() {
  return (
    <Tab.Navigator
    screenOptions={({ route }) => ({
    header: () => <Header name={route.name} />,
  })}
    >
      <Tab.Screen
        name="Home"
        component={HomeScreen}
        options={{ headerShown: false }}
      />
      <Tab.Screen
        name="Class"
        component={ClassesScreen}
        options={{ headerShown: false }}
      />
      <Tab.Screen
        name="Profile"
        component={ProfileScreen}
        options={{ headerShown: false }}
      />
    </Tab.Navigator>
  );
}
export default TabNavigator;
