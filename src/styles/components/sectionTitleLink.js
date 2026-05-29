import { StyleSheet } from 'react-native';
import { spacing, colors, typography } from '../constants';

export const sectionTitleLinkStyles = StyleSheet.create({
  mainContainer: {
    backgroundColor: colors.surface,
    width: '100%',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'space-between',
    gap: spacing.mm,
    margin: spacing.mm,
    paddingHorizontal: spacing.mm,
    paddingVertical: spacing.mm,
    borderRadius: 8,
  },
  titleContainer: {
    flexDirection: 'row',
    width: '100%',
    justifyContent: 'space-between',
    gap: spacing.mm,
    alignItems: 'center',
  },
  linkContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  bodyContainer: {
    height:'auto',
    width: '100%',
    flexDirection: 'column',
  },
   textTitle: {
    fontSize: typography.h3.fontSize,
    fontWeight: '500',
    textAlign: 'start',
    color:colors.textAlternative,
},
   textLink: {
    fontSize: typography.button.fontSize,
    fontWeight: '400',
    textAlign: 'start',
    color:colors.textAlternative,

},
});
