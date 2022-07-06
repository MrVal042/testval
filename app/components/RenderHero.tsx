import React from 'react';
import {Animated} from 'react-native';

export default function RenderHero(props: IHero) {
  return (
    <Animated.FlatList
      horizontal
      pagingEnabled
      bounces={false}
      data={props.data}
      ref={props.heroRef}
      scrollEventThrottle={32}
      renderItem={props.renderItem}
      showsHorizontalScrollIndicator={false}
      keyExtractor={item => item.id.toString()}
      ListEmptyComponent={props.ListEmptyComponent}
      contentContainerStyle={props.contentContainerStyle}
      onScroll={Animated.event(
        [{nativeEvent: {contentOffset: {x: props.scrollX}}}],
        {
          useNativeDriver: false,
        },
      )}
    />
  );
}
