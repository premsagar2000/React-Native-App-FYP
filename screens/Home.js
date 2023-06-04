import React from 'react';
import {View} from 'react-native';
import {Background} from '../Components/Background';
import Btn from '../Components/button';
import Btn2 from '../Components/btn2';
const Home=(props)=>{
    return (
        <Background>
        <View style={{marginHorizontal: 25, marginVertical: 200}}>
        <Btn btnLabel="Login" bgColor="dodgerblue" textColor="white" Press={()=>
        props.navigation.navigate("Login")
        }/>
        <Btn2 btnLabel="Sign Up" Press={()=>{props.navigation.navigate("SignUpScreen")}}/>
        </View>
    </Background>
    )
}

export default Home;