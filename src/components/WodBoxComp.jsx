import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { spacing, colors, typography } from '../styles/constants/index';

export default function WodBoxComp({ title = 'Entrenamiento',subtitle='subtitulo', description }) {
  if (!description) return null;

  return (
    <View style={styles.wodContainer}>
      <Text style={styles.wodTitle}>{title}</Text>
      <Text style={styles.wodSubTitle}>{subtitle}</Text>
      <Text style={styles.wodBody}>{description}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  wodContainer: {
    backgroundColor: colors.surfaceTrans,
    padding: spacing.md,
    borderRadius: 12,
    marginTop: spacing.md,
    width: '100%',
  },
  wodTitle: {
    color: colors.textAlternative || '#888',
    fontSize: typography.h2.fontSize,
    fontWeight: typography.h2.fontWeight,
    textTransform: 'uppercase',
    marginBottom: spacing.mm,
  },
  wodSubTitle: {
    color: colors.textAlternative || '#888',
    fontSize: typography.h3.fontSize,
    fontWeight: typography.h3.fontWeight,
    marginBottom: spacing.xs,
  },
  wodBody: {
    color: colors.textAlternative || '#fff',
    fontSize: typography.body.fontSize,
    lineHeight: typography.body.lineHeight,
  },
});