import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { CharacterApi } from '../../apis';

import CharactersLayout from './CharactersLayout';

const INPUT_TIMER = 750;
const PAGE_SIZE = 4;

class Characters extends Component {
  constructor(context) {
    super(context);

    this.state = {
      loading: false,
      loadError: null,
      characters: [],
      charactersTotal: 0,
      page: 1,
      nameStartsWith: '',
    };

    this.inputTimer = null;
  }

  componentDidMount() {
    this.handleLoad();
  }

  componentWillUnmount() {
    this.inputTimer = null;
  }

  handleLoad = () => {
    const { page, nameStartsWith } = this.state;

    this.setState(
      {
        loading: true,
        loadError: null,
      },
      async () => {
        try {
          const response = await CharacterApi.get({
            limit: PAGE_SIZE,
            offset: (page - 1) * PAGE_SIZE,
            nameStartsWith: nameStartsWith === '' ? undefined : nameStartsWith,
          });

          this.setState({
            loading: false,
            characters: response.data.results,
            charactersTotal: response.data.total,
          });
        } catch (e) {
          this.setState({ loading: false, loadError: e, page: 1 });
        }
      }
    );
  };

  handleSearchByName = (nameStartsWith) => {
    if (this.inputTimer) {
      clearTimeout(this.inputTimer);
    }

    this.setState({ nameStartsWith: nameStartsWith });

    this.inputTimer = setTimeout(() => {
      this.inputTimer = null;
      this.setState({ page: 1 }, this.handleLoad);
    }, INPUT_TIMER);
  };

  handleChangePage = (newCurrentPage) => {
    if (this.inputTimer) {
      clearTimeout(this.inputTimer);
    }

    this.setState({ page: newCurrentPage });

    this.inputTimer = setTimeout(() => {
      this.inputTimer = null;
      this.handleLoad();
    }, INPUT_TIMER);
  };

  handleCharacterSelected = (character) => {
    const { navigation } = this.props;

    navigation.navigate('CharacterDetail', character);
  };

  render() {
    const {
      loading,
      characters,
      loadError,
      page,
      charactersTotal,
      nameStartsWith,
    } = this.state;

    return (
      <CharactersLayout
        loading={loading}
        loadError={loadError}
        page={page}
        pageSize={PAGE_SIZE}
        characters={characters}
        charactersTotal={charactersTotal}
        nameStartsWith={nameStartsWith}
        onLoad={this.handleLoad}
        onChangePage={this.handleChangePage}
        onChangeNameStartsWith={this.handleSearchByName}
        onCharacterSelected={this.handleCharacterSelected}
      />
    );
  }
}

Characters.propTypes = {
  navigation: PropTypes.shape({
    navigate: PropTypes.func.isRequired,
  }).isRequired,
};

export default Characters;
