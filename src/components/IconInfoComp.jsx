import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { IconInfoCompStyles } from '../styles/components/iconInfoCompStyles';
import { colors } from '../styles/constants/colors';

export default function IconInfoComp({ iconName, title, data }) {
  return (
    <View style={IconInfoCompStyles.container}>
      {/* Icono dinámico */}
      <Ionicons
        name={iconName}
        size={22}
        color={colors.textAlternative || '#aaa'}
      />

      {/* Título o etiqueta del dato */}
      <Text style={IconInfoCompStyles.titleText}>{title}</Text>

      {/* El dato real en sí */}
      <Text style={IconInfoCompStyles.dataText}>{data}</Text>
    </View>
  );
}
