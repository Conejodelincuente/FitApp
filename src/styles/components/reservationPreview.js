import { StyleSheet } from 'react-native';
import { spacing, colors, typography } from '../constants';

export const reservationPreviewStyles = StyleSheet.create({
  container: {
    height:'65',
    backgroundColor:colors.surfaceSecondary,
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    gap: spacing.mm,
    margin: spacing.xxs,
    paddingHorizontal: spacing.mm,
    borderRadius: 8,
  },
  textTitle: {
    textAlign: 'start',
    fontSize: typography.h3.fontSize,
    fontWeight: '500',
    textAlign: 'start',
    color: colors.textPrimary,
  },
  textSecndary: {
    fontSize: typography.h4.fontSize,
    fontWeight: 400,
    textAlign: 'start',
    color: colors.textPrimary,
    marginLeft: spacing.md,
  },
  dateColumn: {
    alignItems: 'center',
    justifyContent: 'center',
    minWidth: 55,
    paddingHorizontal: spacing.xxs,
  },
});
