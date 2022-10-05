import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { NavigationContainer} from '@react-navigation/native'
import MovieScreen from '../screens/MovieScreen';
import TVShowScreen from '../screens/TVShowScreen';
import SearchScreen from '../screens/SearchScreen';

const Tab = createMaterialTopTabNavigator();

const TabNavigation = () => {


    return(
        <Tab.Navigator screenOptions={{
            headerShown: false,
            tabBarIndicatorStyle:{
                height: 4,
            }
        }}>
        <Tab.Screen name="Movies" component={MovieScreen}  />
        <Tab.Screen name="Search" component={SearchScreen} />
        <Tab.Screen name="TVShow" component={TVShowScreen} />
        </Tab.Navigator>
    )

}

export default TabNavigation