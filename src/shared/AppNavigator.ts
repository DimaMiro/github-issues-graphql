import {createAppContainer} from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import HomeScreen from '../screens/HomeScreen';
import SearchScreen from "../screens/SearchScreen";

const RootStack = createStackNavigator(
    {
        Search: SearchScreen,
        Home: HomeScreen,
    },
    {
        defaultNavigationOptions: {
            header: null
        },
        initialRouteName: 'Search',
    },
)
const AppContainer = createAppContainer(RootStack)

export default AppContainer
