import { View, Text } from 'react-native';
import RNPickerSelect from 'react-native-picker-select';
import { colors, spacing, typography } from '../styles/constants';

function PickerComp({
  label,
  value,
  onValueChange,
  items,
  placeholder,
  error,
}) {
  return (
    <View style={{ marginBottom: spacing.md }}>
      <Text
        style={{
          fontSize: typography.caption.fontSize,
          fontWeight: typography.caption.fontWeight,
          marginBottom: spacing.xs,
          color: colors.textPrimary,
        }}
      >
        {label}
      </Text>
      <RNPickerSelect
        onValueChange={onValueChange}
        items={items}
        value={value}
        placeholder={placeholder}
        style={{
          inputIOS: {
            fontSize: 16,
            paddingVertical: 12,
            paddingHorizontal: 10,
            borderWidth: 0.5,
            borderColor: colors.borderSubtle,
            borderRadius: 12,
            color: colors.textPrimary,
            paddingRight: 30,
            backgroundColor: colors.background,
          },
          inputAndroid: {
            fontSize: 16,
            paddingHorizontal: 10,
            paddingVertical: 8,
            borderWidth: 0.5,
            borderColor: colors.borderSubtle,
            borderRadius: 12,
            color: colors.textPrimary,
            paddingRight: 30,
            backgroundColor: colors.background,
          },
          placeholderTextColor: colors.error,
          iconContainer: {
            top: 10,
            right: 10,
            backgroundColor: colors.background,
          },

        }}
      />
      {error && (
        <Text
          style={{
            color: colors.error,
            fontSize: typography.caption.fontSize,
            marginTop: spacing.xs,
          }}
        >
          {error}
        </Text>
      )}
    </View>
  );
}

export default PickerComp;