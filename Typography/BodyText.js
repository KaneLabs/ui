import React from 'react';
import EStyleSheet from 'react-native-extended-stylesheet';
import { BodyText as BodyTextBread } from 'material-bread';
import { Text } from 'react-native';

export const BodyText = ({ text, style, children, gutterBottom }) => {
  return (
    <BodyTextBread type={1} style={[styles.body, style, gutterBottom && { marginBottom: 8 }]} text={text || children} />
  );
};

const styles = EStyleSheet.create({
  body: {
    fontSize: 16,
    lineHeight: 16,
    fontWeight: '400',
    letterSpacing: 0.1,
  },
});
