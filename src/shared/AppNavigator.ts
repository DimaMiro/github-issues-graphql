import {createAppContainer} from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import HomeScreen from '../screens/HomeScreen';

const RootStack = createStackNavigator(
    {
        Home: HomeScreen,
    },
    {
        defaultNavigationOptions: {
            header: null
        },
        initialRouteName: 'Home',
    },
)
const AppContainer = createAppContainer(RootStack)

export default AppContainer
