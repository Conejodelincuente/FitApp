import {View, Text } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { colors } from '../styles/constants';
import { HeaderStyles } from '../styles/components/headerStyles';

export default function Header({name}) {
  return (

    <View style={HeaderStyles.headerContainer}>
      <View style={HeaderStyles.titleContainer}>
        <Text style={HeaderStyles.title}>{name}</Text>
      </View>
      <Ionicons
        style={HeaderStyles.icon}
        name={'ellipsis-vertical-outline'}
        size={20}
        color={colors.textSecondary}
      />
    </View>
  );
}
