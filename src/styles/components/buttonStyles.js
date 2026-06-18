import { StyleSheet } from 'react-native';
import { spacing, colors, typography } from '../constants';

export const buttonStyles = StyleSheet.create({
  primary: {
    flexDirection:'row',
    gap:spacing.lg,
    alignSelf: 'center',
    backgroundColor: colors.primary,
    borderRadius: 12,
    paddingVertical: spacing.md,
    paddingHorizontal: spacing.lg,
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonText: {
    color: colors.textPrimary,
    fontSize: typography.button.fontSize,
    fontWeight: typography.button.fontWeight,
    letterSpacing:spacing.xxxs,
  },
  outLine:{
    flexDirection:'row',
    gap:spacing.mm,
    backgroundColor:'transparent',
    borderRadius: 12,
    borderWidth:1,
    borderColor:colors.borderStrong,
    paddingVertical: spacing.md,
    paddingHorizontal: spacing.md,
    margin:spacing.md,
    alignItems: 'center',
    justifyContent: 'center',
  },
  simple:{
    flexDirection:'row',
    gap:spacing.lg,
    backgroundColor:'transparent',
    borderRadius: 12,
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