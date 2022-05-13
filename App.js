import React,{useState} from "react";
import { View,Text,Button,StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Tabs from "./navigation/tabs";


export default function App(){

  return(
    <NavigationContainer>
      <Tabs/>
    </NavigationContainer>
  );
}

function HomeScreen({navagation}){
  return(
    <View style={{flex:1,justifyContent:'center',alignItems:'center'}}>
      <Text>Home Screen</Text>
    </View>
  );
}

function DetailsScreen({navagation}){
  return(
    <View style={{flex:1,justifyContent:'center',alignItems:'center'}}>
      <Text>Details Screen</Text>
    </View>
  );
}

function SettingScreen({navagation}){
  return(
    <View style={{flex:1,justifyContent:'center',alignItems:'center'}}>
      <Text>Setting Screen</Text>
    </View>
  );
}
