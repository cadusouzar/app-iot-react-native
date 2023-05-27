import React, {useCallback} from 'react';
import { View } from 'react-native';
import { useFonts } from 'expo-font';
import * as SplashScreen from 'expo-splash-screen';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
//telas/componentes
import Home from './src/components/pages/Home'
import Gases from './src/components/pages/Gases'
import SensorDeChama from './src/components/pages/SensorDeChama'
import MyDevice from './src/components/pages/MyDevice'
import Account from './src/components/pages/AccountPage'
import Registro from './src/components/pages/Register'
import Login from './src/components/pages/Login'

const Stack = createStackNavigator();

export default function App() { 
  const [fontsLoaded] = useFonts({
    'Quicksand-Regular': require('./assets/fonts/Quicksand-Regular.ttf'),
    'Quicksand-Bold': require('./assets/fonts/Quicksand-Bold.ttf'),
  });

  const onLayoutRootView = useCallback(async () => {
    if (fontsLoaded) {
      await SplashScreen.hideAsync();
    }
  }, [fontsLoaded]);

  if (!fontsLoaded) {
    return null;
  }

  return (
  <NavigationContainer>
    <Stack.Navigator initialRouteName="Login">
      <Stack.Screen name="Login" component={Login} options={{headerShown: false}}/>
      <Stack.Screen name="Registro" component={Registro} options={{headerShown: false}}/>
      <Stack.Screen name="Home" component={Home} options={{headerShown: false}}/>
      <Stack.Screen name="Gases" component={Gases} options={{headerShown: false}}/>
      <Stack.Screen name="Chama" component={SensorDeChama} options={{headerShown: false}}/>
      <Stack.Screen name="Dispositivo" component={MyDevice} options={{headerShown: false}}/>
      <Stack.Screen name="Conta" component={Account} options={{headerShown: false}}/>
    </Stack.Navigator>
  </NavigationContainer>
  );
}


