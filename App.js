import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

/* ThirdParty Imports */
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer,DefaultTheme } from '@react-navigation/native';
import { useFonts } from 'expo-font';

/* Custom Imports */
import Home from './Screens/Home';
import Details from './Screens/Details';
export default function App() {
  const  [loaded]  =  useFonts({
    InterBold: require('./assets/fonts/Inter-Bold.ttf'),
    InterSemiBold: require('./assets/fonts/Inter-SemiBold.ttf'),
    InterRegular: require('./assets/fonts/Inter-Regular.ttf'),
    InterMedium: require('./assets/fonts/Inter-Medium.ttf'),
    InterLight: require('./assets/fonts/Inter-Light.ttf'),
  });
  if (!loaded) {
    return null;
  }
  // Load fonts
  const Stack = createStackNavigator();
  const theme = {
    ...DefaultTheme,
    colors: {
      ...DefaultTheme.colors,
      background: 'transparent'
    },
  };
  return (
    <NavigationContainer theme={theme}>
      <Stack.Navigator
        screenOptions={{
        headerShown: false
        }}
        initialRouteName='Home'
      >
        <Stack.Screen name='Home' component={Home} />
        <Stack.Screen name = "Details" component={Details} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}

const styles = StyleSheet.create({})

