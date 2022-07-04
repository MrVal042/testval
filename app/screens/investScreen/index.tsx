import React from 'react';
import styles from './styles';
import HeroSection from './heroComp';
import {convertPX} from '../../utils';
import Header from '../../components/Header';
import { recents, knowledge} from '../../libs/data';
import {Image, ScrollView, Text} from 'react-native';
import barChart from '../../assets/images/barChart.png';
import checkedIcon from '../../assets/icons/checkedIcon.png';
import {NavigationInterface} from '../../../typings/screens';
import {SafeAreaView, TouchableOpacity, View} from 'react-native';


export default function Index(props: NavigationInterface) {
  return (
    <SafeAreaView style={styles.root}>
      <Header {...props} leftIcon={{name: 'chevron-back'}} />
      <ScrollView>
        <HeroSection {...props} />

        <View style={styles.recentWrap}>
          <Text style={styles.recentTitle}>Recent Transactions</Text>
          {recents.map(list => (
            <TouchableOpacity
              key={list.text}
              style={{
                display: 'flex',
                flexDirection: 'row',
                justifyContent: 'space-between',
                alignItems: 'center',
                paddingHorizontal: '2%',
                width: convertPX(327),
              }}>
              <View
                style={{
                  flexDirection: 'row',
                  alignItems: 'center',
                }}>
                <Image source={checkedIcon} style={styles.checked} />
                <View>
                  <Text style={styles.recentText}>{list.text}</Text>
                  <Text style={styles.recentSubText}>{list.subText}</Text>
                </View>
              </View>

              <Text
                style={[
                  styles.text,
                  {color: '#4B4B4B', fontSize: convertPX(12)},
                ]}>
                ${list.amount.toLocaleString()}
              </Text>
            </TouchableOpacity>
          ))}
          <TouchableOpacity style={styles.button} onPress={() => {}}>
            <Text style={styles.buttonText}>View all</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.projection}>
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
              marginBottom: convertPX(200),
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
              <Image source={list.icon} style={styles.checked} />
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
