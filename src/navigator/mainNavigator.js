import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import {createDrawerNavigator} from 'react-navigation-drawer';

import SplashScreen from "../features/SplashScreen";
import SideMenu from './sideMenu';
//@BlueprintImportInsertion
import ArticleList49611Navigator from '../features/ArticleList49611/navigator';
import ArticleList49610Navigator from '../features/ArticleList49610/navigator';
import ArticleList49609Navigator from '../features/ArticleList49609/navigator';
import ArticleList49577Navigator from '../features/ArticleList49577/navigator';
import ArticleList49576Navigator from '../features/ArticleList49576/navigator';
import ArticleList49575Navigator from '../features/ArticleList49575/navigator';
import MessengerNavigator from '../features/Messenger/navigator';
import TutorialNavigator from '../features/Tutorial/navigator';
import MapsNavigator from '../features/Maps/navigator';
import CalendarNavigator from '../features/Calendar/navigator';
import CameraNavigator from '../features/Camera/navigator';
import EmailAuthNavigator from '../features/EmailAuth/navigator';

/**
 * new navigators can be imported here
 */

const AppNavigator = {
    SplashScreen: {
      screen: SplashScreen
    },
    //@BlueprintNavigationInsertion
ArticleList49611: { screen: ArticleList49611Navigator },
ArticleList49610: { screen: ArticleList49610Navigator },
ArticleList49609: { screen: ArticleList49609Navigator },
ArticleList49577: { screen: ArticleList49577Navigator },
ArticleList49576: { screen: ArticleList49576Navigator },
ArticleList49575: { screen: ArticleList49575Navigator },
Messenger: { screen: MessengerNavigator },
Tutorial: { screen: TutorialNavigator },
Maps: { screen: MapsNavigator },
Calendar: { screen: CalendarNavigator },
Camera: { screen: CameraNavigator },
EmailAuth: { screen: EmailAuthNavigator },

    /** new navigators can be added here */
};

const DrawerAppNavigator = createDrawerNavigator(
  {
    ...AppNavigator,
  },
  {
    contentComponent: SideMenu,
    initialRouteName: 'SplashScreen',
  },
);

const AppContainer = createAppContainer(DrawerAppNavigator);

export default AppContainer;
