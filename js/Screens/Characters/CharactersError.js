import React from 'react';
import { Image, StyleSheet, Text, TouchableOpacity } from 'react-native';
import PropTypes from 'prop-types';

import { Colors, Images } from '../../assets';

const CharactersError = ({ onPress }) => {
  return (
    <>
      <Image
        resizeMode="contain"
        style={styles.image}
        source={Images.ATTENTION}
      />
      <Text style={styles.message}>Falha na busca por heróis.</Text>
      <TouchableOpacity style={styles.linkWrapper} onPress={onPress}>
        <Text style={styles.linkText}>Tentar Novamente</Text>
      </TouchableOpacity>
    </>
  );
};

const styles = StyleSheet.create({
  image: {
    height: 48,
    alignSelf: 'center',
    marginTop: '20%',
  },
  message: {
    marginTop: 20,
    marginBottom: 30,
    textAlign: 'center',
    color: Colors.GRAY,
    fontFamily: 'Roboto',
  },
  linkWrapper: {
    backgroundColor: 'transparent',
  },
  linkText: {
    color: Colors.LINK,
    textAlign: 'center',
    fontFamily: 'Roboto',
  },
});

CharactersError.propTypes = {
  onPress: PropTypes.func.isRequired,
};

export default CharactersError;
