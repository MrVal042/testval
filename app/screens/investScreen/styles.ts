import {StyleSheet} from 'react-native';
import {COLORS} from '../../constants/theme';
import {convertPX, height, width} from '../../utils';

const topSize = 60;

export default StyleSheet.create({
  root: {
    width: width,
    // minHeight: height,
    alignItems: 'center',
    backgroundColor: COLORS.primary,
  },

  subtitle: {
    color: '#4B4B4B',
    fontWeight: '500',
    textAlign: 'center',
    fontSize: convertPX(20),
    marginVertical: convertPX(5),
  },

  heroWrap: {width: width},

  hero: {
    marginTop: 5,
    alignItems: 'center',
    width: convertPX(326),
    minHeight: convertPX(173),
    borderRadius: convertPX(5),
    backgroundColor: COLORS.purple,
    paddingVertical: convertPX(10),
    marginVertical: convertPX(10),
  },
  heroBIcon: {
    opacity: 0.9,
    position: 'absolute',
    width: convertPX(topSize),
    height: convertPX(topSize),
    backgroundColor: '#B274E2',
  },
  heroIIcon: {
    position: 'absolute',
    width: convertPX(topSize - 20),
    height: convertPX(topSize - 20),
    backgroundColor: COLORS.purple,
  },

  heroTitle: {
    marginTop: '3%',
    color: '#FFFFFF',
    fontWeight: '500',
    textAlign: 'center',
    alignSelf: 'center',
    fontFamily: 'Muslin',
    fontSize: convertPX(40),
  },
  heroText: {
    color: '#FFFFFF',
    textAlign: 'center',
    alignSelf: 'center',
    fontFamily: 'Muslin',
    marginVertical: '1%',
    fontSize: convertPX(16),
  },
  heroBtnWrap: {
    zIndex: 100,
    flexDirection: 'row',
    marginVertical: '3%',
    justifyContent: 'space-between',
  },
  heroBtn: {
    alignItems: 'center',
    width: convertPX(92),
    height: convertPX(34),
    justifyContent: 'center',
    borderRadius: convertPX(6),
    marginHorizontal: convertPX(10),
    backgroundColor: COLORS.primary,
  },
  heroBtnText: {
    color: '#4B4B4B',
    textAlign: 'center',
    fontFamily: 'Muslin',
    fontSize: convertPX(12),
  },

  dotWrap: {
    display: 'flex',
    alignSelf: 'center',
    alignItems: 'center',
    flexDirection: 'row',
    width: convertPX(56),
    justifyContent: 'center',
    marginVertical: convertPX(10),
  },
  dot: {
    borderWidth: 1,
    width: convertPX(8),
    height: convertPX(8),
    borderColor: COLORS.purple,
    borderRadius: convertPX(20),
    backgroundColor: COLORS.purple,
    marginHorizontal: convertPX(3),
  },
  iconWrap: {
    display: 'flex',
    alignItems: 'center',
    flexDirection: 'row',
    width: convertPX(327),
    marginVertical: convertPX(20),
    justifyContent: 'space-between',
  },
  iconItem: {
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#ffffff',
    maxWidth: convertPX(100),
  },
  icon: {
    width: convertPX(40),
    height: convertPX(40),
  },
  iconText: {
    color: '#000',
    fontWeight: '600',
    fontFamily: 'Muslin',
    fontSize: convertPX(12),
    marginVertical: convertPX(10),
  },

  optionWrap: {
    width: convertPX(327),
    minHeight: convertPX(270),
    backgroundColor: '#F4F4F4',
    borderRadius: convertPX(6),
    marginVertical: convertPX(10),
    paddingVertical: convertPX(10),
  },
  optionItem: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: convertPX(1),
    justifyContent: 'space-between',
    paddingHorizontal: convertPX(10),
  },
  optionText: {
    color: '#000',
    fontWeight: '600',
    fontFamily: 'Muslin',
    fontSize: convertPX(14),
  },

  optionIconWrap: {flexDirection: 'row', alignItems: 'center'},

  optionIconText: {
    color: '#7F18D0',
    fontWeight: '600',
    fontFamily: 'Muslin',
    fontSize: convertPX(14),
    marginVertical: convertPX(18),
  },

  recentWrap: {
    width: convertPX(327),
    paddingHorizontal: convertPX(2),
    marginVertical: convertPX(35),
  },
  recentTitle: {
    color: '#4B4B4B',
    fontWeight: '700',
    fontFamily: 'Muslin',
    fontSize: convertPX(16),
    backgroundColor: '#FBFAFA',
    paddingVertical: convertPX(15),
    paddingHorizontal: convertPX(5),
  },
  recentItem: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    height: convertPX(65),
    paddingHorizontal: '2%',
    justifyContent: 'space-between',
  },
  recentIcon: {
    marginRight: 5,
    width: convertPX(24),
    height: convertPX(24),
  },
  recentText: {
    color: '#4B4B4B',
    fontWeight: '600',
    fontFamily: 'Muslin',
    fontSize: convertPX(14),
    paddingTop: convertPX(5),
    paddingHorizontal: convertPX(5),
  },
  recentSubText: {
    color: '#4B4B4B',
    fontWeight: '400',
    fontFamily: 'Muslin',
    fontSize: convertPX(12),
    paddingVertical: convertPX(2),
    paddingHorizontal: convertPX(5),
  },
  recentAmount: {
    color: '#4B4B4B',
    fontWeight: '400',
    textAlign: 'center',
    fontFamily: 'Muslin',
    fontSize: convertPX(15),
  },
  recentBtn: {
    alignItems: 'center',
    height: convertPX(50),
    color: COLORS.primary,
    justifyContent: 'center',
    marginTop: convertPX(12),
    borderRadius: convertPX(6),
    backgroundColor: COLORS.purple,
  },
  recentBtnText: {
    color: COLORS.primary,
    fontSize: convertPX(16),
  },

  projectionWrap: {
    width: convertPX(327),
    minHeight: convertPX(471),
    backgroundColor: '#EDEEF7',
    marginVertical: convertPX(25),
  },
  projectionTitle: {
    color: '#4B4B4B',
    textAlign: 'center',
    fontFamily: 'Muslin',
    fontSize: convertPX(20),
    marginTop: convertPX(15),
    paddingVertical: convertPX(15),
    paddingHorizontal: convertPX(5),
  },
  barchat: {
    width: convertPX(320),
    height: convertPX(197),
    marginTop: convertPX(110),
  },
  text: {
    color: '#000',
    fontWeight: '400',
    textAlign: 'center',
    fontFamily: 'Muslin',
    fontSize: convertPX(14),
    marginVertical: convertPX(18),
    marginHorizontal: convertPX(20),
  },
});
