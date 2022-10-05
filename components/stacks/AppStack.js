import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import DetailScreen from '../screens/DetailScreen'
import IndexScreen from '../screens/IndexScreen'
import MovieScreen from '../screens/MovieScreen'

const Stack = createNativeStackNavigator()

const AppStack = props => {

  return(
  <NavigationContainer>
    <Stack.Navigator>
      <Stack.Screen
        name='Index'
        component={IndexScreen}
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
          headerBackTitle: 'Bacl to List',
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
