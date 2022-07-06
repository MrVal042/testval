//  COMMONS ////////////////////////////////////

type IICons = {src: ImageSourcePropType; text: string};

type IOutcome = {text: string; percentage: number; icon: ImageSourcePropType};

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

type ISplashData = {id: number; title: string; subtitle: string};

type IHero = {
  data: any[];
  activeIndex: number;
  heroRef: React.RefObject<FlatList<any>>;
  scrollToActiveIndex: (index: number) => void;
  contentContainerStyle?: StyleProp<ViewStyle>;
  renderItem: ListRenderItem<any> | null | undefined;
  ListEmptyComponent?:
    | React.ComponentType<any>
    | React.ReactElement<any, string | React.JSXElementConstructor<any>>
    | null
    | undefined;
};

type IIndicator = {
  data: any[];
  activeIndex: number;
  activeColor: string;
  inactiveColor: string;
  indicatorStyle?: StyleProp<ViewStyle>;
  indicatorRef: React.RefObject<FlatList<any>>;
  scrollToActiveIndex: (index: number) => void;
  contentContainerStyle?: StyleProp<ViewStyle>;
};

type IScroll = {
  index: number;
  SPACING: number;
  heroRef: React.RefObject<FlatList<any>>;
  indicatorRef: React.RefObject<FlatList<any>>;
  setActiveIndex: (value: React.SetStateAction<number>) => void;
};
