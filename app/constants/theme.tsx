import {Platform} from 'react-native';
import {Dimensions} from 'react-native';
import type {ScaledSize} from 'react-native';

export const isAndroid = Platform.OS === 'android';
export const isIos = Platform.OS === 'ios';
export const isWeb = Platform.OS === 'web';

const window: ScaledSize = isWeb
  ? {
      ...Dimensions.get('window'),
      width: 375,
    }
  : Dimensions.get('window');

export const {width, height, fontScale, scale} = window;


export const COLORS = {
  primary: '#FFFFFF',
  purple: '#7F18D0',
  black: '#080D45',
  blue: '#1826D0',
};

const appTheme = {COLORS, width, height, fontScale, scale};

export default appTheme;
