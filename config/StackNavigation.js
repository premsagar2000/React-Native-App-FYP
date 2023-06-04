import * as React from 'react';
import { NavigationContainer} from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Login from '../screens/Login';
import Signup from '../screens/Signup';
import "react-native-gesture-handler";
import Home from "../screens/Home";
import Dashboard2 from '../screens/Dashboard2';
import NeedyDashboard from '../screens/NeedyDashboard';
import NeedySignUp from '../screens/NeedySignUp';
import SignUpScreen from '../screens/SignUpScreen';
import { MyContextProvider } from '../Context';
const Stack = createNativeStackNavigator();
export default function StackNavigation() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown: false }}>
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="SignUpScreen" component={SignUpScreen} />
        <MyContextProvider>
        <Stack.Screen name="Login" component={Login} />
        </MyContextProvider>
        <Stack.Screen name="NeedySignUp" component={NeedySignUp} />
        <Stack.Screen name="Signup" component={Signup} />
        <Stack.Screen name="Dashboard2" component={Dashboard2} />
        <Stack.Screen name="NeedyDashboard" component={NeedyDashboard} />
       
        
        
        
        
      </Stack.Navigator>
    </NavigationContainer>

  );
}

