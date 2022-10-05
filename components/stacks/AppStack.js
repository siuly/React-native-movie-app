import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import DetailScreen from '../screens/DetailScreen'
import MovieScreen from '../screens/MovieScreen'
import TabNavigation from './TabNavigation'

const Stack = createNativeStackNavigator()

const AppStack = props => {

  return(
  <NavigationContainer>
    <Stack.Navigator>
      <Stack.Screen
        name='Index'
        component={TabNavigation}
        options={{
          title: 'Movie App',
          headerStyle: {
            backgroundColor: '#2c3e50'
          },
          headerTitleStyle: {
            color: '#fff'
          }
        }}
      />      
      <Stack.Screen name='Details' component={DetailScreen} 
      options={{
          headerBackTitleVisible: 'true',
          headerBackTitle: 'Back to List',
          headerStyle: {
            alignItems: 'center'
          },
          headerTitleStyle: {
            color: '#fff'
          } }}/>
    </Stack.Navigator>
  </NavigationContainer>
  )
}

export default AppStack
