import React , {useState} from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import {Background1} from '../Components/Background';
import Field from '../Components/field';
import { useNavigation } from '@react-navigation/native';
import axios from 'axios';
const DonorSignup=(props)=>{

    const navigation = useNavigation();
    const [name,setName]=useState('');
    const [address,setAddress]=useState('');
    const [email,setEmail]=useState('');
    const [phone,setPhone]=useState('');
    const [cnic,setCnic]=useState('');
    const [password,setPassword]=useState('');
    const handleSubmit =async  (e) => { 
        e.preventDefault();
        const data = { 
          name: name, 
          address: address, 
          email: email, 
          phone: phone, 
          cnic: cnic, 
          password: password
        };
        console.log({...data});
        await fetch('http://10.102.136.134:5000/donor-signup', { 
          method: 'POST', 
          headers: { 
            'Content-Type': 'application/json' 
          }, 
          body: JSON.stringify(data) 
        }) 
        .then(response => {
          console.log(response.json())
          
        }) 
        .then(data => {
          console.log(data) 
          alert(`Account created!`); 
          navigation.navigate('Login')
        }) 
        .catch((error) => { 
          console.error('Error:', error); 
        }); 
      };


    return (
    
        <View style={{alignItems:'center', width: 380}}>
        
       
        <View style={{height: 700, width: 460, paddingTop: 100, alignItems: 'center'}}>
        <Text style={{color:'grey',fontSize: 25, marginBottom: 10, fontWeight:'bold'}}>Create a new account as Donor</Text>
            <Field placeholder="Full Name" onChangeText={setName}  value={name} />
            <Field placeholder="CNIC-Number" onChangeText={setCnic}  value={cnic}/>
            <Field placeholder="Email Address" onChangeText={setEmail}  value={email}/>
            <Field placeholder="Password" secureTextEntry={true} onChangeText={setPassword}  value={password}/>
            <Field placeholder="Contact Number" onChangeText={setPhone}  value={phone}/>
            <Field placeholder="Address" onChangeText={setAddress}  value={address}/>
            
            <View style={{display:'flex',flexDirection:'row', width:'78%', paddingRight: 16}}>
                <Text style={{color:'grey' , fontSize:16}}>By signing in, you agree to our </Text>
                <Text style={{color:'black' , fontSize:16, fontWeight:'bold'}}>Terms & Conditions </Text>
            </View>
            <View style={{display:'flex',flexDirection:'row', width:'78%', paddingRight: 16, justifyContent:'center', marginBottom: 10}}>
                <Text style={{color:'grey' , fontSize:16}}>and {" "} </Text>
                <Text style={{color:'black' , fontSize:16, fontWeight:'bold'}}>Privacy Policy </Text>
            </View>
            <TouchableOpacity  
            style={{borderRadius: 100, color:'white',paddingHorizontal:20, width:'78%', backgroundColor:'gold', marginVertical: 1, height:'8%'}}
            onPress={handleSubmit}
            >
                <Text style={{color:"white", fontSize: 22, fontWeight: "bold", justifyContent:'center', paddingVertical: 7, textAlign:'center'}}>
                Signup
                </Text>

            </TouchableOpacity>
            <View style={{display:'flex', justifyContent:'center', flexDirection:'row'}}>
                 <Text style={{fontSize: 16,fontWeight:'bold', color:'grey'}}>Already have an account ? </Text>
                 <TouchableOpacity onPress={()=>props.navigation.navigate('Login')}>
                 <Text style={{color: "black", fontWeight:'bold', fontSize: 16}}>Login</Text>
                 </TouchableOpacity>

            </View>
        </View>
        </View>

    )
}

export default DonorSignup;





// import React from 'react';
// import {View, Text, TouchableOpacity} from 'react-native';
// import {Background1} from '../Components/Background';
// import Field from '../Components/field';
// // import Btn2 from "./btn2";
// import { useState } from 'react';
// import { useNavigation } from '@react-navigation/native';
// const Signup=(props)=>{

//   const navigation = useNavigation();
//   const [name,setName]=useState('');
//   const [address,setAddress]=useState('');
//   const [email,setEmail]=useState('');
//   const [phone,setPhone]=useState('');
//   const [cnic,setCnic]=useState('');
//   const [password,setPassword]=useState('');
//   const handleSubmit =  (e) => { 
//       e.preventDefault();
//       const data = { 
//         name: name, 
//         address: address, 
//         email: email, 
//         phone: phone, 
//         cnic: cnic, 
//         password: password
//       };
//       console.log({...data});
//       fetch('http://localhost:5000/donor-signup', { 
//         method: 'POST', 
//         headers: { 
//           'Content-Type': 'application/json' 
//         }, 
//         body: JSON.stringify(data) 
//       }) 
//       .then(response => {
//         console.log(response.json())
        
//       }) 
//       .then(data => {
//         console.log(data) 
//         alert(`Account created!`); 
//         navigation.navigate('/Login')
//       }) 
//       .catch((error) => { 
//         console.error('Error:', error); 
//       }); 
//     };

//     return (
//        <Background1>
//         <View style={{alignItems:'center', width: 400}}>
        
       
//         <View style={{height: 700, width: 460, paddingTop: 200, alignItems: 'center'}}>
//         <Text style={{color:'grey',fontSize: 25, marginBottom: 10, fontWeight:'bold'}}>Create a new account as Donor</Text>
//             <Field placeholder="Full Name" />
//             <Field placeholder="CNIC-Number"/>
//             <Field placeholder="Email Address"/>
//             <Field placeholder="Password" secureTextEntry={true}/>
//             <Field placeholder="Contact Number"/>
//             <Field placeholder="Address"/>
            
//             <View style={{display:'flex',flexDirection:'row', width:'78%', paddingRight: 16}}>
//                 <Text style={{color:'grey' , fontSize:16}}>By signing in, you agree to our </Text>
//                 <Text style={{color:'dodgerblue' , fontSize:16, fontWeight:'bold'}}>Terms & Conditions </Text>
//             </View>
//             <View style={{display:'flex',flexDirection:'row', width:'78%', paddingRight: 16, justifyContent:'center', marginBottom: 10}}>
//                 <Text style={{color:'grey' , fontSize:16}}>and {" "} </Text>
//                 <Text style={{color:'dodgerblue' , fontSize:16, fontWeight:'bold'}}>Privacy Policy </Text>
//             </View>
//             <TouchableOpacity  
//             style={{borderRadius: 100, color:'white',paddingHorizontal:20, width:'78%', backgroundColor:'dodgerblue', marginVertical: 1, height:'8%'}}
//             onPress={handleSubmit}
//             >
//                 <Text style={{color:"white", fontSize: 22, fontWeight: "bold", justifyContent:'center', paddingVertical: 7, textAlign:'center'}}>
//                 Signup
//                 </Text>

//             </TouchableOpacity>
//             <View style={{display:'flex', justifyContent:'center', flexDirection:'row'}}>
//                  <Text style={{fontSize: 16,fontWeight:'bold', color:'grey'}}>Already have an account ? </Text>
//                  <TouchableOpacity onPress={()=>props.navigation.navigate('Login')}>
//                  <Text style={{color: "dodgerblue", fontWeight:'bold', fontSize: 16}}>Login</Text>
//                  </TouchableOpacity>

//             </View>
//         </View>
//         </View>

//    </Background1>
//     )
// }

// export default Signup;
