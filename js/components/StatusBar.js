import React from 'react';
import { StatusBar } from 'react-native';
import PropTypes from 'prop-types';

import { Colors } from '../assets';

/**
 * Customized status bar component for the project.
 * @param {backgroundColor} only for android. For iOS is always transparent.
 * @param {barStyle} for both platforms.
 */

const CustomStatusBar = ({ backgroundColor, barStyle }) => (
  <StatusBar backgroundColor={backgroundColor} barStyle={barStyle} animated />
);

CustomStatusBar.propTypes = {
  backgroundColor: PropTypes.oneOf(Object.values(Colors)),
  barStyle: PropTypes.oneOf(['default', 'light-content', 'dark-content']),
};

CustomStatusBar.defaultProps = {
  backgroundColor: Colors.DEFAULT_BACKGROUND,
  barStyle: 'dark-content',
};

export default CustomStatusBar;
