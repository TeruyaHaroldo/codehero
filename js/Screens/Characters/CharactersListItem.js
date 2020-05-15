import React from 'react';
import { Image, StyleSheet, Text, TouchableOpacity } from 'react-native';
import PropTypes from 'prop-types';

import { Colors } from '../../assets';
import { CharacterPropTypes } from '../../PropTypesHelper';

const CharactersListItem = ({ item, onPress }) => (
  <TouchableOpacity onPress={onPress} style={styles.wrapper}>
    <Image
      style={styles.image}
      source={{
        uri: `${item.thumbnail.path}.${item.thumbnail.extension}`,
      }}
    />
    <Text style={styles.name}>{item.name}</Text>
  </TouchableOpacity>
);

const styles = StyleSheet.create({
  wrapper: {
    flexDirection: 'row',
    paddingTop: 18,
    paddingBottom: 18,
    alignItems: 'center',
    borderBottomWidth: 1,
    borderBottomColor: Colors.PRIMARY,
  },
  image: {
    backgroundColor: Colors.DEFAULT_IMAGE_BACKGROUND,
    height: 58,
    width: 58,
    borderRadius: 29,
    marginRight: 25,
    marginLeft: 25,
  },
  name: {
    fontFamily: 'Roboto',
  },
});

CharactersListItem.propTypes = {
  item: CharacterPropTypes.isRequired,
  onPress: PropTypes.func.isRequired,
};

export default CharactersListItem;
