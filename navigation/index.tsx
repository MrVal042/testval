import * as React from 'react';
import HomeScreen from '../app/screens/homeScreen';
import InvestScreen from '../app/screens/investScreen';
import PortfolioScreen from '../app/screens/portfolioScreen';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();

export default function RootNavigator() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="HomeScreen"
          component={HomeScreen}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="InvestScreen"
          component={InvestScreen}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="PortfolioScreen"
          component={PortfolioScreen}
          options={{headerShown: false}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
