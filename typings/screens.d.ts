import { StackNavigationProp, RouteProp } from '@react-navigation/stack';
import { StackActionHelpers } from '@react-navigation/native';

// App Navigation prop types
export type RootStackParamList = {
  HomeScreen?: Object;
  InvestScreen?: Object;
  PortfolioScreen?: Object;
};

export type RootStackParamScreensList =
  | 'HomeScreen'
  | 'InvestScreen'
  | 'PortfolioScreen';

interface StackScreenInterface extends StackActionHelpers {
  navigation:
    | StackNavigationProp<RootStackParamList, string>
    | DrawerNavigationHelpers;
  route: RouteProp<RootStackParamList, string>;
  openDrawer?: DrawerNavigationState<ParamListBase>;
}

export interface NavigationInterface extends StackScreenInterface {
  testID?: string;
}
