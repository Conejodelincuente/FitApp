import { TextInput, Text, View } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { inputStyles } from '../styles/components/inputStyles.js';
import { spacing, colors } from '../styles/constants';
import { useState } from 'react';

function TextInputComp({
  label,
  onChangeText,
  value,
  iconName,
  placeholder,
  secureTextEntry = false,
  error,
}) {
  const [isFocused, setIsFocused] = useState(false);

  return (
    <View style={inputStyles.maincontainer}>
      <View style={inputStyles.labelContainer}>
        <Ionicons
          style={inputStyles.icon}
          name={iconName}
          size={20}
          color={colors.textSecondary}
        />
        <Text style={inputStyles.label}>{label}</Text>
      </View>
      <View
        style={[
          inputStyles.inputContainer,
          isFocused && inputStyles.inputContainerFocus,
        ]}
      >
        <TextInput
          style={inputStyles.inputText}
          placeholder={placeholder}
          placeholderTextColor={inputStyles.disableText.color}
          value={value}
          onChangeText={onChangeText}
          onFocus={() => setIsFocused(true)}
          onBlur={() => setIsFocused(false)}
        />
      </View>
      {error && (
        <Text style={inputStyles.error}>{error}</Text>
      )}
    </View>
  );
}

export default TextInputComp;
