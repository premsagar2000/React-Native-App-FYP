import "react-native-gesture-handler";
import { Text, View, Image, ImageBackground } from 'react-native';
import {
  SimpleLineIcons,
  MaterialIcons,
  MaterialCommunityIcons,
  FontAwesome,
} from "@expo/vector-icons";
import { SafeAreaView } from "react-native-safe-area-context";
import { NavigationContainer } from "@react-navigation/native";
import { DrawerItemList, createDrawerNavigator } from "@react-navigation/drawer";
import User from "../assets/download.jpg";
import Dashboard from '../screens/NeedyScreens/Dashboard';
import ViewDonations from '../screens/NeedyScreens/ViewDonations';
import Notifications from '../screens/NeedyScreens/Notifications';
import NeedyProfile from '../screens/NeedyScreens/NeedyProfile';
import SignOut from '../screens/NeedyScreens/SignOut';
import { MyContext } from './MyContext';


const Drawer = createDrawerNavigator();
const { data } = useContext(MyContext);

export default function DrawerNavigation() {
  return (
    <NavigationContainer independent={true}> 
      <Drawer.Navigator
        drawerContent={
          (props)=>{
            return (
              <SafeAreaView>
                <View style={{
                  height:200,
                  width:"100%",
                  justifyContent:'center',
                  alignItems:"center",
                  borderBottomColor:"#f4f4f4",
                  borderBottomWidth:1,
                  // backgroundColor:"grey"
                }}> 

                <Image
                  source={User}
                  style={{
                    height:130,
                    width:130,
                    borderRadius:65
                  }}
                />
                <Text
                  style={{fontSize:22, marginVertical:6, fontWeight:'bold', color:"#111"}}
                >{data}</Text>

                <Text
                  style={{fontSize:16, color:"#111"}}
                >Needy Dashboard</Text>

                </View>
                <DrawerItemList {...props}/>
              </SafeAreaView>
            )
          }
        }
        screenOptions={{
          drawerStyle:{
            backgroundColor:"#fff",
            width:250
          },
          headerStyle:{
            backgroundColor:"dodgerblue",
          },
          headerTintColor:"#fff",
          headerTitleStyle:{
            fontWeight:"bold"
          },
          drawerActiveTintColor:"blue",
          drawerLabelStyle:{
            color:"#111"
          }
        }}
      >
        <Drawer.Screen 
          name = "Dashboard"
          options={{
            drawerLabel: "Dashboard",
            title: "Dashboard",
            drawerIcon: () => (
              <FontAwesome name="home" size={20} color="#808080"/>
            )
          }}
          component={Dashboard}
        />

      <Drawer.Screen 
          name = "ViewDonations"
          options={{
            drawerLabel: "View Donations",
            title: "View Donations",
            drawerIcon: () => (
               <MaterialIcons name="category" size={20} color="#808080"/>
              // <FontAwesomeIcon icon="fa-solid fa-hands-holding-dollar" />
            //  <MaterialIcons name="VolunteerActivismIcon" size={20} color="#808080"/>
              
            )
          }}
          component={ViewDonations}
        />

      

      
{/* 
      <Drawer.Screen 
          name = "Profile"
          options={{
            drawerLabel: "Profile",
            title: "Profile",
            drawerIcon: () => (
              <MaterialIcons name="person" size={20} color="#808080"/>
            )
          }}
          component={NeedyProfile}
      /> */}

      <Drawer.Screen 
          name = "Notifications"
          options={{
            drawerLabel: "Notifications",
            title: "Notification",
            drawerIcon: () => (
              <FontAwesome name="bell" size={20} color="#808080"/>
            )
          }}
          component={Notifications}
      />
      
    <Drawer.Screen 
          name = "SignOut"
          options={{
            drawerLabel: "Sign Out",
            title: "SignOut",
            drawerIcon: () => (
              <FontAwesome name="sign-out" size={20} color="#808080"/>
            )
          }}
          component={SignOut}
      />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}