import { StyleSheet } from 'react-native';
import { spacing } from './constants/index.js';
import { SafeAreaView } from 'react-native-safe-area-context';

export const globalStyles = StyleSheet.create({
  containerMain : {
    flex: 1,
    justifyContent: 'center',
    padding: spacing.sm
  },
  containerRow : {
    flex: 1,
    flexDirection:'row',
    justifyContent: 'center',
    padding: spacing.sm
  },

});
