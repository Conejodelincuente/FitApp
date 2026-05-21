import { StyleSheet } from 'react-native';
import { spacing, colors, typography } from '../constants';

export const sectionTitleLinkwStyles = StyleSheet.create({
  container: {
    height: 'auto',
    backgroundColor: colors.surfaceSecondary,
    width: '100%',
    flexDirection: 'colum',
    alignItems: 'center',
    gap: spacing.mm,
    margin: spacing.mm,
    paddingHorizontal: spacing.mm,
    borderRadius: 8,
  },
   textTitle: {
    fontSize: typography.h3.fontSize,
    fontWeight: '500',
    textAlign: 'start',
    color:colors.textPrimary,
},
   textLink: {
    fontSize: typography.caption4.fontSize,
    fontWeight: '200',
    textAlign: 'start',
    color:colors.textPrimary,
},
});
