import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { getScreenSize } from '../lib/ScreenSize'
import {
  isHidden,
  getComponentWidth,
  getComponentOffset,
  getPadding,
} from '../lib/helpers'
import { View, Dimensions } from 'react-native'

class Column extends Component {
  onLayoutHandler = ({
    nativeEvent: {
      layout: { x, y, width, height },
    },
  }) => {
    this.forceUpdate()
  }
  render() {
    const {
      xs,
      xsOffset,
      xsHidden,
      xsPadding,
      sm,
      smOffset,
      smHidden,
      smPadding,
      md,
      mdOffset,
      mdHidden,
      mdPadding,
      lg,
      lgOffset,
      lgHidden,
      lgPadding,
      xl,
      xlOffset,
      xlHidden,
      xlPadding,
      xxl,
      xxlOffset,
      xxlHidden,
      xxlPadding,
      first,
      mid,
      last,
      rowSize,
      ...rest
    } = this.props

    const gridProps = {
      xs,
      xsOffset,
      xsHidden,
      xsPadding,
      sm,
      smOffset,
      smHidden,
      smPadding,
      md,
      mdOffset,
      mdHidden,
      mdPadding,
      lg,
      lgOffset,
      lgHidden,
      lgPadding,
      xl,
      xlOffset,
      xlHidden,
      xlPadding,
      xxl,
      xxlOffset,
      xxlHidden,
      xxlPadding,
      first,
      mid,
      last,
      rowSize,
    }

    if (isHidden(getScreenSize(), gridProps)) {
      return null
    } else {
      const width = getComponentWidth(getScreenSize(), gridProps)
      const padding = getPadding(getScreenSize(), gridProps)
      var paddingStyle = {}
      if (width === '100%') {
        paddingStyle = {
          paddingBottom: gridProps.first ? padding : 0,
          paddingTop: gridProps.last ? padding : 0,
          paddingVertical: gridProps.mid ? padding : 0,
        }
      } else {
        paddingStyle = {
          paddingRight: gridProps.first ? padding : 0,
          paddingLeft: gridProps.last ? padding : 0,
          paddingHorizontal: gridProps.mid ? padding : 0,
        }
      }
      return (
        <View
          {...rest}
          onLayout={this.onLayoutHandler}
          style={[
            this.props.style,
            {
              width: width,
              flexDirection: 'column',
              marginLeft: getComponentOffset(getScreenSize(), gridProps),
            },
            paddingStyle,
          ]}
        >
          {rest.children}
        </View>
      )
    }
  }
}

Column.propTypes = {
  xs: PropTypes.number,
  xsOffset: PropTypes.number,
  xsHidden: PropTypes.bool,
  sm: PropTypes.number,
  smOffset: PropTypes.number,
  smHidden: PropTypes.bool,
  md: PropTypes.number,
  mdOffset: PropTypes.number,
  mdHidden: PropTypes.bool,
  lg: PropTypes.number,
  lgOffset: PropTypes.number,
  lgHidden: PropTypes.bool,
  xl: PropTypes.number,
  xlOffset: PropTypes.number,
  xlHidden: PropTypes.bool,
  xxl: PropTypes.number,
  xxlOffset: PropTypes.number,
  xxlHidden: PropTypes.bool,
}

export default Column
