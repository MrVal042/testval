import {convertPX, width} from '../../utils';
import {COLORS} from '../../constants/theme';
import {StyleSheet} from 'react-native';
import {widthPercentageToDP as WP} from 'react-native-responsive-screen';

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
    lineHeight: convertPX(36),
    letterSpacing: convertPX(2),
  },
});
