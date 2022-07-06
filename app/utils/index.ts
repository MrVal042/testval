import {Animated} from 'react-native';
import {height, width} from '../constants/theme';

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

export const handleTransform = (scrollX: Animated.Value) => {
  const YOLO = Animated.modulo(
    Animated.divide(Animated.modulo(scrollX, width), new Animated.Value(width)),
    1,
  );
  const rotate = YOLO.interpolate({
    inputRange: [0, 0.5, 1],
    outputRange: ['0deg', '35deg', '0deg'],
  });
  const translateX = YOLO.interpolate({
    inputRange: [0, 0.5, 1],
    outputRange: [0, -height, 0],
  });
  return [{rotate}, {translateX}];
};
