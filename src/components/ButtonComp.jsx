import { TouchableOpacity, Text } from 'react-native'
import { Ionicons } from '@expo/vector-icons';
import { buttonStyles } from '../styles/components/buttonStyles'

function Button( {label, variant='primary', text= 'primary' ,onPress, iconName = null, color }) {
  return (
    <TouchableOpacity
        style={buttonStyles[variant]}
        onPress={onPress}
        >
      {iconName && <Ionicons name={iconName} size={24} color={color} />}
      {label && <Text style={buttonStyles[`${text}Text`]}>{label}</Text>}
    </TouchableOpacity>
  );
}

export default Button;