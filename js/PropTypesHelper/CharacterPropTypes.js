import PropTypes from 'prop-types';

const CharacterPropTypes = PropTypes.shape({
  thumbnail: PropTypes.shape({
    path: PropTypes.string,
    extension: PropTypes.string,
  }),
  name: PropTypes.string,
  id: PropTypes.number,
});

export default CharacterPropTypes;
