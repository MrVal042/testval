import {StyleSheet} from 'react-native';
import {convertPX, height} from '../../utils';
import {COLORS} from '../../constants/theme';

export default StyleSheet.create({
  root: {
    height: height,
    alignItems: 'center',
  },

  image: {
    marginTop: 45,
    width: convertPX(238),
    height: convertPX(238),
    marginVertical: convertPX(10),
    marginHorizontal: convertPX(45),
  },
  title: {
    color: '#000',
    fontWeight: '700',
    textAlign: 'center',
    fontFamily: 'Muslin',
    height: convertPX(72),
    fontSize: convertPX(24),
    lineHeight: convertPX(36),
    letterSpacing: convertPX(2),
  },
  text: {
    color: '#000',
    fontWeight: '400',
    textAlign: 'center',
    fontFamily: 'Muslin',
    width: convertPX(292),
    height: convertPX(41),
    fontSize: convertPX(14),
    lineHeight: convertPX(21),
    marginVertical: convertPX(10),
    letterSpacing: convertPX(0.9),
    marginHorizontal: convertPX(20),
  },
  dotWrap: {
    display: 'flex',
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'center',
    marginVertical: convertPX(10),
  },

  dot: {
    width: convertPX(5),
    height: convertPX(5),
    backgroundColor: 'gray',
    borderRadius: convertPX(20),
    marginHorizontal: convertPX(2),
  },
  button: {
    alignItems: 'center',
    width: convertPX(327),
    height: convertPX(50),
    color: COLORS.primary,
    justifyContent: 'center',
    borderRadius: convertPX(6),
    backgroundColor: COLORS.purple,
  },
  buttonText: {color: COLORS.primary, fontSize: convertPX(16)},
});
