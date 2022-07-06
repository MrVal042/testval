import lockIcon from '../../assets/icons/lockIcon.png';
import userIcon from '../../assets/icons/userIcon.png';
import ellipse1 from '../../assets/icons/Ellipse1.png';
import ellipse2 from '../../assets/icons/Ellipse2.png';
import usersIcon from '../../assets/icons/usersIcon.png';
import cameraVIcon from '../../assets/icons/cameraVIcon.png';
import refreshIcon from '../../assets/icons/refreshIcon.png';
import cameraHIcon from '../../assets/icons/cameraHIcon.png';
import cameraSVIcon from '../../assets/icons/cameraSVIcon.png';

export const icons: Array<IICons> = [
  {src: cameraVIcon, text: 'FamilyPlus Savings'},
  {src: cameraHIcon, text: 'Invest in Stocks'},
  {src: userIcon, text: 'Early for kids'},
];

export const options: Array<IOptions> = [
  {text: 'Portfolio', iconText: 'Aggressive', link: 'PortfolioScreen'},
  {text: 'Round-Up-Settings', iconText: 'Automatic', link: ''},
  {text: 'Recurring', iconText: '$20/Monthly', link: ''},
  {text: 'Beneficiary', iconText: '1 Child', link: ''},
  {text: 'One-time Investment', iconText: '', link: ''},
];

export const recents: Array<IRecents> = [
  {text: 'One Time Investment', amount: 20, subText: 'Processing'},
  {amount: -8.01, text: 'Withdrawal', subText: 'Processing'},
  {amount: 10.36, text: 'Round-Up Investment', subText: 'Processing'},
];

export const knowledge: Array<IKnowledge> = [
  {text: 'What is Family Plus', icon: usersIcon, subText: 'Processing'},
  {icon: refreshIcon, text: 'How do Round Ups work', subText: 'Processing'},
  {
    icon: cameraSVIcon,
    text: 'What is FamilyPlus Savings',
    subText: 'Processing',
  },
  {icon: lockIcon, text: 'What can I withdraw my money', subText: 'Processing'},
];

export const outcome: Array<IOutcome> = [
  {text: 'Large Company Stocks(VOO)', percentage: 55, icon: ellipse1},
  {percentage: 10, text: 'Medium Company Stocks (IJH)', icon: ellipse2},
  {percentage: 5, text: 'Small Company Stocks(IJR)', icon: ellipse2},
  {
    percentage: 5,
    text: 'International Company Stocks (IXUS) ',
    icon: ellipse1,
  },
];

export const splashData: Array<ISplashData> = [
  {
    id: 1,
    title: `3KLE invests your money \n intelligently in stocks`,
    subtitle: `Build, perserve and manage your \n family wealth with stocks investment `,
  },
  {
    id: 2,
    title: `Invests your money today \n Get stocks bonus`,
    subtitle: `Build, perserve and manage your \n family wealth with stocks investment `,
  },
  {
    id: 3,
    title: `3KLE invests your money \n intelligently in stocks`,
    subtitle: `Build, perserve and manage your \n family wealth with stocks investment `,
  },
];
