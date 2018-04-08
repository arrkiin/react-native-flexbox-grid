import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { getScreenSize } from '../lib/ScreenSize';
import {
  isHidden,
  getComponentWidth,
  getComponentOffset,
} from '../lib/helpers';
import { View, Dimensions } from 'react-native';

class Column extends Component {
  onLayoutHandler = ({ nativeEvent: { layout: { x, y, width, height } } }) => {
    this.forceUpdate();
  };
  render() {
    const {
      sm,
      smOffset,
      smHidden,
      md,
      mdOffset,
      mdHidden,
      lg,
      lgOffset,
      lgHidden,
      rowSize,
      ...rest
    } = this.props;

    const gridProps = {
      sm,
      smOffset,
      smHidden,
      md,
      mdOffset,
      mdHidden,
      lg,
      lgOffset,
      lgHidden,
      rowSize,
    };

    if (isHidden(getScreenSize(), gridProps)) {
      return null;
    } else {
      return (
        <View
          {...rest}
          onLayout={this.onLayoutHandler}
          style={[
            this.props.style,
            {
              width: getComponentWidth(getScreenSize(), gridProps),
              flexDirection: 'column',
              marginLeft: getComponentOffset(getScreenSize(), gridProps),
            },
          ]}
        >
          {rest.children}
        </View>
      );
    }
  }
}

Column.propTypes = {
  sm: PropTypes.number,
  smOffset: PropTypes.number,
  smHidden: PropTypes.bool,
  md: PropTypes.number,
  mdOffset: PropTypes.number,
  mdHidden: PropTypes.bool,
  lg: PropTypes.number,
  lgOffset: PropTypes.number,
  lgHidden: PropTypes.bool,
};

export default Column;
