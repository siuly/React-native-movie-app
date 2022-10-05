import { StatusBar } from 'expo-status-bar';
import { NativeBaseProvider } from 'native-base';
import Header from './components/layout/Header';
import AppStack from './components/stacks/AppStack';

const  App = () => {
  return (
    <NativeBaseProvider>
      {/* <Header /> */}
      <AppStack />
      <StatusBar style='auto' />
    </NativeBaseProvider>
  );
}
export default App