import React from 'react';
import { ActivityIndicator, StyleSheet, ViewPropTypes } from 'react-native';

import { Colors } from '../assets';

const Loading = ({ style }) => {
  return (
    <ActivityIndicator
      size="large"
      color={Colors.PRIMARY}
      style={[styles.loadingWrapper, style]}
    />
  );
};

const styles = StyleSheet.create({
  loadingWrapper: {
    backgroundColor: 'transparent',
  },
});

Loading.propTypes = {
  style: ViewPropTypes.style,
};

Loading.defaultProps = {
  style: {},
};

export default Loading;
