import React from 'react';
import PropTypes from 'prop-types';
import {
  FlatList,
  Image,
  RefreshControl,
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
} from 'react-native';

import { Colors, Images } from '../../assets';
import { Loading, Pagination, StatusBar } from '../../components';

import CharactersHeader from './CharactersHeader';
import CharactersSearch from './CharactersSearch';
import CharactersListItem from './CharactersListItem';
import { CharacterPropTypes } from '../../PropTypesHelper';

const CharactersLayout = ({
  loading,
  loadError,
  page,
  pageSize,
  characters,
  charactersTotal,
  nameStartsWith,
  onLoad,
  onChangePage,
  onChangeNameStartsWith,
}) => {
  return (
    <SafeAreaView style={styles.screenWrapper}>
      <StatusBar />
      <CharactersHeader style={styles.sectionWrapper} />
      {(() => {
        if (loadError) {
          return (
            <>
              <Image
                resizeMode="contain"
                style={styles.image}
                source={Images.ATTENTION}
              />
              <Text style={styles.message}>Falha na busca por heróis.</Text>
              <TouchableOpacity
                style={{
                  backgroundColor: 'transparent',
                  color: Colors.LINK,
                }}
                onPress={onLoad}
              >
                <Text
                  style={{
                    color: Colors.LINK,
                    textAlign: 'center',
                  }}
                >
                  Tentar Novamente
                </Text>
              </TouchableOpacity>
            </>
          );
        }

        if (loading && characters.length > 0) {
          return (
            <>
              <CharactersSearch
                style={styles.sectionWrapper}
                nameStartsWith={nameStartsWith}
                onChange={onChangeNameStartsWith}
              />
              <Text style={styles.listHeader}>Nome</Text>
              <FlatList
                data={characters}
                renderItem={({ item }) => <CharactersListItem item={item} />}
                keyExtractor={(item) => item.id.toString()}
                refreshControl={
                  <RefreshControl
                    refreshing={loading}
                    colors={[Colors.PRIMARY]}
                    tintColor={Colors.PRIMARY}
                  />
                }
              />
              <Pagination
                page={page}
                pageSize={pageSize}
                charactersTotal={charactersTotal}
                onChange={onChangePage}
              />
            </>
          );
        }

        if (loading) {
          return (
            <>
              <CharactersSearch
                style={styles.sectionWrapper}
                nameStartsWith={nameStartsWith}
                onChange={onChangeNameStartsWith}
              />
              <Text style={styles.listHeader}>Nome</Text>
              <Loading style={styles.loading} />
              <Pagination
                page={page}
                pageSize={pageSize}
                charactersTotal={charactersTotal}
                onChange={onChangePage}
              />
            </>
          );
        }

        if (characters.length === 0) {
          return (
            <>
              <CharactersSearch
                style={styles.sectionWrapper}
                nameStartsWith={nameStartsWith}
                onChange={onChangeNameStartsWith}
              />
              <Image
                resizeMode="contain"
                style={styles.image}
                source={Images.EMPTY_DATA}
              />
              <Text style={styles.message}>Nenhum herói encontrado.</Text>
            </>
          );
        }

        return (
          <>
            <CharactersSearch
              style={styles.sectionWrapper}
              nameStartsWith={nameStartsWith}
              onChange={onChangeNameStartsWith}
            />
            <Text style={styles.listHeader}>Nome</Text>
            <FlatList
              data={characters}
              renderItem={({ item }) => <CharactersListItem item={item} />}
              keyExtractor={(item) => item.id.toString()}
              refreshControl={
                <RefreshControl
                  refreshing={loading}
                  colors={[Colors.PRIMARY]}
                  tintColor={Colors.PRIMARY}
                />
              }
            />
            <Pagination
              page={page}
              pageSize={pageSize}
              charactersTotal={charactersTotal}
              onChange={onChangePage}
            />
          </>
        );
      })()}
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  screenWrapper: {
    flex: 1,
    backgroundColor: Colors.DEFAULT_BACKGROUND,
    paddingTop: 12,
  },
  sectionWrapper: {
    marginRight: 25,
    marginBottom: 12,
    marginLeft: 25,
  },
  loading: {
    flex: 1,
  },
  listHeader: {
    height: 37,
    fontSize: 16,
    lineHeight: 37,
    alignItems: 'center',
    backgroundColor: Colors.PRIMARY,
    color: Colors.WHITE,
    paddingLeft: 108,
  },
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
});

CharactersLayout.propTypes = {
  loading: PropTypes.bool.isRequired,
  loadError: PropTypes.string,
  page: PropTypes.number.isRequired,
  pageSize: PropTypes.number.isRequired,
  characters: PropTypes.arrayOf(CharacterPropTypes),
  charactersTotal: PropTypes.number.isRequired,
  nameStartsWith: PropTypes.string.isRequired,
  onLoad: PropTypes.func.isRequired,
  onChangePage: PropTypes.func.isRequired,
  onChangeNameStartsWith: PropTypes.func.isRequired,
};

CharactersLayout.defaultProps = {
  loadError: null,
};

export default CharactersLayout;
