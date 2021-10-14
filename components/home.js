import React from 'react';
import {View, Text} from 'react-native';
import Cart from './cart';
import AltHome from './althome';
import Login from './dashboard';
import { createBottomTabNavigator} from '@react-navigation/bottom-tabs';


const Tab = createBottomTabNavigator();


const home = () => {
    return (
       <Tab.Navigator>
           <Tab.Screen name="Home" component={AltHome}/>
           <Tab.Screen name="Cart" component={Cart}/>

       </Tab.Navigator>
       
    );
}





export default home;