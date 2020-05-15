import React from 'react';
import { StyleSheet, Text, View, TextInput, ViewPropTypes } from 'react-native';
import PropTypes from 'prop-types';

import { Colors } from '../../assets';

const CharactersSearch = ({ style, onChange, nameStartsWith }) => {
  return (
    <View style={[styles.charactersSearchWrapper, style]}>
      <Text style={styles.text}>Nome do Personagem</Text>
      <TextInput
        style={styles.textInput}
        value={nameStartsWith}
        onChangeText={onChange}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  charactersSearchWrapper: {
    marginRight: 25,
    marginBottom: 12,
    marginLeft: 25,
  },
  text: {
    lineHeight: 19,
    color: Colors.PRIMARY,
    fontSize: 16,
    marginBottom: 4,
  },
  textInput: {
    height: 40,
    width: '100%',
    borderWidth: 1,
    borderRadius: 4,
    borderColor: Colors.DEFAULT_BORDER,
    paddingRight: 6,
    paddingLeft: 6,
    fontSize: 16,
  },
});

CharactersSearch.propTypes = {
  style: ViewPropTypes.style,
  nameStartsWith: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};

CharactersSearch.defaultProps = {
  style: {},
};

export default CharactersSearch;
