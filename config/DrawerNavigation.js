import "react-native-gesture-handler";
import {useContext} from 'react'
import { Text, View, Image, ImageBackground,TouchableOpacity , StyleSheet} from 'react-native';
import {
  MaterialIcons,
  FontAwesome,
} from "@expo/vector-icons";
import { SafeAreaView } from "react-native-safe-area-context";
import { NavigationContainer } from "@react-navigation/native";
import { DrawerItemList, createDrawerNavigator } from "@react-navigation/drawer";
import User from "../assets/download.jpg";
import ViewNeedy from "../screens/DonorScreen/ViewNeedy";
import ShowProjects from "../screens/DonorScreen/ShowProjects";
import Notifications from "../screens/DonorScreen/Notifications";
import CreateDonationOffer from "../screens/DonorScreen/CreateDonationOffer";
import Dashboard from "../screens/DonorScreen/Dashboard";
import SignOut from "../screens/DonorScreen/SignOut";
import { useNavigation } from '@react-navigation/native';
// import { AuthContext } from "../context/AuthContext";

const Drawer = createDrawerNavigator();

export default function DrawerNavigation() {
  // const {credentials} = useContext(AuthContext)
  const navigation=useNavigation();
  const handleSignOut = () => {
    // Perform sign out logic here
    // For example, clear user session, reset state, etc.

    // Navigate to the login screen
    navigation.navigate("Login")
  };
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
                >Kashish</Text>

                <Text
                  style={{fontSize:16, color:"#111"}}
                >Donor Dashboard</Text>

                </View>
                <DrawerItemList {...props}/>
        <TouchableOpacity onPress={handleSignOut}>
                <View style={styles.drawerItem}>
                <FontAwesome name="sign-out" size={20} color="#808080" />
                  <Text style={styles.drawerItemText}>Sign Out</Text>
                  </View>
        </TouchableOpacity>
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
          name = "ViewNeedy"
          options={{
            drawerLabel: "View Needy",
            title: "ViewNeedy",
            drawerIcon: () => (
              <FontAwesome name="users" size={20} color="#808080"/>
            )
          }}
          component={ViewNeedy}
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
    
      </Drawer.Navigator>
    </NavigationContainer>
  );
}
const styles = StyleSheet.create({
  drawerItem: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 10,
    paddingHorizontal: 16,
  
  },
  drawerItemText: {
    marginLeft: 16,
    fontSize: 14,
    color: '#111',
    fontWeight:"bold",
  },
});