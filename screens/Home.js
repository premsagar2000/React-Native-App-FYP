import React from 'react';
import {View, StyleSheet, ImageBackground, Text} from 'react-native';
import {Background} from '../Components/Background';

import Btn from '../Components/button';
import Btn2 from '../Components/btn2';
import {blue, orange} from '../Components/Constants';
const Home=(props)=>{
    return (
        <Background>
            <View style={{marginHorizontal: 40, marginVertical: 200}}>
            <Btn btnLabel="Needy People" bgColor="dodgerblue" textColor="white" Press={()=>
            props.navigation.navigate("Login")
            }/>
            <Btn2 btnLabel="Donor" Press={()=>{props.navigation.navigate("Login")}}/>
            </View>
        </Background>
    )
}

export default Home;