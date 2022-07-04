//  COMMONS ////////////////////////////////////

type IICons = {src: ImageSourcePropType; text: string};

type IOutcome = {text: string; percentage: number};

type IKnowledge = {
  icon: ImageSourcePropType;
  subText: string;
  text: string;
};

type IRecents = {
  subText: string;
  text: string;
  amount: number;
};

type IOptions = {
  iconText: string;
  text: string;
  link: string;
};

type IconProps = {
  name?: string;
  src?: string;
  size?: number;
  style?: StyleProp<TextStyle>;
  color?: number | ColorValue | undefined;
  onPress?: ((event: GestureResponderEvent) => void) | undefined;
};
