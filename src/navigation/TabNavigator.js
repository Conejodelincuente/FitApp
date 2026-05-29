import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Header } from '../components';
import { Ionicons } from '@expo/vector-icons';
import {
  HomeScreen,
  ClassesScreen,
  ProfileScreen,
} from '../screens';
import { colors } from '../styles/constants';

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
        options={{
          tabBarIcon: ({ color, size, focused }) => (
            <Ionicons
              name={focused ? 'home' : 'home-outline'}
              size={size}
              color={focused ? colors.primary : colors.textPrimary}
            />
          ),
          tabBarLabel: 'Inicio',
          tabBarLabelStyle: ({ focused }) => ({
            color: focused ? colors.primary : olors.textPrimary,
          }),
          headerShown: false,
        }}
      />
      <Tab.Screen
        name="Class"
        component={ClassesScreen}
        options={{ tabBarIcon: ({ color, size, focused }) => (
            <Ionicons
              name= {focused ? "barbell" : "barbell-outline"}
              size={size}
              color={focused ? colors.primary : colors.textPrimary}
            />
          ),
          tabBarLabel: 'Clases',
          tabBarLabelStyle: ({ focused }) => ({
            color: focused ? colors.primary : colors.textPrimary,
          }),
          headerShown: false, }}
      />
      <Tab.Screen
        name="Profile"
        component={ProfileScreen}
        options={{ tabBarIcon: ({ color, size, focused }) => (
            <Ionicons
              name={focused ? "person" : "person-outline" }
              size={size}
              color={focused ? colors.primary : colors.textPrimary}
            />
          ),
          tabBarLabel: 'Perfil',
          tabBarLabelStyle: ({ focused }) => ({
            color: focused ? colors.primary : colors.textPrimary,
          }),
          headerShown: false, }}
      />
    </Tab.Navigator>
  );
}
export default TabNavigator;
