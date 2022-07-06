import {Dimensions} from 'react-native';

export const {height, width} = Dimensions.get('window');

export const convertPX = (value: number) => {
  return (width * ((value * 100) / 375)) / 100;
};

export const scrollToActiveIndex = (props: IScroll) => {
  const IMAGE_SIZE = 80;

  props.setActiveIndex(props.index);

  props.heroRef?.current?.scrollToOffset({
    offset: props.index * width,
    animated: true,
  });

  if (props.index * (IMAGE_SIZE + props.SPACING) - IMAGE_SIZE / 2 > width / 2) {
    props.indicatorRef?.current?.scrollToOffset({
      offset:
        props.index * (IMAGE_SIZE + props.SPACING) - width / 2 + IMAGE_SIZE / 2,
      animated: true,
    });
  } else {
    props.indicatorRef?.current?.scrollToOffset({
      offset: 0,
      animated: true,
    });
  }
};
