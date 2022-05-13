import React from 'react';
import {View,Text,StyleSheet,TouchableOpacity} from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';

import HomeScreen from '../screens/HomeScreen';
import FindScreen from '../screens/FindScreen';
import ChatScreen from '../screens/ChatScreen';
import PostScreen from '../screens/PostScreen';
import SettingsScreen from '../screens/SettingsScreens';

const Tab = createBottomTabNavigator();

const CustomTabBarButton = ({children,onPress}) => (
    <TouchableOpacity
    style={{
        top:-30,
        justifyContent:'center',
        alignItems:'center',
        ...style.shadow
    }}
    onPress={onPress}
    >
        <View style={{width:70,height:70,borderRadius:35,backgroundColor:'tomato'}}>
            {children}
        </View> 
    </TouchableOpacity>
);

export default function Tabs(){
    return (
        <Tab.Navigator
            tabBarOptions={{
                showLabel:false,
            }}
            screenOptions={{
                tabBarStyle: { 
                    position:'absolute',
                    bottom:15,
                    left:20,
                    right:20,
                    elevation:0,
                    backgroundColor:'#ffffff',
                    borderRadius:15,
                    height:70,
                    ...style.shadow,
                    }
            }}
        >
            <Tab.Screen name="Home" component={HomeScreen} options={{
                tabBarIcon:({focused})=>(
                    <View style={style.container}>
                        <Ionicons name={focused?'home':'home-outline'} style={{fontSize:25,color: focused ? 'tomato':'grey'}}/>
                        <Text style={{fontSize:12,color: focused ? 'tomato':'grey'}}>HOME</Text>
                    </View>
                ),
            }}/>
            <Tab.Screen name="Find" component={FindScreen} options={{
                tabBarIcon:({focused})=>(
                    <View style={style.container}>
                        <Ionicons name={focused?'search':'search-outline'} style={{fontSize:25,color: focused ? 'tomato':'grey'}}/>
                        <Text style={{fontSize:12,color: focused ? 'tomato':'grey'}}>FIND</Text>
                    </View>
                ),
            }}/>
            <Tab.Screen name="Post" component={PostScreen} options={{
                tabBarIcon:({focused})=>(
                        <Ionicons name={focused?'add':'add-outline'} style={{fontSize:30,color:'#fff'}}/> 
                ),
                tabBarButton:(props) =>(
                    <CustomTabBarButton {...props}/>
                )
            }}/>
            <Tab.Screen name="Settings" component={SettingsScreen} options={{
                tabBarIcon:({focused})=>(
                    <View style={style.container}>
                        <Ionicons name={focused?'settings':'settings-outline'} style={{fontSize:25,color: focused ? 'tomato':'grey'}}/>
                        <Text style={{fontSize:12,color: focused ? 'tomato':'grey'}}>SETTINGS</Text>
                    </View>
                ),
            }}/>
            <Tab.Screen name="Chat" component={ChatScreen} options={{
                tabBarIcon:({focused})=>(
                    <View style={style.container}>
                        <Ionicons name={focused?'chatbox-ellipses':'chatbox-ellipses-outline'} style={{fontSize:25,color: focused ? 'tomato':'grey'}}/>
                        <Text style={{fontSize:12,color: focused ? 'tomato':'grey'}}>CHAT</Text>
                    </View>
                ),
            }}/>
        </Tab.Navigator>
    );
}

const style = StyleSheet.create({
    shadow:{
        shadowColor:'#7F5DF0',
        shadowOffset:{
            width:0,
            height:10
        },
        shadowOpacity:0.25,
        shadowRadius:3.5,
        elevation:5
    },
    container:{
        flex:1,
        justifyContent:'center',
        alignItems:'center'
    },
    icon:{
        fontSize:25
        
    }
});