import { StyleSheet } from 'react-native';
import { spacing, colors, typography } from '../constants';

export const cardHeaderStyles = StyleSheet.create({
  cardContainer: {
    flexDirection: 'column',
    alignItems: 'center',
    height: 150,
    padding:spacing.md,
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
    backgroundColor: colors.surface,
  },
  rowContainer: {
    flex: 1,
    width:'100%',
    flexDirection:'row',
    alignItems: 'center',
    justifyContent:'space-between',
    gap: spacing.lg,
    marginTop: spacing.md,
  },
  title: {
    fontSize: typography.h3.fontSize,
    color: colors.textAlternative,
    fontWeight: typography.h3.fontWeight,
    alignSelf: 'flex-start',
  },
  maincolum: {
    flex:2,
  },
  subtitle: {
    fontSize: typography.h4.fontSize,
    color: colors.textAlternative,
    fontWeight: typography.caption.fontWeight,
  },
  icon: {
    color: colors.textAlternative,
    alignItems: 'center',
  },
});
