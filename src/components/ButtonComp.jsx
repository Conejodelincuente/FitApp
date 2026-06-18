import { TouchableOpacity, Text } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { buttonStyles } from '../styles/components/buttonStyles';

function Button({
  label,
  variant = 'primary',
  onPress,
  iconName = null,
  color,
  disabled = false,
}) {
  return (
    <TouchableOpacity
      style={[buttonStyles[variant], disabled && { opacity: 0.5 }]}
      onPress={onPress}
      disabled={disabled}
    >
      {iconName && (
        <Ionicons name={iconName} size={24} color={color} />
      )}
      {label && (
        <Text style={[buttonStyles.buttonText , color={color}]}>{label}</Text>
      )}
    </TouchableOpacity>
  );
}

export default Button;
