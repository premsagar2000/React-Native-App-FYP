import React from 'react';
import {View} from 'react-native';
import {Background} from '../Components/Background';
import Btn from '../Components/button';
import Btn2 from '../Components/btn2';
const Home=(props)=>{
    return (
        <Background>
        <View style={{marginHorizontal: 18, marginVertical: 210, overflow:"scroll", alignItems:"center"}}>
        <Btn btnLabel="Login" bgColor="yellow" textColor="white" Press={()=>
        props.navigation.navigate("Login")
        }/>
        <Btn2 btnLabel="Sign Up" Press={()=>{props.navigation.navigate("SignUpScreen")}}/>
        </View>
    </Background>
    )
}

export default Home;