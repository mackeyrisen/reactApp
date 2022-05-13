import React,{useState} from "react";
import { View,Text,Button,StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';

const Tab =createBottomTabNavigator();

export default function App(){

  return(
    <NavigationContainer>
      <Tab.Navigator screenOptions={({route})=>({
        tabBarIcon:({focused,size,color})=>{
          let nameIcon;

          if(route.name === 'Home'){
            nameIcon = focused? 'home':'home-outline';
          }else if(route.name === 'Details'){
            nameIcon = focused? 'list':'list-outline';
          }else if(route.name === 'Setting'){
            nameIcon = focused? 'settings':'settings-outline';
          }
          return <Ionicons name={nameIcon} color={color} size={size}/>
        },
        tabBarActiveTintColor:'tomato',
        tabBarInactiveTintColor:'grey',
        tabBarStyle:{
          position:'absolute',
          bottom:15,
          left:20,
          right:20,
          elevation:0,
          backgroundColor:'#fff',
          borderRadius:15,
          height:70,
          paddingBottom:10,
          paddingTop:10
        }
      })}>
        <Tab.Screen name='Home' component={HomeScreen}/>
        <Tab.Screen name='Details' component={DetailsScreen}/>
        <Tab.Screen name='Setting' component={SettingScreen}/>
      </Tab.Navigator>
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
