import React from 'react';
import { StyleSheet, TouchableOpacity, ViewPropTypes } from 'react-native';
import PropTypes from 'prop-types';

import { Colors } from '../assets';

const ArrowLeft = ({ style, onPress, disabled }) => {
  return (
    <TouchableOpacity
      style={[styles.arrowLeftWrapper, style, disabled ? styles.disabled : {}]}
      activeOpacity={disabled ? 1 : 0.2}
      onPress={() => !disabled && onPress()}
    />
  );
};

const styles = StyleSheet.create({
  arrowLeftWrapper: {
    width: 0,
    height: 0,
    backgroundColor: 'transparent',
    borderStyle: 'solid',
    borderLeftWidth: 12,
    borderRightWidth: 12,
    borderBottomWidth: 16,
    borderLeftColor: 'transparent',
    borderRightColor: 'transparent',
    borderBottomColor: Colors.PRIMARY,
    transform: [{ rotate: '-90deg' }],
    margin: 0,
    borderWidth: 0,
    borderColor: 'transparent',
  },
  disabled: {
    borderBottomColor: Colors.GRAY,
  },
});

ArrowLeft.propTypes = {
  style: ViewPropTypes.style,
  onPress: PropTypes.func.isRequired,
  disabled: PropTypes.bool.isRequired,
};

ArrowLeft.defaultProps = {
  style: {},
};

export default ArrowLeft;
