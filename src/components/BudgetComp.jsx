import { View, Text } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import {
  budgetStyles,
} from '../styles/components/budgetstyles';

export default function BudgetComp({
  iconName,
  label,
  credit
}) {
  return (
    <View style={budgetStyles.mainContainer}>
      <View style={budgetStyles.budgetContainer}>
        <Ionicons
          name={iconName}
          size={24}
          color={budgetStyles.icon.color}
        />
        <Text style={budgetStyles.text}>{label}</Text>
      </View>
      <Text style={budgetStyles.text}>{credit}</Text>

    </View>
  );
}
