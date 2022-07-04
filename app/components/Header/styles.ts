import {convertPX} from '../../utils';
import {COLORS} from '../../constants/theme';
import {StyleSheet} from 'react-native';
import {widthPercentageToDP as WP} from 'react-native-responsive-screen';

export default StyleSheet.create({
  root: {
    width: '100%',
    display: 'flex',
    height: WP(15),
    alignItems: 'center',
    flexDirection: 'row',
    backgroundColor: COLORS.primary,
    color: '#000',
    paddingHorizontal: WP(8),
    justifyContent: 'space-between',
  },
  title: {
    color: COLORS.black,
    fontWeight: '700',
    textAlign: 'center',
    fontFamily: 'Muslin',
    fontSize: convertPX(18),
    lineHeight: convertPX(36),
    letterSpacing: convertPX(2),
  },
});
