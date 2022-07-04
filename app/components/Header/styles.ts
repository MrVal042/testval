import {convertPX, width} from '../../utils';
import {COLORS} from '../../constants/theme';
import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  root: {
    width: width,
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
