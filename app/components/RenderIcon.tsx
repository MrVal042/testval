import React from 'react';
import Ionicons from 'react-native-vector-icons/Ionicons';
import EvilIcons from 'react-native-vector-icons/EvilIcons';
import AntDesign from 'react-native-vector-icons/AntDesign';

export default function RenderIcon(props: IconProps) {
  switch (props.src) {
    case 'EvilIcons':
      return (
        <EvilIcons
          style={props.style}
          onPress={props.onPress}
          size={props.size ? props.size : 20}
          name={props.name ? props.name : 'close'}
          color={props.color ? props.color : '#000'}
        />
      );
    case 'AntDesign':
      return (
        <AntDesign
          style={props.style}
          onPress={props.onPress}
          size={props.size ? props.size : 20}
          name={props.name ? props.name : 'close'}
          color={props.color ? props.color : '#000'}
        />
      );

    default:
      return (
        <Ionicons
          style={props.style}
          onPress={props.onPress}
          size={props.size ? props.size : 20}
          name={props.name ? props.name : 'close'}
          color={props.color ? props.color : '#000'}
        />
      );
  }
}
