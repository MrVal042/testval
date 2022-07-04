import {Dimensions} from 'react-native';

export const {height, width} = Dimensions.get('window');

export const convertPX = (value: number) => {
  return (width * ((value * 100) / 375)) / 100;
};
