import PropTypes from 'prop-types';
import React from 'react';
import {
  TouchableOpacity,
  StyleSheet,
  Image,
  ViewPropTypes,
} from 'react-native';

import { Images } from '../assets';

const BackButton = ({ onPress, style }) => (
  <TouchableOpacity onPress={onPress} style={[styles.backButtonWrapper, style]}>
    <Image resizeMode="contain" style={styles.image} source={Images.BACK} />
  </TouchableOpacity>
);

const styles = StyleSheet.create({
  backButtonWrapper: {
    paddingVertical: 8,
    paddingHorizontal: 16,
  },
  image: {
    height: 16,
    width: 16,
  },
});

BackButton.propTypes = {
  onPress: PropTypes.func.isRequired,
  style: ViewPropTypes.style,
};

BackButton.defaultProps = {
  style: {},
};

export default BackButton;
