import styles from './styles';
import React, {Fragment} from 'react';
import {convertPX} from '../../utils';
import {COLORS} from '../../constants/theme';
import {icons, options} from '../../libs/data';
import RenderIcon from '../../components/RenderIcon';
import {NavigationInterface} from '../../../typings/screens';
import {View, Text, Image, TouchableOpacity} from 'react-native';

const HeroBg = (props: {children: JSX.Element}) => (
  <View style={styles.hero}>
    <View
      style={{
        top: 0,
        left: 0,
        opacity: 0.9,
        width: convertPX(60),
        position: 'absolute',
        height: convertPX(60),
        backgroundColor: '#B274E2',
        borderBottomEndRadius: convertPX(80),
      }}>
      <View
        style={{
          top: 0,
          left: 0,
          position: 'absolute',
          width: convertPX(40),
          height: convertPX(40),
          backgroundColor: COLORS.purple,
          borderBottomEndRadius: convertPX(90),
        }}
      />
    </View>
    {props.children}
    <View
      style={{
        bottom: 0,
        opacity: 0.9,
        width: convertPX(60),
        position: 'absolute',
        alignSelf: 'flex-end',
        height: convertPX(60),
        backgroundColor: '#B274E2',
        borderTopLeftRadius: convertPX(90),
      }}>
      <View
        style={{
          bottom: 0,
          position: 'absolute',
          alignSelf: 'flex-end',
          width: convertPX(40),
          height: convertPX(40),
          backgroundColor: COLORS.purple,
          borderTopLeftRadius: convertPX(90),
        }}
      />
    </View>
  </View>
);

export default function hero(props: NavigationInterface) {
  return (
    <Fragment>
      <View>
        <Text style={styles.subtitle}>Family Plus Investments</Text>
        <HeroBg
          children={
            <View>
              <Text style={styles.heroTitle}>$4,500.00</Text>
              <Text style={styles.heroText}>Total Balance</Text>
              <View
                style={{
                  width: '80%',
                  flexDirection: 'row',
                  justifyContent: 'space-around',
                  marginHorizontal: '10%',
                  marginTop: '5%',
                }}>
                <TouchableOpacity style={styles.heroBtn}>
                  <Text style={styles.heroBtnText}>Add Money</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.heroBtn}>
                  <Text style={styles.heroBtnText}>withdraw</Text>
                </TouchableOpacity>
              </View>
            </View>
          }
        />

        <View style={styles.dotWrap}>
          <View style={[styles.dot, {backgroundColor: COLORS.primary}]}></View>
          <View style={styles.dot}></View>
          <View style={styles.dot}></View>
          <View style={styles.dot}></View>
        </View>
      </View>
      <View style={styles.iconWrap}>
        {icons.map(list => (
          <View
            key={list.text}
            style={{alignItems: 'center', justifyContent: 'center'}}>
            <TouchableOpacity>
              <Image source={list.src} style={styles.icon} />
            </TouchableOpacity>
            <Text style={styles.iconText}>{list.text}</Text>
          </View>
        ))}
      </View>

      <View style={styles.options}>
        {options.map(list => (
          <View
            key={list.text}
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              display: 'flex',
              alignItems: 'center',
            }}>
            <Text style={styles.text}>{list.text}</Text>
            <TouchableOpacity
              onPress={
                list.link.trim() !== ''
                  ? () => props.navigation.navigate(list.link)
                  : undefined
              }
              style={{flexDirection: 'row', alignItems: 'center'}}>
              <Text style={[styles.text, {marginRight: 0, color: '#7F18D0'}]}>
                {list.iconText}
              </Text>
              <RenderIcon src="EvilIcons" name="chevron-right" />
            </TouchableOpacity>
          </View>
        ))}
      </View>
    </Fragment>
  );
}
