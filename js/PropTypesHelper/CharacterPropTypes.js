import PropTypes from 'prop-types';

const CharacterPropTypes = PropTypes.shape({
  thumbnail: PropTypes.shape({
    path: PropTypes.string,
    extension: PropTypes.string,
  }),
  name: PropTypes.string,
  id: PropTypes.number,
  series: PropTypes.shape({
    items: PropTypes.arrayOf(
      PropTypes.shape({
        name: PropTypes.string,
      })
    ),
  }),
  events: PropTypes.shape({
    items: PropTypes.arrayOf(
      PropTypes.shape({
        name: PropTypes.string,
      })
    ),
  }),
});

export default CharacterPropTypes;
