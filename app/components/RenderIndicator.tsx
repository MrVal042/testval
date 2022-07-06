import React from 'react';
import {FlatList, ViewStyle} from 'react-native';
import {View, StyleProp, TouchableOpacity} from 'react-native';

export default function RenderIndicator(props: IIndicator) {
  return (
    <FlatList
      horizontal
      data={props.data}
      ref={props.indicatorRef}
      showsHorizontalScrollIndicator={false}
      keyExtractor={item => item.id.toString()}
      contentContainerStyle={props.contentContainerStyle}
      renderItem={({item, index}) => (
        <TouchableOpacity onPress={() => props.scrollToActiveIndex(index)}>
          <View
            style={[
              props.indicatorStyle,
              {
                backgroundColor:
                  props.activeIndex === index
                    ? props.activeColor
                    : props.inactiveColor,
              },
            ]}></View>
        </TouchableOpacity>
      )}
    />
  );
}
