import {StyleSheet} from 'react-native';
import {convertPX, height, width} from '../../utils';
import {COLORS} from '../../constants/theme';

export default StyleSheet.create({
  root: {
    width: width,
    alignItems: 'center',
    backgroundColor: COLORS.primary,
  },

  heroWrap: {width: width, alignItems: 'center'},

  image: {
    width: convertPX(238),
    height: convertPX(238),
    marginHorizontal: convertPX(10),
  },
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
  dotWrap: {
    display: 'flex',
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'center',
    marginVertical: convertPX(15),
  },

  dot: {
    width: convertPX(5),
    height: convertPX(5),
    backgroundColor: 'gray',
    borderRadius: convertPX(20),
    marginHorizontal: convertPX(3),
  },
  button: {
    alignItems: 'center',
    width: convertPX(327),
    height: convertPX(50),
    color: COLORS.primary,
    marginTop: convertPX(20),
    justifyContent: 'center',
    borderRadius: convertPX(6),
    backgroundColor: COLORS.purple,
  },
  buttonText: {color: COLORS.primary, fontSize: convertPX(16)},
});
