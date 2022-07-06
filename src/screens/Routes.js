import React from 'react'
import {View,Text,Stylesheet,ScrollView} from 'react-native'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import Splash from './Splash'
import Onboarding from './Onboarding'
import Login from './Login'
import Forgot from './Forgot'
import ApiView from './ApiView'
import API from './API'
import Otp from './Otp'
import Reset from './Reset'
import Signup from './Signup'
const Stack = createNativeStackNavigator();
const Routes =()=>{
return(
<NavigationContainer>
    <Stack.Navigator screenOptions={{headerShown:false}}>
    
        <Stack.Screen
          name='Splash'
          component={Splash}  
        />
        <Stack.Screen
          name='Login'
          component={Login}  
        />
        <Stack.Screen
          name='Reset'
          component={Reset}  
        />
        <Stack.Screen
          name='Signup'
          component={Signup}  
        />
        <Stack.Screen
          name='Onboarding'
          component={Onboarding}  
        />
        <Stack.Screen
          name='API'
          component={API}  
        />
        <Stack.Screen
          name='ApiView'
          component={ApiView}  
        />
        <Stack.Screen
          name='Otp'
          component={Otp}  
        />
         <Stack.Screen
          name='Forgot'
          component={Forgot}  
        />
    </Stack.Navigator>
</NavigationContainer>
)    
}
export default Routes;