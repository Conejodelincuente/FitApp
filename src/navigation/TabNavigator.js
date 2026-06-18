import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons } from '@expo/vector-icons';

// NAVEGADORES Y PANTALLAS PROPIOS
import ClassNavigator from './ClassNavigator';
import { HomeScreen, ProfileScreen } from '../screens';

// CONSTANTES SISTEMA DE DISEÑO
import { colors, spacing, typography } from '../styles/constants';

const Tab = createBottomTabNavigator();

function TabNavigator() {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,

        // COLORES DINÁMICOS
        tabBarActiveTintColor: colors.primary,
        tabBarInactiveTintColor: colors.textDisabled || '#888',

        // ESTILO GENERAL DE LA BARRA
        tabBarStyle: {
          backgroundColor: colors.surface || '#1e1e1e',
          borderTopWidth: 0,
          elevation: 5,
          shadowColor: '#000',
          shadowOffset: { width: 0, height: -2 },
          shadowOpacity: 0.1,
          shadowRadius: 4,
        },

        // ESTILO TEXTO
        tabBarLabelStyle: {
          fontSize: typography.caption.fontSize,
          fontFamily: typography.caption.fontFamily,
          fontWeight: '600',
        },
      }}
    >
      {/* PESTAÑA 1: INICIO */}
      <Tab.Screen
        name="Home"
        component={HomeScreen}
        options={{
          tabBarLabel: 'Inicio',
          tabBarIcon: ({ size, focused }) => (
            <Ionicons
              name={focused ? 'home' : 'home-outline'}
              size={size}
              color={
                focused
                  ? colors.primary
                  : colors.textDisabled || '#888'
              }
            />
          ),
        }}
      />

      {/* PESTAÑA 2: CLASES (Inyecta tu Stack con listado + detalle cascada) */}
      <Tab.Screen
        name="Class"
        component={ClassNavigator}
        options={{
          tabBarLabel: 'Clases',
          tabBarIcon: ({ size, focused }) => (
            <Ionicons
              name={focused ? 'barbell' : 'barbell-outline'}
              size={size}
              color={
                focused
                  ? colors.primary
                  : colors.textDisabled || '#888'
              }
            />
          ),
        }}
      />

      {/* PESTAÑA 3: PERFIL */}
      <Tab.Screen
        name="Profile"
        component={ProfileScreen}
        options={{
          tabBarLabel: 'Perfil',
          tabBarIcon: ({ size, focused }) => (
            <Ionicons
              name={focused ? 'person' : 'person-outline'}
              size={size}
              color={
                focused
                  ? colors.primary
                  : colors.textDisabled || '#888'
              }
            />
          ),
        }}
      />
    </Tab.Navigator>
  );
}

export default TabNavigator;
