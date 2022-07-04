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
import ellipseBg from '../../assets/icons/EllipseBg.png';

export default function Index(props: NavigationInterface) {
  return (
    <SafeAreaView>
      <Header
        {...props}
        leftIcon={{name: 'chevron-back'}}
        rightIcon={{name: 'question', src: 'EvilIcons', size: 30}}
      />
      <ScrollView
        contentInsetAdjustmentBehavior="automatic"
        contentContainerStyle={styles.root}>
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
            <Text style={[styles.heroText, {top: 0, right: convertPX(40)}]}>
              International Company {'\n'} Stocks
            </Text>
            <Text
              style={[
                styles.heroText,
                {top: convertPX(65), left: convertPX(5)},
              ]}>
              Medium Company {'\n'} stocks (IJH)
            </Text>

            <Text style={[styles.heroText, {top: convertPX(80), right: 0}]}>
              Small Company {'\n'} Stocks (IJR)
            </Text>
            <Image source={heroImg} style={styles.image} />
            <Text style={[styles.heroText, {bottom: 0, left: convertPX(70)}]}>
              Large Company {'\n'}Stocks (VOO)
            </Text>
          </View>
        </View>

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
