import { StyleSheet } from 'react-native';
import { spacing } from './constants';

export const globalStyles = StyleSheet.create({
  containerMain : {
    flex: 1,
    padding: spacing.sm
  },
  containerRow : {
    flex: 1,
    flexDirection:'row',
    justifyContent: 'center',
    padding: spacing.sm
  },

});
