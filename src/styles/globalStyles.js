import { StyleSheet } from 'react-native';
import { spacing, colors } from './constants';

export const globalStyles = StyleSheet.create({
  containerMain : {
    flex: 1,
    padding: spacing.sm,
    alignItems: 'center',
  },
  containerRow : {
    flex: 1,
    flexDirection:'row',
    justifyContent: 'center',
    padding: spacing.sm
  },
  gridRow : {
    flexDirection:'row',
    padding: spacing.sm,
    gap: spacing.sm,
    width: '100%',
  },
  containerGeneral : {
    padding: spacing.mm,
    margin: spacing.mm,
  },
  safeAreaContainer :{
    flex: 1,
    backgroundColor: colors.backgroundDark
  },
});
