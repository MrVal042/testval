import React from 'react';
import styles from './styles';
import {convertPX} from '../../utils';
import {outcome} from '../../libs/data';
import Header from '../../components/Header';
import {COLORS} from '../../constants/theme';
import RenderIcon from '../../components/RenderIcon';
import {Image, ScrollView, Text} from 'react-native';
import heroImg from '../../assets/images/circleChart.png';
import {NavigationInterface} from '../../../typings/screens';
import {SafeAreaView, TouchableOpacity, View} from 'react-native';

export default function Index(props: NavigationInterface) {
  return (
    <SafeAreaView style={styles.root}>
      <Header
        {...props}
        leftIcon={{name: 'chevron-back'}}
        rightIcon={{name: 'question', src: 'EvilIcons', size: 30}}
      />
      <ScrollView>
        <View>
          <Text style={styles.subtitle}>Aggressive Portfolio</Text>

          <View style={styles.dotWrap}>
            <View style={styles.dot}></View>
            <View style={styles.dot}></View>
            <View style={styles.dot}></View>
            <View style={[styles.dot, {backgroundColor: COLORS.blue}]}></View>
            <View style={styles.dot}></View>
          </View>

          <View style={styles.heroWrap}>
            <View style={{flexDirection: 'row'}}>
              <Text style={[styles.heroText, {top: 85, left: -15}]}>
                Medium Company {'\n'} stocks (IJH)
              </Text>
              <Text style={[styles.heroText, {top: 25, left: 60}]}>
                International Company {'\n'} Stocks
              </Text>
              <Text style={[styles.heroText, {top: 105, left: 20}]}>
                Small Company ){'\n'} Stocks (IJR)
              </Text>
            </View>
          </View>

          <Image source={heroImg} style={styles.image} />

          <Text
            style={[
              styles.heroText,
              {top: -20, right: 40, textAlign: 'center'},
            ]}>
            Large Company {'\n'}Stocks (VOO)
          </Text>
        </View>

        <View style={styles.recentWrap}>
          <View
            style={{
              backgroundColor: '#FBFAFA',
              width: '70%',
              marginBottom: convertPX(5),
            }}>
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
                <Text
                  style={[
                    styles.text,
                    {color: '#4B4B4B', fontSize: convertPX(12)},
                  ]}>
                  {list.percentage}%
                </Text>
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
