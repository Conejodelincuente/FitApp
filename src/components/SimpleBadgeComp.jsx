import { View, Text, StyleSheet } from 'react-native';
import { colors, spacing, typography } from '../styles/constants/index';

export default function SimpleBadgeComp({ text, backgroundColor = colors.primary }) {
  if (!text) return null;

  return (
    <View style={[styles.badge, { backgroundColor }]}>
      <Text style={styles.badgeText}>{text}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  badge: {
    paddingHorizontal: spacing.sm,
    paddingVertical: 4,
    borderRadius: 20,
    alignSelf: 'flex-start',
  },
  badgeText: {
    color: '#ffffff',
    fontSize: typography.caption.fontSize,
    fontWeight: '700',
    fontFamily: typography.caption.fontFamily,
  },
});