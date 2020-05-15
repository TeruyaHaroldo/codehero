import React from 'react';
import { StyleSheet, View } from 'react-native';
import PropTypes from 'prop-types';

import { Colors } from '../../assets';

const CharacterDetail = ({ navigation }) => {
  return <View styles={styles.screenWrapper} />;
};

const styles = StyleSheet.create({
  screenWrapper: {
    flex: 1,
    backgroundColor: Colors.DEFAULT_BACKGROUND,
  },
});

CharacterDetail.propTypes = {
  navigation: PropTypes.shape({
    navigate: PropTypes.func.isRequired,
  }).isRequired,
};

export default CharacterDetail;
