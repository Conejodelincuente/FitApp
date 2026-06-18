import { StyleSheet } from 'react-native';
import { spacing, colors, typography } from '../constants';


export const confirmModalStyles = {
  overlay: {
    flex: 1,
    backgroundColor: colors.surfaceTrans,
    justifyContent: 'center',
    alignItems: 'center',
  },
  modalContainer: {
    backgroundColor: colors.surfaceSecondary,
    borderRadius: 16,
    padding: spacing.lg,
    width: '80%',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 8,
    elevation: 10,
  },
  icon: {
    marginBottom: spacing.md,
  },
  title: {
    fontSize: typography.h3.fontSize,
    fontWeight: '500' ,
    color: colors.textPrimary,
    marginBottom: spacing.lg,
    textAlign: 'center',
  },
  description: {
    ...typography.body,
    color: colors.textPrimary,
    textAlign: 'center',
    marginBottom: spacing.lg,
    lineHeight: 20,
  },
  buttonsContainer: {
    flexDirection: 'row',
    gap: spacing.sm,
    width: '100%',
  },
};