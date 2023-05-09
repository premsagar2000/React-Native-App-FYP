import React,{useState} from 'react';
import {View, Text, TouchableOpacity, Button, Alert} from 'react-native';
import {Background1} from '../Components/Background';
import Field from '../Components/field';
import Dashboard from '../screens/Dashboard';
// import Btn2 from "../Components/btn2";
import DrawerNavigation from "../config/DrawerNavigation"
import Dashboard2 from './Dashboard2';

const Login=(props)=>{

    // const [form,setForm] = useState({
    //   email:'',
    //   password:''
    // })

//For showing email and Password in alert box
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
  
    // const handleLogin = () => {
    //     Alert.alert('Credentials', `Email: ${email} \nPassword: ${password}`);
    //   };
  
    const handleLogin = async (e) => {
      
      e.preventDefault();
      try {
        const response = await fetch('exp://10.102.139.42:19000/login', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({email, password})
        });
        const data = await response.json();
        if (response.ok) {
          Alert.alert('Welcome');
        } else {
          Alert.alert(data.message);
        }
      } catch (error) {
        Alert.alert('Error', error.message);
      }
      
    
    }
    return (
       <Background1>
        <View style={{alignItems:'center', width: 400}}>

        <View style={{height: 700, width: 460, paddingTop: 250, alignItems: 'center'}}>
            <Text style={{fontSize: 40, color: 'dodgerblue', fontWeight:'bold'}}>Welcome Back</Text>
            <Text style={{fontSize: 19, color: 'grey', fontWeight:'bold', marginBottom: 20}}>Login to your account</Text>
            <Field placeholder="Email / Username" keyboardType={"email-address"} onChangeText={setEmail} value={email} />
            <Field placeholder="Password" secureTextEntry={true} onChangeText={setPassword} value={password}/>
            
            <TouchableOpacity  onPress={handleLogin}
            style={{borderRadius: 100, color:'white',paddingHorizontal:20, width:'78%', backgroundColor:'dodgerblue', marginVertical: 10, height:'8%'}}
            >
                <Text style={{color:"white", fontSize: 22, fontWeight: "bold", justifyContent:'center', paddingVertical: 5, textAlign:'center'}}>
                Login
                </Text>

            </TouchableOpacity>
            <View style={{display:'flex', justifyContent:'center', flexDirection:'row'}}>
                 <Text style={{fontSize: 16,fontWeight:'bold', color:'grey'}}>Don't have an account ? </Text>
                 <TouchableOpacity onPress={()=>
                    props.navigation.navigate("Signup")}>
                 <Text style={{color: "dodgerblue", fontWeight:'bold', fontSize: 16}}>Signup</Text>
            </TouchableOpacity>

            </View>
        </View>
        </View>

   </Background1>
    )
}

export default Login;
