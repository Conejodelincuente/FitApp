import { StyleSheet } from 'react-native';
import { spacing, colors, typography } from '../constants';

export const IconInfoCompStyles = StyleSheet.create({
container: {
    flex: 1,
    backgroundColor: colors.surfaceTrans,
    borderRadius: 12,
    paddingVertical: spacing.md,
    paddingHorizontal: spacing.sm,
    alignItems: 'center',
    justifyContent: 'center',
    gap: 4,
  },
  titleText: {
    color: colors.textAlternative || '#aaa',
    fontSize: 12,
    fontWeight: '500',
    textTransform: 'uppercase',
  },
  dataText: {
    color: colors.textAlternative || '#ffffff',
    fontSize: 16,
    fontWeight: '900',
    textAlign: 'center',
  },
})