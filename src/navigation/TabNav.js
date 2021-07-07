import React, { Component } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Home from '../components/Home';
import AlertDemo from '../components/AlertDemo';
import People from '../components/People';

export const TabNav = () => {
    const Tab = createBottomTabNavigator();
    return (
        <NavigationContainer>
            <Tab.Navigator>
                <Tab.Screen name="Home" component={Home} />
                <Tab.Screen name="People" component={People} />
            </Tab.Navigator>
        </NavigationContainer>
    );
}
