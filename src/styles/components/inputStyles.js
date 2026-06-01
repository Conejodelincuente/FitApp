import { StyleSheet } from "react-native";
import { typography,spacing,colors } from "../constants/index.js";

export const inputStyles = StyleSheet.create({
  maincontainer: {
    marginBottom: spacing.md,
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: colors.surfaceSecondary,
    borderRadius: 8,
    paddingHorizontal: spacing.md,
  },
    inputContainerFocus: {
      borderColor: colors.primary,
      borderWidth: 1,
    },
  inputText:{
    flex:1,
    paddingVertical: spacing.sm,
    fontSize: typography.body.fontSize,
    color: colors.textAlternaty,
  },
  disableText:{
    color: colors.textDisabled
  },
  errorText:{
    color: colors.error
  },
  labelContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: spacing.xs,
  },
  label: {
    fontSize: typography.caption.fontSize,
    fontWeight: typography.caption.fontWeight,
    color: colors.textAlternaty,

  },
  icon: {
      marginRight: spacing.sm,
    },
})