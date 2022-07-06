import {convertPX} from '../../utils';
import {StyleSheet} from 'react-native';
import {COLORS, width} from '../../constants/theme';

export default StyleSheet.create({
  root: {
    width,
    color: '#000',
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    height: convertPX(40),
    backgroundColor: COLORS.primary,
    justifyContent: 'space-between',
    paddingHorizontal: convertPX(20),
  },
  title: {
    fontWeight: '700',
    color: COLORS.black,
    textAlign: 'center',
    fontFamily: 'Muslin',
    fontSize: convertPX(18),
  },
});
