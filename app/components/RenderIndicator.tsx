import React from 'react';
import {width} from '../constants/theme';
import {TouchableOpacity} from 'react-native';
import {Animated, FlatList} from 'react-native';

export default function RenderIndicator(props: IIndicator) {
  return (
    <FlatList
      horizontal
      data={props.data}
      ref={props.indicatorRef}
      showsHorizontalScrollIndicator={false}
      keyExtractor={item => item.id.toString()}
      contentContainerStyle={props.contentContainerStyle}
      renderItem={({item, index}) => {
        const backgroundColor = props.scrollX.interpolate({
          inputRange: props.data.map((_, i) => i * width),
          outputRange: props.data.map((_, i) =>
            i === index ? props.activeColor : props.inactiveColor,
          ),
        });
        const inputRange = [
          (index - 1) * width,
          index * width,
          (index + 1) * width,
        ];

        const scale = props.scrollX.interpolate({
          inputRange,
          outputRange: [0.6, 0.9, 0.8],
          extrapolate: 'clamp',
        });

        const opacity = props.scrollX.interpolate({
          inputRange,
          outputRange: [0.8, 1.4, 0.8],
          extrapolate: 'clamp',
        });
        return (
          <TouchableOpacity onPress={() => props.scrollToActiveIndex(index)}>
            <Animated.View
              style={[
                props.indicatorStyle,
                {
                  backgroundColor,
                  transform: [{scale}],
                  opacity,
                },
              ]}></Animated.View>
          </TouchableOpacity>
        );
      }}
    />
  );
}
