import React from 'react';
import styles from './styles';
import Header from '../../components/Header';
import {COLORS} from '../../constants/theme';
import coins from '../../assets/images/coins.png';
import {Text, TouchableOpacity, View} from 'react-native';
import {NavigationInterface} from '../../../typings/screens';
import {Image, SafeAreaView, ScrollView, StatusBar} from 'react-native';
export default function Index(props: NavigationInterface) {

  return (
    <SafeAreaView>
      <StatusBar backgroundColor="#FFF" barStyle={'dark-content'} />
      <Header {...props} leftIcon={{name: 'close', disabled: true}} />
      <ScrollView
        contentInsetAdjustmentBehavior="automatic"
        contentContainerStyle={styles.root}>
        <Image source={coins} style={styles.image} />
        <View>
          <Text style={styles.title}>
            3KLE invests your money {'\n'} intelligently in stocks
          </Text>
          <Text style={styles.text}>
            Build, perserve and manage your {'\n'} family wealth with stocks
            investment
          </Text>
        </View>
        <View style={styles.dotWrap}>
          <View style={styles.dot}></View>
          <View style={styles.dot}></View>
          <View style={[styles.dot, {backgroundColor: COLORS.purple}]}></View>
        </View>
        <TouchableOpacity
          style={styles.button}
          onPress={() => props.navigation.navigate('InvestScreen')}>
          <Text style={styles.buttonText}>Get Started</Text>
        </TouchableOpacity>
      </ScrollView>
    </SafeAreaView>
  );
}
