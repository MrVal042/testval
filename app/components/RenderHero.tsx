import React from 'react';
import {width} from '../utils';
import {FlatList} from 'react-native';

export default function RenderHero(props: IHero) {
  return (
    <FlatList
      horizontal
      pagingEnabled
      bounces={false}
      data={props.data}
      ref={props.heroRef}
      renderItem={props.renderItem}
      showsHorizontalScrollIndicator={false}
      keyExtractor={item => item.id.toString()}
      contentContainerStyle={props.contentContainerStyle}
      ListEmptyComponent={props.ListEmptyComponent}
      onMomentumScrollEnd={ev => {
        props.scrollToActiveIndex(
          Math.round(ev.nativeEvent.contentOffset.x / width),
        );
      }}
    />
  );
}
