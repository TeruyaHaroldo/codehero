import React from 'react';
import { Image, StyleSheet, Text, TouchableOpacity } from 'react-native';

import { Colors } from '../../assets';
import { CharacterPropTypes } from '../../PropTypesHelper';

const CharactersListItem = ({ item }) => {
  return (
    <TouchableOpacity onPress={() => {}} style={styles.wrapper}>
      <Image
        style={styles.image}
        source={{
          uri: `${item.thumbnail.path}.${item.thumbnail.extension}`,
        }}
      />
      <Text>{item.name}</Text>
    </TouchableOpacity>
  );
};

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
    height: 58,
    width: 58,
    borderRadius: 29,
    marginRight: 25,
    marginLeft: 25,
  },
});

CharactersListItem.propTypes = {
  item: CharacterPropTypes.isRequired,
};

export default CharactersListItem;
