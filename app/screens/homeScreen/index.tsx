import styles from './styles';
import * as React from 'react';
import {splashData} from '../../libs/data';
import Header from '../../components/Header';
import {COLORS} from '../../constants/theme';
import coins from '../../assets/images/coins.png';
import RenderHero from '../../components/RenderHero';
import RenderEmpty from '../../components/RenderEmpty';
import {NavigationInterface} from '../../../typings/screens';
import RenderIndicator from '../../components/RenderIndicator';
import {StatusBar, Animated, Text, Image, View} from 'react-native';
import {convertPX, scrollToActiveIndex, handleTransform} from '../../utils';
import {FlatList, SafeAreaView, ScrollView, TouchableOpacity} from 'react-native';

const SPACING = 10;

export default function Index(props: NavigationInterface) {
  const scrollX = React.useRef(new Animated.Value(0)).current;
  const [activeIndex, setActiveIndex] = React.useState(0);
  const indicatorRef = React.useRef<FlatList>(null);
  const heroRef = React.useRef<FlatList>(null);

  const handleScrollToActiveIndex = (index: number) => {
    return scrollToActiveIndex({
      index,
      SPACING,
      heroRef,
      indicatorRef,
      setActiveIndex,
    });
  };

  const renderItem = ({item}: {item: ISplashData}) => (
    <Animated.View
      style={[styles.heroWrap, {transform: handleTransform(scrollX)}]}>
      <Image source={coins} style={styles.image} />
      <View>
        <Text style={styles.title}>{item.title}</Text>
        <Text style={styles.text}>{item.subtitle}</Text>
      </View>
    </Animated.View>
  );

  return splashData.length <= 0 ? (
    <RenderEmpty />
  ) : (
    <SafeAreaView>
      <StatusBar backgroundColor="#FFF" barStyle={'dark-content'} />
      <Header {...props} leftIcon={{name: 'close', disabled: true}} />
      <ScrollView
        contentInsetAdjustmentBehavior="automatic"
        contentContainerStyle={styles.root}>
        <RenderHero
          data={splashData}
          heroRef={heroRef}
          scrollX={scrollX}
          renderItem={renderItem}
          activeIndex={activeIndex}
          scrollToActiveIndex={handleScrollToActiveIndex}
          contentContainerStyle={{
            marginVertical: convertPX(10),
            paddingHorizontal: SPACING,
          }}
        />
        <RenderIndicator
          data={splashData}
          scrollX={scrollX}
          inactiveColor="gray"
          activeIndex={activeIndex}
          indicatorRef={indicatorRef}
          activeColor={COLORS.purple}
          indicatorStyle={styles.dot}
          scrollToActiveIndex={handleScrollToActiveIndex}
          contentContainerStyle={{
            paddingHorizontal: SPACING,
            marginVertical: convertPX(10),
          }}
        />
        <TouchableOpacity
          style={styles.button}
          onPress={() => props.navigation.navigate('InvestScreen')}>
          <Text style={styles.buttonText}>Get Started</Text>
        </TouchableOpacity>
      </ScrollView>
    </SafeAreaView>
  );
}
