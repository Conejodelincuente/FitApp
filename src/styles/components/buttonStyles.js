import { StyleSheet } from 'react-native';
import { spacing, colors, typography } from '../constants';

export const buttonStyles = StyleSheet.create({
  primary: {
    backgroundColor: colors.primary,
    borderRadius: 12,
    paddingVertical: spacing.md,
    paddingHorizontal: spacing.lg,
    alignItems: 'center',
    justifyContent: 'center',
  },
  primaryText: {
    color: colors.background,
    fontSize: typography.button.fontSize,
    fontWeight: typography.button.fontWeight,
    letterSpacing:spacing.xxxs,
  },
  outLine:{
    backgroundColor:'transparent',
    borderRadius: 12,
    borderWidth:1,
    borderColor:colors.borderwihte,
    paddingVertical: spacing.md,
    paddingHorizontal: spacing.lg,
    margin:spacing.md,
    alignItems: 'center',
    justifyContent: 'center',
  },
  icon:{
    paddingVertical: spacing.md,
    paddingHorizontal: spacing.lg,
    alignItems: 'center',
    justifyContent: 'center',
  },
});