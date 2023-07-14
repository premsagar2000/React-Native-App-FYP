import React from 'react';
import {View} from 'react-native';
import {Background} from '../Components/Background';
import Btn from '../Components/button';
import Btn2 from '../Components/btn2';
const SignUpScreen=(props)=>{
    return (
        <Background>
        <View style={{marginHorizontal: 18, marginVertical: 210}}>
        <Btn btnLabel="Needy" bgColor="dodgerblue" textColor="white" Press={()=>
            props.navigation.navigate("NeedySignUp")
        }/>
        <Btn2 btnLabel="Donor" Press={()=>{props.navigation.navigate("DonorSignup")}}/>
        </View>
    </Background>
    )
}

export default SignUpScreen;