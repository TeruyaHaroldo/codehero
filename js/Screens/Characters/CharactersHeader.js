import React from 'react';
import { StyleSheet, Text, View, ViewPropTypes } from 'react-native';

import { Colors } from '../../assets';

const CharactersHeader = ({ style }) => {
  return (
    <View style={[styles.charactersHeaderWrapper, style]}>
      <View style={styles.textBordered}>
        <Text style={[styles.text, styles.textBold]}>BUSCA</Text>
      </View>
      <Text> </Text>
      <Text style={[styles.text, styles.textBold]}>MARVEL</Text>
      <Text> </Text>
      <Text style={styles.text}>TESTE FRONT-END</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  charactersHeaderWrapper: {
    flexDirection: 'row',
  },
  textBordered: {
    borderBottomWidth: 4,
    borderBottomColor: Colors.PRIMARY,
  },
  text: {
    lineHeight: 19,
    color: Colors.PRIMARY,
    fontSize: 16,
    fontFamily: 'Roboto',
  },
  textBold: {
    fontWeight: 'bold',
  },
});

CharactersHeader.propTypes = {
  style: ViewPropTypes.style,
};

CharactersHeader.defaultProps = {
  style: {},
};

export default CharactersHeader;
