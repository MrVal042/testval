import {StyleSheet} from 'react-native';
import {COLORS} from '../../constants/theme';
import {convertPX, height} from '../../utils';

export default StyleSheet.create({
  root: {
    minHeight: height,
    alignItems: 'center',
    backgroundColor: '#FFFFFF',
  },

  subtitle: {
    color: '#080D45',
    fontWeight: '700',
    textAlign: 'center',
    fontFamily: 'Muslin',
    height: convertPX(36),
    fontSize: convertPX(24),
    lineHeight: convertPX(36),
    marginVertical: convertPX(5),
    letterSpacing: convertPX(2),
  },
  dotWrap: {
    display: 'flex',
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'center',
    marginVertical: convertPX(15),
    marginBottom: 0,
  },

  dot: {
    width: convertPX(24),
    height: convertPX(24),
    backgroundColor: COLORS.primary,
    borderColor: COLORS.blue,
    borderWidth: 1.2,
    borderRadius: convertPX(20),
    marginHorizontal: convertPX(3),
  },
  heroWrap: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  heroText: {
    color: '#080D45',
    fontFamily: 'Muslin',
    position: 'relative',
    fontSize: convertPX(10),
    lineHeight: convertPX(21),
    marginVertical: convertPX(18),
    letterSpacing: convertPX(0.9),
  },
  image: {
    width: convertPX(180),
    height: convertPX(180),
    marginHorizontal: '25%',
  },

  text: {
    color: '#000',
    fontWeight: '400',
    textAlign: 'center',
    fontFamily: 'Muslin',
    height: convertPX(18),
    fontSize: convertPX(14),
    lineHeight: convertPX(17.57),
    marginVertical: convertPX(18),
    letterSpacing: convertPX(0.9),
    marginHorizontal: convertPX(20),
  },

  recentWrap: {
    marginHorizontal: convertPX(20),
    marginBottom: convertPX(150),
  },
  outcomeTitle: {
    width: '100%',
    color: '#4B4B4B',
    fontWeight: '700',
    fontFamily: 'Muslin',
    fontSize: convertPX(14),
    lineHeight: convertPX(21),
    backgroundColor: '#FBFAFA',
    paddingTop: convertPX(15),
    paddingHorizontal: convertPX(5),
    marginBottom: convertPX(3),
    letterSpacing: convertPX(0.9),
  },
  outcomeSubTitle: {
    color: '#666666',
    fontWeight: '700',
    fontFamily: 'Muslin',
    fontSize: convertPX(12),
    lineHeight: convertPX(18),
    backgroundColor: '#FBFAFA',
    letterSpacing: convertPX(0.9),
    paddingHorizontal: convertPX(5),
  },
  outcomeItems: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: convertPX(327),
    paddingHorizontal: '2%',
    backgroundColor: '#F7F7F7',
    paddingVertical: convertPX(2),
    marginVertical: convertPX(5),
  },
  outcomeText: {
    width: '100%',
    color: '#080D45',
    fontWeight: '600',
    fontFamily: 'Muslin',
    fontSize: convertPX(14),
    paddingTop: convertPX(5),
    lineHeight: convertPX(18),
    paddingHorizontal: convertPX(5),
  },

  percentage: {
    marginRight: 5,
    width: convertPX(24),
    height: convertPX(24),
  },
  button: {
    alignItems: 'center',
    width: convertPX(327),
    height: convertPX(50),
    justifyContent: 'center',
    borderRadius: convertPX(6),
    marginTop: convertPX(30),
    backgroundColor: 'lightgray',
  },
  buttonText: {
    color: COLORS.black,
    fontSize: convertPX(16),
  },
});
