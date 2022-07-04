import React from 'react';
import styles from './styles';
import {convertPX} from '../../utils';
import {COLORS} from '../../constants/theme';
import {View, Text, TouchableOpacity} from 'react-native';

export default function hero() {
  return (
    <View>
      <View style={styles.heroWrap}>
        <View
          style={[
            styles.heroBIcon,
            {
              left: 0,
              top: 0,
              borderBottomEndRadius: convertPX(90),
              borderTopLeftRadius: convertPX(15),
            },
          ]}>
          <View
            style={[
              styles.heroIIcon,
              {
                top: 0,
                left: 0,
                borderBottomEndRadius: convertPX(90),
                borderTopLeftRadius: convertPX(15),
              },
            ]}
          />
        </View>
        <View>
          <Text style={styles.heroTitle}>$4,500.00</Text>
          <Text style={styles.heroText}>Total Balance</Text>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
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
        <View
          style={[
            styles.heroBIcon,
            {
              bottom: 0,
              alignSelf: 'flex-end',
              borderTopLeftRadius: convertPX(90),
              borderBottomEndRadius: convertPX(15),
            },
          ]}>
          <View
            style={[
              styles.heroIIcon,
              {
                bottom: 0,
                alignSelf: 'flex-end',
                borderTopLeftRadius: convertPX(90),
                borderBottomEndRadius: convertPX(15),
              },
            ]}
          />
        </View>
      </View>

      <View style={styles.dotWrap}>
        <View style={[styles.dot, {backgroundColor: COLORS.primary}]}></View>
        <View style={styles.dot}></View>
        <View style={styles.dot}></View>
        <View style={styles.dot}></View>
      </View>
    </View>
  );
}
