import React from 'react';
import PropTypes from 'prop-types';
import { View } from 'react-native';
import { Marker } from 'react-native-maps';
import EStyleSheet from 'react-native-extended-stylesheet';
import { Icon } from 'ui';
import theme from 'theme';

const latLngType = { latitude: PropTypes.number, longitude: PropTypes.number };

export const LocationMarker = ({ coordinate }) => (
  <Marker coordinate={coordinate}>
    <View style={styles.marker}>
      <View style={styles.circle} />
    </View>
  </Marker>
);

LocationMarker.propTypes = {
  coordinate: PropTypes.shape(latLngType).isRequired,
};

const iconSize = theme.$iconSize / 2;

const styles = EStyleSheet.create({
  marker: {

  },
  triabgle: {

  },
  pin: {
    color: '$iconColor',
    height: iconSize,
    width: iconSize,
  },
  circle: {
    backgroundColor: 'rgba(255,255,255,0.67)',
    height: iconSize,
    width: iconSize,
    borderRadius: iconSize,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
