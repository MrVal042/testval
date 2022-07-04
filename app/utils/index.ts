import {Dimensions} from 'react-native';
import {widthPercentageToDP as WP} from 'react-native-responsive-screen';

export const {height, width} = Dimensions.get('window');

export const convertPX = (value: number) => {
  return (WP(100) * value) / 375;
};
