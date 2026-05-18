import { StyleSheet } from 'react-native';
import { spacing, colors, typography } from '../constants';

export const HeaderStyles = StyleSheet.create({
  headerContainer: {
    flexDirection: 'row',
    alignItems:'center',
    justifyContent:'space-between',
    height:64,
    paddingLeft:spacing.md,
    paddingRight:spacing.md,
    backgroundColor: colors.background,
  },
  titleContainer:{
    flex:2,
    alignItems:'center',
  },
  title:{
    fontSize: typography.h2.fontSize,
    color: colors.textAlternative,
    fontWeight:typography.h2.fontWeight,

  },
  icon:{
    color:colors.textAlternative,
    alignItems:'center'
  },
});
