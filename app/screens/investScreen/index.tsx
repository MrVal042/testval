import React, {useRef} from 'react';
import styles from './styles';
import HeroSection from './heroComp';
import {convertPX, scrollToActiveIndex} from '../../utils';
import Header from '../../components/Header';
import {FlatList, Image, ScrollView, Text} from 'react-native';
import RenderIcon from '../../components/RenderIcon';
import barChart from '../../assets/images/barChart.png';
import checkedIcon from '../../assets/icons/checkedIcon.png';
import {NavigationInterface} from '../../../typings/screens';
import {SafeAreaView, TouchableOpacity, View} from 'react-native';
import {recents, knowledge, icons, options} from '../../libs/data';
import RenderIndicator from '../../components/RenderIndicator';
import {COLORS} from '../../constants/theme';
import RenderHero from '../../components/RenderHero';
import RenderEmpty from '../../components/RenderEmpty';


export default function Index(props: NavigationInterface) {
  const [activeIndex, setActiveIndex] = React.useState(0);
  const indicatorRef = useRef<FlatList>(null);
  const heroRef = useRef<FlatList>(null);
  const SPACING = 22;

  const handleScrollToActiveIndex = (index: number) => {
    return scrollToActiveIndex({
      index,
      SPACING,
      heroRef,
      indicatorRef,
      setActiveIndex,
    });
  };

  return data.length <= 0 ? (
    <RenderEmpty />
  ) : (
    <SafeAreaView>
      <Header {...props} leftIcon={{name: 'chevron-back'}} />
      <ScrollView
        contentInsetAdjustmentBehavior="automatic"
        contentContainerStyle={styles.root}>
        <Text style={styles.subtitle}>Family Plus Investments</Text>

        <RenderHero
          data={data}
          heroRef={heroRef}
          activeIndex={activeIndex}
          renderItem={() => <HeroSection />}
          scrollToActiveIndex={handleScrollToActiveIndex}
          contentContainerStyle={{
            marginVertical: convertPX(10),
            paddingHorizontal: SPACING,
          }}
        />

        <RenderIndicator
          data={data}
          activeIndex={activeIndex}
          indicatorRef={indicatorRef}
          activeColor={COLORS.primary}
          indicatorStyle={styles.dot}
          inactiveColor={COLORS.purple}
          scrollToActiveIndex={handleScrollToActiveIndex}
          contentContainerStyle={{
            paddingHorizontal: SPACING,
            marginVertical: convertPX(10),
          }}
        />
        <View style={styles.iconWrap}>
          {icons.map(list => (
            <View key={list.text} style={styles.iconItem}>
              <TouchableOpacity>
                <Image source={list.src} style={styles.icon} />
              </TouchableOpacity>
              <Text style={styles.iconText}>{list.text}</Text>
            </View>
          ))}
        </View>

        <View style={styles.optionWrap}>
          {options.map(list => (
            <View key={list.text} style={styles.optionItem}>
              <Text style={styles.optionText}>{list.text}</Text>
              <TouchableOpacity
                onPress={
                  list.link.trim() !== ''
                    ? () => props.navigation.navigate(list.link)
                    : undefined
                }
                style={styles.optionIconWrap}>
                <Text style={styles.optionIconText}>{list.iconText}</Text>
                <RenderIcon src="EvilIcons" name="chevron-right" />
              </TouchableOpacity>
            </View>
          ))}
        </View>

        <View style={styles.recentWrap}>
          <Text style={styles.recentTitle}>Recent Transactions</Text>
          {recents.map(list => (
            <TouchableOpacity key={list.text} style={styles.recentItem}>
              <View
                style={{
                  flexDirection: 'row',
                  alignItems: 'center',
                }}>
                <Image source={checkedIcon} style={styles.recentIcon} />
                <View>
                  <Text style={styles.recentText}>{list.text}</Text>
                  <Text style={styles.recentSubText}>{list.subText}</Text>
                </View>
              </View>

              <Text style={styles.recentAmount}>
                ${list.amount.toLocaleString()}
              </Text>
            </TouchableOpacity>
          ))}
          <TouchableOpacity style={styles.recentBtn} onPress={() => {}}>
            <Text style={styles.recentBtnText}>View all</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.projectionWrap}>
          <Text style={styles.projectionTitle}>
            Hypothetical projection {'\n'} of{' '}
            <Text style={{fontWeight: 'bold'}}>$12000 </Text>at age{' '}
            <Text style={{fontWeight: 'bold'}}>16</Text>16
          </Text>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              paddingHorizontal: '5%',
              marginVertical: '5%',
            }}>
            <Text style={styles.recentSubText}>Investment: $550</Text>
            <Text style={styles.recentSubText}>Investment: $550</Text>
          </View>
          <Image source={barChart} style={styles.barchat} />
        </View>

        <View
          style={[
            styles.recentWrap,
            {
              marginBottom: convertPX(120),
            },
          ]}>
          <Text style={styles.recentTitle}>Grow your Knowledge</Text>
          {knowledge.map(list => (
            <TouchableOpacity
              key={list.text}
              style={{
                display: 'flex',
                flexDirection: 'row',
                alignItems: 'center',
                width: convertPX(327),
                paddingHorizontal: '2%',
                backgroundColor: '#FBFAFA',
              }}>
              <Image source={list.icon} style={styles.recentIcon} />
              <View>
                <Text style={[styles.text, {marginLeft: convertPX(10)}]}>
                  {list.text}?
                </Text>
              </View>
            </TouchableOpacity>
          ))}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const data = [{id: 1}, {id: 2}, {id: 3}, {id: 4}];
