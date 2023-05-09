import * as React from 'react';
import { NavigationContainer , useNavigation} from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Login from '../screens/Login';
import Signup from '../screens/Signup';
import "react-native-gesture-handler";
import DrawerNavigation from './DrawerNavigation';
import Dashboard from '../screens/Dashboard';
import Home from "../screens/Home";
import Dashboard2 from '../screens/Dashboard2';
// import { StatusBar } from 'expo-status-bar';
import NeedyDashboard from '../screens/NeedyDashboard';

const Stack = createNativeStackNavigator();

export default function StackNavigation() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown: false }}>
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="Signup" component={Signup} />
        <Stack.Screen name="Dashboard2" component={Dashboard2} />
        <Stack.Screen name="Needy Dashboard" component={NeedyDashboard} />
        
      </Stack.Navigator>
    </NavigationContainer>
  );
}

