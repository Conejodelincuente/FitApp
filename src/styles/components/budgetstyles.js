import { StyleSheet } from 'react-native';
import { spacing, colors, typography } from '../constants';

export const budgetStyles = StyleSheet.create({
  mainContainer: {
    alignItems: 'center',
    gap:spacing.xs,
  },
  budgetContainer: {
    width: 40,
    height: 50,
    borderRadius: 10,
    backgroundColor: colors.surfaceTrans,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontSize: typography.caption.fontSize,
    color: colors.textAlternative,
  },
  icon: {
    color: colors.warning,
  },
});
