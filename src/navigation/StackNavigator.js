import * as React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from '../screens/HomeScreen';
import LoginScreen from '../screens/AuthScreen/LoginScreen';
import MyAuditScreen from '../screens/AuthScreen/MyAuditScreen';
import DashboardScreen from '../screens/AuthScreen/DashboardScreen';
import Signup from '../screens/AuthScreen/Signup';
import UserSettingsScreen from '../screens/AuthScreen/UserSettingsScreen';
import UserSettings2 from '../screens/AuthScreen/UserSettingsTwo';
import UserSettingsTwo from '../screens/AuthScreen/UserSettingsTwo';

function StackNavigator() {
    const Stack = createNativeStackNavigator();
    return (
        <Stack.Navigator>
      <Stack.Screen name="Home" component={HomeScreen} />
      <Stack.Screen name="Login" component={LoginScreen}/>
      <Stack.Screen name="MyAudits" component={MyAuditScreen} />
      <Stack.Screen name="Dashboard" component={DashboardScreen} />
      <Stack.Screen name="Settings" component={UserSettingsScreen}/> 
      <Stack.Screen name="Settings2" component={UserSettingsTwo}/> 
    </Stack.Navigator>
    );
  }
  
  export default StackNavigator;