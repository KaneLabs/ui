import React from 'react';
import { View, Image } from 'react-native';
import { BodyText, Avatar } from 'ui';
import EStyleSheet from 'react-native-extended-stylesheet';

export const ProductSmall = ({ id, uri }) => {
  console.log('uri', uri);
  return (
    <View style={styles.avatarContainer}>
      {id && uri ? (
        <Avatar source={{ uri }} size={28} style={styles.avatar} />
      ) : (
        <BodyText>{id}</BodyText>
      )}
    </View>
  );
};

const styles = EStyleSheet.create({
  avatarContainer: {
    height: 28,
    width: 28,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '$canvas',
    overflow: 'hidden',
  },
  avatar: { marginHorizontal: 6 },
});
