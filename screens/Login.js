import React,{useState} from 'react';
import {View, Text, TouchableOpacity, Button, Alert} from 'react-native';
import {Background1} from '../Components/Background';
import { useNavigation } from '@react-navigation/native';
import Field from '../Components/field';
import Dashboard from '../screens/Dashboard';
// import Btn2 from "../Components/btn2";
import DrawerNavigation from "../config/DrawerNavigation"
import Dashboard2 from './Dashboard2';
import NeedyDashboard from "./NeedyDashboard";
import axios from 'axios';


const Login=(props)=>{

//Updated Code
const navigation = useNavigation();
   

//For showing email and Password in alert box
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const handleLogin=()=>{
        axios.post('http://localhost:5000/login',{email, password})
        .then(response=>{
            // console.log(response.data.redirect);
          
                navigation.navigate(response.data.redirect);
                <NeedyDashboard />
                response.data.user
            // navigation.navigate('Dashboard2');
        })
        .catch(error=>{
            console.log(error);
        })
    };

//     // const handleLogin = () => {
//     //     Alert.alert('Credentials');
//     //     console.log(email+','+password);
//     //   };
  
//     const handleLogin = () => {
//       fetch('http://localhost:5000/login', {
//         method: 'POST',
//         headers: {
//           'Content-Type': 'application/json'
//         },
//         body: JSON.stringify({
//           email: email,
//           password: password
//         })
//       })
//       .then(response => response.json())
//       .then(data => {
//         // Handle the response from the server
//         if (data.success) {
//           navigation.navigate('Home');
//         } else {
//             Alert.alert('login failed');
//         }
//       })
//       .catch(error => {
//         console.error('Error:', error);
//       });
//     };


//Previous Updated code 

//     // const [form,setForm] = useState({
//     //   email:'',
//     //   password:''
//     // })

// //For showing email and Password in alert box
//     const [email, setEmail] = useState('');
//     const [password, setPassword] = useState('');
//     const handleLogin = () => {
//         Alert.alert('Credentials', `Email: ${email} \nPassword: ${password}`);
//         console.log('email',email);
//         console.log('password', password);
//       };
//     // const handleLogin = async (e) => {
      
//     //   e.preventDefault();
//     //   try {
//     //     const response = await fetch('http://localhost:5000/login', {
//     //       method: 'POST',
//     //       headers: {
//     //         'Content-Type': 'application/json'
//     //       },
//     //       body: JSON.stringify({email,password})
//     //     });
//     //     const data = await response.json();
//     //     if (response.ok) {
//     //         Alert.alert('Welcome');
//     //         navigation.navigate("Dashboard2")
//     //         console.log("1")

//     //     } else {
//     //         Alert.alert(data.message);
//     //         console.log("3");

//     //     }
//     //   } catch (error) {
//     //         Alert.alert('Error', error.message);
//     //   }
      
    
//     // }


    return (
       <Background1>
        <View style={{alignItems:'center', width: 400}}>

        <View style={{height: 700, width: 460, paddingTop: 250, alignItems: 'center'}}>
            <Text style={{fontSize: 40, color: 'dodgerblue', fontWeight:'bold'}}>Welcome Back</Text>
            <Text style={{fontSize: 19, color: 'grey', fontWeight:'bold', marginBottom: 20}}>Login to your account</Text>
            <Field placeholder="Email / Username" keyboardType={"email-address"} onChangeText={setEmail} value={email} />
            <Field placeholder="Password" secureTextEntry={true} onChangeText={setPassword} value={password}/>
            
            <TouchableOpacity  onPress={handleLogin}
            // {/* <TouchableOpacity onPress={()=>props.navigation.navigate("NeedyDashboard")} */}
            style={{borderRadius: 100, color:'white',paddingHorizontal:20, width:'78%', backgroundColor:'dodgerblue', marginVertical: 10, height:'8%'}}
            >
                <Text style={{color:"white", fontSize: 22, fontWeight: "bold", justifyContent:'center', paddingVertical: 5, textAlign:'center'}}>
                Login
                </Text>

            </TouchableOpacity>
            <View style={{display:'flex', justifyContent:'center', flexDirection:'row'}}>
                 <Text style={{fontSize: 16,fontWeight:'bold', color:'grey'}}>Don't have an account ? </Text>
                 <TouchableOpacity onPress={()=>
                    props.navigation.navigate("SignUpScreen")}>
                 <Text style={{color: "dodgerblue", fontWeight:'bold', fontSize: 16}}>Signup</Text>
            </TouchableOpacity>

            </View>
        </View>
        </View>

   </Background1>
    )
}

export default Login;
