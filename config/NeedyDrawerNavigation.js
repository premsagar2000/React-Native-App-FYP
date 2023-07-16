import "react-native-gesture-handler";
import { Text, View, Image, ImageBackground ,TouchableOpacity , StyleSheet} from 'react-native';
import {
  MaterialIcons,
  FontAwesome,
} from "@expo/vector-icons";
import { SafeAreaView } from "react-native-safe-area-context";
import { NavigationContainer } from "@react-navigation/native";
import { DrawerItemList, createDrawerNavigator } from "@react-navigation/drawer";
import User from "../assets/download.jpg";
import Dashboard from '../screens/NeedyScreens/Dashboard';
import ViewDonations from '../screens/NeedyScreens/ViewDonations';
import NeedyDonationOffers from '../screens/NeedyScreens/NeedyDonationOffers';
import SignOutNeedy from '../screens/NeedyScreens/SignOutNeedy';
import { useNavigation } from '@react-navigation/native';
import ProfilePage from "../screens/NeedyScreens/NeedyProfile";
import { useLogin } from "../LoginProvider";
//import { MyContext } from './MyContext';


const Drawer = createDrawerNavigator();
//const { data } = useContext(MyContext);

export default function DrawerNavigation() {
  const navigation=useNavigation();
  const {credentials}=useLogin();
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
                >{credentials.user.name}</Text>

                <Text
                  style={{fontSize:16, color:"#111"}}
                >Needy Dashboard</Text>

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
            backgroundColor:"black",
          },
          headerTintColor:"#fff",
          headerTitleStyle:{
            fontWeight:"bold"
          },
          drawerActiveTintColor:"gold",
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
            )
          }}
          component={ViewDonations}
        />

<Drawer.Screen 
          name = "Donation Offers"
          options={{
            drawerLabel: "Donation Offers",
            title: "Donation Offers",
            drawerIcon: () => (
               <MaterialIcons name="category" size={20} color="#808080"/>
            )
          }}
          component={NeedyDonationOffers}
        />      
       <Drawer.Screen 
          name = "Profile"
          options={{
            drawerLabel: "Profile",
            title: "Profile",
            drawerIcon: () => (
              <MaterialIcons name="contacts" size={24} color="black" />
            )
          }}
          component={ProfilePage}
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