import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import {Background1} from '../Components/Background';
import Field from '../Components/field';
// import Btn2 from "./btn2";
const Signup=(props)=>{
    return (
       <Background1>
        <View style={{alignItems:'center', width: 400}}>
        
       
        <View style={{height: 700, width: 460, paddingTop: 150, alignItems: 'center'}}>
        <Text style={{color:'grey',fontSize: 25, marginBottom: 10, fontWeight:'bold'}}>Create a new account</Text>
            <Field placeholder="Full Name" />
            <Field placeholder="CNIC-Number"/>
            <Field placeholder="Email Address"/>
            <Field placeholder="Password" secureTextEntry={true}/>
            <Field placeholder="Contact Number"/>
            <Field placeholder="Address"/>
            
            <View style={{display:'flex',flexDirection:'row', width:'78%', paddingRight: 16}}>
                <Text style={{color:'grey' , fontSize:16}}>By signing in, you agree to our </Text>
                <Text style={{color:'dodgerblue' , fontSize:16, fontWeight:'bold'}}>Terms & Conditions </Text>
            </View>
            <View style={{display:'flex',flexDirection:'row', width:'78%', paddingRight: 16, justifyContent:'center', marginBottom: 10}}>
                <Text style={{color:'grey' , fontSize:16}}>and {" "} </Text>
                <Text style={{color:'dodgerblue' , fontSize:16, fontWeight:'bold'}}>Privacy Policy </Text>
            </View>
            <TouchableOpacity  
            style={{borderRadius: 100, color:'white',paddingHorizontal:20, width:'78%', backgroundColor:'dodgerblue', marginVertical: 1, height:'8%'}}
            onPress={()=>{
                alert("Account Created")
                props.navigation.navigate('Login')
            }}
            >
                <Text style={{color:"white", fontSize: 22, fontWeight: "bold", justifyContent:'center', paddingVertical: 7, textAlign:'center'}}>
                Signup
                </Text>

            </TouchableOpacity>
            <View style={{display:'flex', justifyContent:'center', flexDirection:'row'}}>
                 <Text style={{fontSize: 16,fontWeight:'bold', color:'grey'}}>Already have an account ? </Text>
                 <TouchableOpacity onPress={()=>props.navigation.navigate('Login')}>
                 <Text style={{color: "dodgerblue", fontWeight:'bold', fontSize: 16}}>Login</Text>
                 </TouchableOpacity>

            </View>
        </View>
        </View>

   </Background1>
    )
}

export default Signup;
