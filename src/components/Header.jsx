import { View, Text, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { colors } from '../styles/constants';
import { HeaderStyles } from '../styles/components/headerStyles';

export default function Header({ name, onBack }) {
  return (
    <View style={HeaderStyles.headerContainer}>
      {onBack ? (
        <TouchableOpacity onPress={onBack} activeOpacity={0.7}>
          <Ionicons
            name="arrow-back"
            size={24}
            style={HeaderStyles.icon}
          />
        </TouchableOpacity>
      ) : (
        <View style={{ width: 24 }} />
      )}
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
