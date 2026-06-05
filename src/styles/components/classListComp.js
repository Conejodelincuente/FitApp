import { StyleSheet } from 'react-native';
import { spacing, colors, typography } from '../constants';

export const classListCompStyles = StyleSheet.create({
  cardWrapper: {
    marginVertical: spacing.xs,
    width: '100%',
  },
  container: {
    backgroundColor: colors.surface,
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: spacing.mm,
    paddingHorizontal: spacing.mm,
    borderRadius: 16,
    borderWidth: 1,
    borderColor: colors.borderSubtle,
    gap: spacing.sm,
  },
  containerActive: {
    borderColor: colors.success,
    backgroundColor: colors.surfaceTrans,
  },
  logo: {
    width: 48,
    height: 48,
    borderRadius: 12,
    backgroundColor: colors.backgroundLigth,
  },
  mainContent: {
    flex: 1,
    justifyContent: 'center',
    gap: 2,
  },
  className: {
    fontSize: typography.h3.fontSize,
    fontWeight: '700',
    color: colors.textAlternative,
  },
  classMeta: {
    fontSize: 11,
    fontWeight: '500',
    color: colors.primary,
  },
  instructorName: {
    fontSize: typography.caption.fontSize,
    color: colors.textAlternative,
    opacity: 0.8,
  },
  centerName: {
    fontSize: 11,
    color: colors.textDisabled,
  },

  // Nueva Columna independiente para Plazas
  spotsColumn: {
    alignItems: 'center',
    justifyContent: 'center',
    minWidth: 55,
    paddingHorizontal: spacing.xxs,
  },
  spotsCount: {
    fontSize: typography.body.fontSize,
    fontWeight: '700',
    color: colors.textAlternative,
  },
  spotsLabel: {
    fontSize: 10,
    color: colors.textDisabled,
    textAlign: 'center',
    marginTop: 2,
  },

  // Nueva Columna para el botón y texto vertical
  actionColumn: {
    alignItems: 'center',
    justifyContent: 'center',
    width: 80,
    gap: 2,
  },
  actionButton: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  actionText: {
    fontSize: 10,
    fontWeight: '600',
    color: colors.textDisabled,
    textAlign: 'center',
  },
});