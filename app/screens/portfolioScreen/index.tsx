import styles from './styles';
import React, {useRef} from 'react';
import {outcome} from '../../libs/data';
import Header from '../../components/Header';
import {COLORS, width} from '../../constants/theme';
import RenderIcon from '../../components/RenderIcon';
import RenderHero from '../../components/RenderHero';
import RenderEmpty from '../../components/RenderEmpty';
import ellipseBg from '../../assets/icons/EllipseBg.png';
import heroImg from '../../assets/images/circleChart.png';
import {NavigationInterface} from '../../../typings/screens';
import RenderIndicator from '../../components/RenderIndicator';
import {SafeAreaView, TouchableOpacity, View} from 'react-native';
import {Animated, FlatList, Image, ScrollView, Text} from 'react-native';
import {convertPX, scrollToActiveIndex, handleTransform} from '../../utils';

export default function Index(props: NavigationInterface) {
  const scrollX = React.useRef(new Animated.Value(0)).current;
  const [activeIndex, setActiveIndex] = React.useState(0);
  const indicatorRef = useRef<FlatList>(null);
  const heroRef = useRef<FlatList>(null);
  const SPACING = 5;

  const handleScrollToActiveIndex = (index: number) => {
    return scrollToActiveIndex({
      index,
      SPACING,
      heroRef,
      indicatorRef,
      setActiveIndex,
    });
  };

  const renderItem = ({item}: any) => (
    <Animated.View
      style={{
        width,
        alignItems: 'center',
        transform: handleTransform(scrollX),
      }}>
      <View style={styles.heroWrap}>
        <Text style={[styles.heroText, {top: 10, right: convertPX(50)}]}>
          International Company {'\n'} Stocks
        </Text>
        <Text style={[styles.heroText, {top: convertPX(65), left: 0}]}>
          Medium Company {'\n'} stocks (IJH)
        </Text>

        <Text
          style={[styles.heroText, {top: convertPX(90), right: convertPX(-5)}]}>
          Small Company {'\n'} Stocks (IJR)
        </Text>
        <Image source={heroImg} style={styles.image} />
        <Text
          style={[
            styles.heroText,
            {bottom: convertPX(10), left: convertPX(70)},
          ]}>
          Large Company {'\n'}Stocks (VOO)
        </Text>
      </View>
    </Animated.View>
  );

  return data.length <= 0 ? (
    <RenderEmpty />
  ) : (
    <SafeAreaView>
      <Header
        {...props}
        leftIcon={{name: 'chevron-back'}}
        rightIcon={{name: 'question', src: 'EvilIcons', size: 30}}
      />
      <ScrollView
        contentInsetAdjustmentBehavior="automatic"
        contentContainerStyle={styles.root}>
        <Text style={styles.subtitle}>Aggressive Portfolio</Text>
        <RenderIndicator
          data={data}
          scrollX={scrollX}
          activeIndex={activeIndex}
          activeColor={COLORS.blue}
          indicatorRef={indicatorRef}
          indicatorStyle={styles.dot}
          inactiveColor={COLORS.primary}
          scrollToActiveIndex={handleScrollToActiveIndex}
          contentContainerStyle={{
            marginVertical: convertPX(10),
            paddingHorizontal: SPACING,
          }}
        />
        <RenderHero
          data={data}
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

        <View style={styles.outcomeWrap}>
          <View style={styles.outcomeTitleWrap}>
            <Text style={styles.outcomeTitle}>Prospective Outcome</Text>
            <Text style={styles.outcomeSubTitle}>
              Risk:6 {'\n'}Returns 10-15%
            </Text>
          </View>
          {outcome.map(list => (
            <TouchableOpacity key={list.text} style={styles.outcomeItems}>
              <View
                style={{
                  flexDirection: 'row',
                  alignItems: 'center',
                }}>
                <View>
                  <Text style={styles.outcomeText}>{list.text}</Text>
                </View>
              </View>
              <View style={{flexDirection: 'row', alignItems: 'center'}}>
                <View style={styles.ellipseWrap}>
                  <Image source={ellipseBg} style={styles.ellipseBg} />
                  <Image source={list.icon} style={styles.ellipse} />
                  <Text style={styles.ellipseText}>{list.percentage}%</Text>
                </View>
                <RenderIcon src="EvilIcons" name="chevron-right" />
              </View>
            </TouchableOpacity>
          ))}
          <TouchableOpacity
            disabled={true}
            style={styles.button}
            onPress={() => {}}>
            <Text style={styles.buttonText}>This portfolio is selected</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const data = [{id: 1}, {id: 2}, {id: 3}, {id: 4}, {id: 5}];
