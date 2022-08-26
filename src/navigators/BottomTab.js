import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

import Discover from '../screens/Discover';

const Tab = createBottomTabNavigator();

const BottomTab = () => {
    return(
        <Tab.Navigator
            initialRouteName="Discover"
            screenOptions={{
                tabBarShowLabel: false,
                tabBarActiveTintColor: '#fc5e03',
                tabBarStyle: {
                    backgroundColor: '#000'
                }
            }}
        >
            <Tab.Screen
                name="Home"
                component={Discover}
                options={{
                    tabBarIcon: ({color}) => (
                        <Icon name="home" color={color} size={30} />
                    ),
                    headerShown: false,
                }}
            />
            <Tab.Screen
                name="Discover"
                component={Discover}
                options={{
                    tabBarIcon: ({color}) => (
                        <Icon name="play-circle" color={color} size={30} />
                    ),
                    headerShown: false,
                }}
            />
            <Tab.Screen
                name="Account"
                component={Discover}
                options={{
                    tabBarIcon: ({color}) => (
                        <Icon name="account" color={color} size={30} />
                    ),
                    headerShown: false,
                }}
            />
        </Tab.Navigator>
    );
}

export default BottomTab;