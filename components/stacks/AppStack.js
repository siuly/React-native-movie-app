import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import DetailScreen from '../screens/DetailScreen'
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
      options={
        ({route})=> ({
          title: route.params.title,
          headerBacktitle: 'Back to List',
          headerTitleStyle:{
            alignSelf:'center',
            fontSize: 16,
            fontWeight: 'bold',
            color:'#000'
          },
          headerTintColor:'darkblue'
         })}/>
    </Stack.Navigator>
  </NavigationContainer>
  )
}

export default AppStack
