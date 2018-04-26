const isHidden = (screenSize, props) => {
  switch(screenSize) {
    case 'xs':
      return props.xsHidden ? true : false;
    case 'sm':
      return props.smHidden ? true : false;
    case 'md':
      return props.mdHidden ? true : false;
    case 'lg':
      return props.lgHidden ? true : false;
    case 'xl':
      return props.xlHidden ? true : false;
    case 'xxl':
      return props.xxlHidden ? true : false;
    default:
      return false;
  }
};

const toPercent = (num) => (num * 100) + '%';

const getComponentWidth = (screenSize, props) => {
  switch(screenSize) {
    case 'xs':
      if(props.xs){
        return toPercent(props.xs/props.rowSize);
      } else {
        return props.parentWidth;
      }
      break;
    case 'sm':
      if(props.sm){
        return toPercent(props.sm/props.rowSize);
      } else if(props.xs){
        return toPercent(props.xs/props.rowSize);
      } else {
        return props.parentWidth;
      }
      break;
    case 'md':
      if(props.md){
        return toPercent(props.md/props.rowSize);
      } else if(props.sm){
        return toPercent(props.sm/props.rowSize);
      } else if(props.xs){
        return toPercent(props.xs/props.rowSize);
      } else {
        return props.parentWidth;
      }
      break;
    case 'lg':
      if(props.lg){
        return toPercent(props.lg/props.rowSize);
      } else if(props.md){
        return toPercent(props.md/props.rowSize);
      } else if(props.sm){
        return toPercent(props.sm/props.rowSize);
      } else if(props.xs){
        return toPercent(props.xs/props.rowSize);
      } else {
        return props.parentWidth;
      }
      break;
    case 'xl':
      if(props.xl){
        return toPercent(props.xl/props.rowSize);
      } else if(props.lg){
        return toPercent(props.lg/props.rowSize);
      } else if(props.md){
        return toPercent(props.md/props.rowSize);
      } else if(props.sm){
        return toPercent(props.sm/props.rowSize);
      } else if(props.xs){
        return toPercent(props.xs/props.rowSize);
      } else {
        return props.parentWidth;
      }
      break;
    case 'xxl':
      if(props.xxl){
        return toPercent(props.xxl/props.rowSize);
      } else if(props.xl){
        return toPercent(props.xl/props.rowSize);
      } else if(props.lg){
        return toPercent(props.lg/props.rowSize);
      } else if(props.md){
        return toPercent(props.md/props.rowSize);
      } else if(props.sm){
        return toPercent(props.sm/props.rowSize);
      } else if(props.xs){
        return toPercent(props.xs/props.rowSize);
      } else {
        return props.parentWidth;
      }
      break;
    default:
      return props.parentWidth;
  }
};

const getComponentOffset = (screenSize, props) => {
  switch(screenSize) {
    case 'xs':
      if(props.xsOffset){
        return toPercent(props.xsOffset/props.rowSize);
      } else {
        return 0;
      }
      break;
    case 'sm':
      if(props.smOffset){
        return toPercent(props.smOffset/props.rowSize);
      } else if(props.xsOffset){
        return toPercent(props.xsOffset/props.rowSize);
      } else {
        return 0;
      }
      break;
    case 'md':
      if(props.mdOffset){
        return toPercent(props.mdOffset/props.rowSize);
      } else if(props.smOffset){
        return toPercent(props.smOffset/props.rowSize);
      } else if(props.xsOffset){
        return toPercent(props.xsOffset/props.rowSize);
      } else {
        return 0;
      }
      break;
    case 'lg':
      if(props.lgOffset){
        return toPercent(props.lgOffset/props.rowSize);
      } else if(props.mdOffset){
        return toPercent(props.mdOffset/props.rowSize);
      } else if(props.smOffset){
        return toPercent(props.smOffset/props.rowSize);
      } else if(props.xsOffset){
        return toPercent(props.xsOffset/props.rowSize);
      } else {
        return 0;
      }
      break;
    case 'xl':
      if(props.xlOffset){
        return toPercent(props.xlOffset/props.rowSize);
      } else if(props.lgOffset){
        return toPercent(props.lgOffset/props.rowSize);
      } else if(props.mdOffset){
        return toPercent(props.mdOffset/props.rowSize);
      } else if(props.smOffset){
        return toPercent(props.smOffset/props.rowSize);
      } else if(props.xsOffset){
        return toPercent(props.xsOffset/props.rowSize);
      } else {
        return 0;
      }
      break;
    case 'xxl':
      if(props.xxlOffset){
        return toPercent(props.xxlOffset/props.rowSize);
      } else if(props.xlOffset){
        return toPercent(props.xlOffset/props.rowSize);
      } else if(props.lgOffset){
        return toPercent(props.lgOffset/props.rowSize);
      } else if(props.mdOffset){
        return toPercent(props.mdOffset/props.rowSize);
      } else if(props.smOffset){
        return toPercent(props.smOffset/props.rowSize);
      } else if(props.xsOffset){
        return toPercent(props.xsOffset/props.rowSize);
      } else {
        return 0;
      }
      break;
    default:
      return 0;
  }
};

module.exports = {isHidden, getComponentWidth, getComponentOffset}
