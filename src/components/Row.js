import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { getScreenSize } from '../lib/ScreenSize';
import { isHidden } from '../lib/helpers';
import { View } from 'react-native';

const cloneElements = props => {
  //if size doesn't exist or is 0 default to 12
  const rowSize = props.size > 0 ? props.size : 12;

  return React.Children.map(props.children, element => {
    return React.cloneElement(element, { rowSize: rowSize });
  });
};

class Row extends Component {
  state = {
    show: false,
  };
  componentDidMount() {
    this.setState({ show: true });
  }
  render() {
    if (isHidden(getScreenSize(), this.props)) {
      return null;
    } else {
      const entries = (
        <View
          {...this.props}
          onLayout={this.onLayoutHandler}
          style={[
            this.props.style,
            {
              flexDirection: 'row',
              flexWrap: this.props.nowrap ? 'nowrap' : 'wrap',
              alignItems: this.props.alignItems,
              justifyContent: this.props.justifyContent,
            },
          ]}
        >
          {this.state.show ? cloneElements(this.props) : null}
        </View>
      );
      return entries;
    }
  }
}

Row.propTypes = {
  size: PropTypes.number,
  nowrap: PropTypes.bool,
  smHidden: PropTypes.bool,
  mdHidden: PropTypes.bool,
  lgHidden: PropTypes.bool,
};

export default Row;
