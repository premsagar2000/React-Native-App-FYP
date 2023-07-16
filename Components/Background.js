import React from 'react';
import {View, StyleSheet, ImageBackground} from 'react-native';
export const Background=({children})=>{
    return (
        <View>
            <ImageBackground source={require('../assets/Home.png')} style={{height: '100%'}}/>
            <View style={{position:'absolute'}}>
                {children}
            </View>
        </View>
    )
}
export const Background1=({children})=>{
    return (
        <View>
            <ImageBackground  source={require('../assets/SignUP.png')} style={{height: '100%', marginVertical:10}}/>
            <View style={{position:'absolute'}}>
                {children}
            </View>
        </View>
    )
}
export const Background2=({children})=>{
    return (
        <View>
            <ImageBackground source={require('../assets/Login.png')}  style={{height: '100%', marginVertical:10}}/>
            <View style={{position:'absolute'}}>
                {children}
            </View>
        </View>
    )
}

