import React from 'react';
import {
  StyleSheet,
  SafeAreaView,
  View,
  Image,
  Text,
  ScrollView,
} from 'react-native';
import PropTypes from 'prop-types';

import { CharacterPropTypes } from '../../PropTypesHelper';
import { BackButton, StatusBar } from '../../components';
import { Colors } from '../../assets';

const Section = ({ title, items }) => {
  return (
    <>
      <Text style={styles.listHeader}>{title}</Text>
      {items.length === 0 ? (
        <Text style={styles.listItemEmpty}>Nenhum lançamento.</Text>
      ) : (
        items.map((item, index) => (
          <Text style={styles.listItem} key={index.toString()}>
            {item.name}
          </Text>
        ))
      )}
    </>
  );
};

const CharacterDetail = ({ route, navigation }) => {
  const character = route.params;

  return (
    <SafeAreaView style={styles.characterDetailWrapper}>
      <StatusBar />
      <BackButton onPress={() => navigation.pop()} style={styles.backButton} />
      <View style={styles.headerWrapper}>
        <Image
          style={styles.characterImage}
          source={{
            uri: `${character.thumbnail.path}.${character.thumbnail.extension}`,
          }}
        />
        <Text style={styles.characterName}>{character.name}</Text>
      </View>
      <ScrollView>
        <Section title="Séries" items={character.series.items} />
        <Section title="Eventos" items={character.events.items} />
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  characterDetailWrapper: {
    flex: 1,
    backgroundColor: Colors.DEFAULT_BACKGROUND,
  },
  backButton: {
    marginTop: 8,
  },
  headerWrapper: {
    marginTop: 16,
    justifyContent: 'center',
    alignItems: 'center',
  },
  characterImage: {
    backgroundColor: Colors.DEFAULT_IMAGE_BACKGROUND,
    height: 90,
    width: 90,
    borderRadius: 45,
  },
  characterName: {
    marginTop: 25,
    fontSize: 24,
    textAlign: 'center',
    paddingHorizontal: 25,
    fontFamily: 'Roboto',
  },
  listHeader: {
    fontSize: 16,
    lineHeight: 37,
    backgroundColor: Colors.PRIMARY,
    color: Colors.WHITE,
    paddingLeft: 25,
    marginTop: 40,
    fontFamily: 'Roboto',
  },
  listItem: {
    fontSize: 16,
    lineHeight: 37,
    paddingLeft: 25,
    fontFamily: 'Roboto',
    borderBottomWidth: 1,
    borderBottomColor: Colors.PRIMARY,
  },
  listItemEmpty: {
    fontSize: 16,
    lineHeight: 37,
    paddingLeft: 25,
    fontFamily: 'Roboto',
    color: Colors.GRAY,
  },
});

CharacterDetail.propTypes = {
  navigation: PropTypes.shape({
    navigate: PropTypes.func.isRequired,
  }).isRequired,
  route: PropTypes.shape({
    params: CharacterPropTypes.isRequired,
  }).isRequired,
};

export default CharacterDetail;
