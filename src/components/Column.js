import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { getScreenSize } from '../lib/ScreenSize';
import {
  isHidden,
  getComponentWidth,
  getComponentOffset,
} from '../lib/helpers';
import { View } from 'react-native';

class Column extends Component {
  state = {
    width: 0,
  };
  componentDidMount() {
    this.updateSize();
  }
  updateSize = () => {
    const { gridProps } = this.getGridProps(this.props);
    this.setState({
      width: getComponentWidth(getScreenSize(), gridProps),
    });
  };
  getGridProps = props => {
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
    } = props;

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

    return { gridProps, rest };
  };
  render() {
    const { gridProps, rest } = this.getGridProps(this.props);

    if (isHidden(getScreenSize(), gridProps)) {
      return null;
    } else {
      return (
        <View
          onLayout={this.updateSize.bind(this)}
          {...rest}
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
