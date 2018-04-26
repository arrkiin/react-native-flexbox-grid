'use strict';

import React from 'react';
import { Dimensions } from 'react-native';

export function getScreenSize() {
  const SCREEN_WIDTH = Dimensions.get('window').width;
  const XS  =  410; //	<= 410 pt	phones
  const SM  =  411; // >= 411 pt	large phones
  const MD  =  568; // >= 568 pt	phones - landscape
  const LG  =  768; // >= 768 pt	tablets
  const XL  = 1024; // >= 1024 pt	tablets - landscape, large tablets
  const XXL = 1280; // >= 1280 pt	large tablets - landscape

  if(SCREEN_WIDTH < XS){
    return 'xs';
  }
  if(SCREEN_WIDTH >= XS && SCREEN_WIDTH < MD){
    return  'sm';
  }
  if(SCREEN_WIDTH >= MD && SCREEN_WIDTH < LG){
    return 'md';
  }
  if(SCREEN_WIDTH >= LG && SCREEN_WIDTH < XL){
    return 'lg';
  }
  if(SCREEN_WIDTH >= XL && SCREEN_WIDTH < XXL){
    return 'xl';
  }
  if(SCREEN_WIDTH >= XXL){
    return 'xxl';
  }
}
