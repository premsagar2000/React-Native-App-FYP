import "react-native-gesture-handler";
// import { StatusBar } from 'expo-status-bar';
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
import Profile from "../screens/Profile";
import ViewNGOs from "../screens/ViewNGOs";
import Contact from "../screens/Contact";
import ShowProjects from "../screens/ShowProjects";
import Notifications from "../screens/Notifications";
import Settings from "../screens/Settings";
import CreateDonationOffer from "../screens/CreateDonationOffer";
import Dashboard from "../screens/Dashboard";
import SignOut from "../screens/SignOut";



const Drawer = createDrawerNavigator();

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
                >Kashish Kumari</Text>

                <Text
                  style={{fontSize:16, color:"#111"}}
                >Donor Dashboard</Text>

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
          name = "Create Donation Offer"
          options={{
            drawerLabel: "Create Donation Offer",
            title: "Create Donation Offer",
            drawerIcon: () => (
              <FontAwesome name="plus-circle" size={20} color="#808080"/>
            )
          }}
          component={CreateDonationOffer}
        />

      <Drawer.Screen 
          name = "ViewNGOs"
          options={{
            drawerLabel: "View NGOs",
            title: "ViewNGOs",
            drawerIcon: () => (
              // <MaterialIcons name="category" size={20} color="#808080"/>
              <FontAwesome name="users" size={20} color="#808080"/>
            )
          }}
          component={ViewNGOs}
        />

      <Drawer.Screen 
          name = "ShowProjects"
          options={{
            drawerLabel: "Show Active Projects",
            title: "ShowProjects",
            drawerIcon: () => (
              <MaterialIcons name="dashboard-customize" size={20} color="#808080"/>
            )
          }}
          
          component={ShowProjects}
        />

      {/* <Drawer.Screen 
          name = "Settings"
          options={{
            drawerLabel: "Settings",
            title: "Settings",
            drawerIcon: () => (
              <SimpleLineIcons name="settings" size={20} color="#808080"/>
            )
          }}
          component={Settings}
        /> */}

      {/* <Drawer.Screen 
          name = "Profile"
          options={{
            drawerLabel: "Profile",
            title: "Profile",
            drawerIcon: () => (
              <MaterialIcons name="person" size={20} color="#808080"/>
            )
          }}
          component={Profile}
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
      
      {/* <Drawer.Screen 
          name = "Contact"
          options={{
            drawerLabel: "Contact",
            title: "Contact",
            drawerIcon: () => (
              <MaterialCommunityIcons name="message-alert-outline" size={20} color="#808080"/>
            )
          }}
          component={Contact}
      /> */}

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