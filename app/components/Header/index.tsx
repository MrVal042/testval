import React from 'react';
import styles from './styles';
import RenderIcon from '../RenderIcon';
import {StyleProp, Text, TextStyle, View} from 'react-native';
import {NavigationInterface} from '../../../typings/screens';

interface ILeftIcon extends IconProps {
  disabled?: boolean;
}

interface ScreenProp extends NavigationInterface {
  title?: string;
  leftIcon?: ILeftIcon;
  rightIcon?: IconProps;
  titleStyle?: StyleProp<TextStyle>;
}

export default function index(props: ScreenProp) {
  const {title, leftIcon, rightIcon, titleStyle} = props;

  return (
    <View style={styles.root}>
      {leftIcon && (
        <RenderIcon
          {...leftIcon}
          onPress={
            leftIcon.disabled
              ? () => null
              : leftIcon.onPress
              ? leftIcon.onPress
              : () => props.navigation.goBack()
          }
        />
      )}
      {title && <Text style={[styles.title, titleStyle]}>{title}</Text>}
      {rightIcon && <RenderIcon {...rightIcon} />}
    </View>
  );
}
