import React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import PropTypes from 'prop-types';

import { Colors } from '../assets';
import ArrowRight from './ArrowRight';
import ArrowLeft from './ArrowLeft';

const Indicator = ({ number, active }) =>
  number ? (
    <View
      style={[
        styles.indicatorSize,
        styles.indicatorWrapper,
        active ? styles.indicatorActive : {},
      ]}
    >
      <Text
        style={[
          styles.indicatorNumber,
          active ? styles.indicatorNumberActive : {},
        ]}
      >
        {number}
      </Text>
    </View>
  ) : (
    <View style={styles.indicatorSize} />
  );

Indicator.propTypes = {
  number: PropTypes.number,
  active: PropTypes.bool.isRequired,
};

Indicator.defaultProps = {
  number: null,
};

const Pagination = ({ page, pageSize, charactersTotal, onChange }) => {
  if (charactersTotal <= 4) {
    return null;
  }

  const totalNumberOfPages = Math.ceil(charactersTotal / pageSize);

  let indicators = [];
  for (let i = 0; i < 3 && i < totalNumberOfPages; i++) {
    if (page === 1) {
      indicators.push({
        number: page + i,
        active: page + i === page,
      });
    } else if (page === totalNumberOfPages && charactersTotal <= pageSize * 2) {
      indicators.push({
        number: page + i - 1,
        active: page + i - 1 === page,
      });
    } else if (page === totalNumberOfPages) {
      indicators.push({
        number: page + i - 2,
        active: page + i - 2 === page,
      });
    } else {
      indicators.push({
        number: page + i - 1,
        active: page + i - 1 === page,
      });
    }
  }

  return (
    <View style={styles.paginationWrapper}>
      <ArrowLeft
        style={styles.arrowLeft}
        disabled={page === 1}
        onPress={() => onChange(page - 1)}
      />
      {indicators.map((indicator) => (
        <Indicator
          number={indicator.number}
          active={indicator.active}
          key={indicator.number.toString()}
        />
      ))}
      <ArrowRight
        style={styles.arrowRight}
        disabled={page === totalNumberOfPages}
        onPress={() => onChange(page + 1)}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  paginationWrapper: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 18,
    paddingRight: 30,
    marginBottom: 24,
    paddingLeft: 30,
  },
  arrowLeft: {
    marginRight: 50,
  },
  arrowRight: {
    marginLeft: 50,
  },
  indicatorWrapper: {
    marginHorizontal: 10,
    borderRadius: 16,
    borderWidth: 1,
    backgroundColor: Colors.WHITE,
    borderColor: Colors.PRIMARY,
    justifyContent: 'center',
    alignItems: 'center',
  },
  indicatorSize: {
    height: 32,
    width: 32,
  },
  indicatorActive: {
    backgroundColor: Colors.PRIMARY,
    borderColor: Colors.WHITE,
  },
  indicatorNumber: {
    color: Colors.PRIMARY,
    fontSize: 16,
    fontFamily: 'Roboto',
  },
  indicatorNumberActive: {
    color: Colors.WHITE,
  },
});

Pagination.propTypes = {
  page: PropTypes.number.isRequired,
  pageSize: PropTypes.number.isRequired,
  charactersTotal: PropTypes.number.isRequired,
  onChange: PropTypes.func.isRequired,
};

export default Pagination;
