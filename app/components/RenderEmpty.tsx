import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { convertPX } from '../utils';

export default function RenderEmpty() {
  return (
    <View style={{alignItems: 'center', justifyContent: 'center', flex: 1}}>
      <Text style={styles.title}>Oops.....</Text>
      <Text style={styles.text}>
        Something went wrong {'\n'} close app and reopen
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  title: {
    color: '#000',
    fontWeight: '700',
    textAlign: 'center',
    fontFamily: 'Muslin',
    fontSize: convertPX(24),
  },
  text: {
    color: '#000',
    fontWeight: '400',
    textAlign: 'center',
    fontFamily: 'Muslin',
    fontSize: convertPX(14),
    marginVertical: convertPX(6),
  },
});