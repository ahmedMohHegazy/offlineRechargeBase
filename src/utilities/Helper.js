import { Dimensions, PixelRatio } from 'react-native'

const heightMobileUI = 844;
const widthMobileUI = 390;
const fontScale = PixelRatio.getFontScale();

export const responsiveWidth = width => {
  return (Dimensions.get('window').width * width) / widthMobileUI;
};

export const responsiveHeight = height => {
  return (Dimensions.get('window').height * height) / heightMobileUI;
};

export const getFontSize = size => size / fontScale;
