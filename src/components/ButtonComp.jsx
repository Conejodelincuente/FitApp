import { TouchableOpacity, Text } from 'react-native'
import { buttonStyles } from '../styles/components/buttonStyles'

function Button( {label, variant='primary', onPress }) {
  return (
    <TouchableOpacity
        style={buttonStyles[variant]}
        onPress={onPress}
        >
      <Text style={buttonStyles[`${variant}Text`]}>{label}</Text>
    </TouchableOpacity>
  );
}

export default Button;