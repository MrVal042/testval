import styles from './styles';
import React, {useRef} from 'react';
import {splashData} from '../../libs/data';
import Header from '../../components/Header';
import {COLORS} from '../../constants/theme';
import coins from '../../assets/images/coins.png';
import RenderHero from '../../components/RenderHero';
import {convertPX, scrollToActiveIndex} from '../../utils';
import {NavigationInterface} from '../../../typings/screens';
import RenderIndicator from '../../components/RenderIndicator';
import {FlatList, Text, TouchableOpacity, View} from 'react-native';
import {Image, SafeAreaView, ScrollView, StatusBar} from 'react-native';
import RenderEmpty from '../../components/RenderEmpty';

const IMAGE_SIZE = 80;
const SPACING = 10;

export default function Index(props: NavigationInterface) {
  const [activeIndex, setActiveIndex] = React.useState(0);
  const indicatorRef = useRef<FlatList>(null);
  const heroRef = useRef<FlatList>(null);

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
    <View style={styles.heroWrap}>
      <Image source={coins} style={styles.image} />
      <View>
        <Text style={styles.title}>{item.title}</Text>
        <Text style={styles.text}>{item.subtitle}</Text>
      </View>
    </View>
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
