import { StyleSheet, Text, View,SafeAreaView, } from 'react-native'
import React from 'react'
import Splash from './src/screens/Splash';
import Onboarding from './src/screens/Onboarding';
import Login from './src/screens/Login';
import Forgot from './src/screens/Forgot';
import Otp from './src/screens/Otp';
import Reset from './src/screens/Reset';
import Signup from './src/screens/Signup';
import {NavigationContainer} from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
const Stack = createNativeStackNavigator();
const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
      <Stack.Screen
          name="Splash"
          component={Splash}
          options={{headerShown: false}}
        />
      <Stack.Screen
          name="Otp"
          component={Otp}
          options={{headerShown: false}}
        />
      <Stack.Screen
          name="Forgot"
          component={Forgot}
          options={{headerShown: false}}
        />
    
        <Stack.Screen
          name="Onboarding"
          component={Onboarding}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="Login"
          component={Login}
          options={{headerShown: false}}
        />
       
       
        <Stack.Screen
          name="Reset"
          component={Reset}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="Signup"
          component={Signup}
          options={{headerShown: false}}
        />
         {/* <Stack.Screen
          name="Demo"
          component={Demo}
          options={{headerShown: false}}
        /> */}
        </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App

const styles = StyleSheet.create({})
