import * as React from 'react';
import { NavigationContainer} from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Login from '../screens/Login';
import DonorSignup from '../screens/SignupDonor';
import "react-native-gesture-handler";
import Home from "../screens/Home";
import DonorDashboard from '../screens/DonorDashboard';
import NeedyDashboard from '../screens/NeedyDashboard';
import NeedySignUp from '../screens/NeedySignUp';
import SignUpScreen from '../screens/SignUpScreen';

const Stack = createNativeStackNavigator();
export default function StackNavigation() {
  return (
    <NavigationContainer>
   
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="SignUpScreen" component={SignUpScreen} />
       
        <Stack.Screen name="Login" component={Login} />
     
        <Stack.Screen name="NeedySignUp" component={NeedySignUp} />
        
        <Stack.Screen name="DonorSignup" component={DonorSignup} />
        
        <Stack.Screen name="DonorDashboard" component={DonorDashboard} />
       
        <Stack.Screen name="NeedyDashboard" component={NeedyDashboard} />
      </Stack.Navigator>
   
  </NavigationContainer>
  );
}
