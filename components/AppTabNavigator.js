import React from 'react';
import { Image } from 'react-native';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import TempLog from '../screens/TempLog';
import Settings from '../screens/SettingsScreen';


export const AppTabNavigator = createBottomTabNavigator({
    TempLog: {
    screen: TempLog,
    navigationOptions :{
      tabBarIcon : <Image source={require("../assets/request-book.png")} style={{width:20, height:20}}/>,
      tabBarLabel : "Temp Log",
    }
    },

     Settings: {
    screen: Settings,
    navigationOptions :{
      tabBarIcon : <Image source={require("../assets/settings.png")} style={{width:20, height:20}}/>,
      tabBarLabel : "Settings",
    }
    }
});
