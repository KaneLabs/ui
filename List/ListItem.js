import React from 'react';
import { ListItem as ListItemBread } from 'material-bread';
import EStyleSheet from 'react-native-extended-stylesheet';

export const ListItem = ({ style, ...props }) => (
  <ListItemBread
    style={[styles.listItem, style]}
    textStyle={styles.primaryText}
    secondaryTextStyle={styles.secondaryText}
    {...props}
  />
);

const styles = EStyleSheet.create({
  listItem: {},
  primaryText: {
    color: '$textColor.primary',
  },
  secondaryText: {
    color: '$textColor.secondary',
  },
});
