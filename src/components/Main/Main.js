import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { FontAwesome5 } from '@expo/vector-icons';
import { FontAwesome } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';

import Home from './Home/Home';
import Cart from './Cart/Cart';
import Search from './Search/Search';
import Contact from './Contact/Contact';

const Tab = createBottomTabNavigator();


const Main = () => {
    return (
            <Tab.Navigator
                screenOptions={{ headerShown: false }}
                tabBarOptions={{
                    activeTintColor: '#34B089',
                    inactiveTintColor: 'gray',
                }}>
                <Tab.Screen
                    name="Home"
                    component={Home}
                    options={{
                        tabBarLabel: 'Home',
                        tabBarIcon: ({ color }) => (
                            <FontAwesome5 name="home" size={24} color={color} />
                        ),
                    }}
                />
                <Tab.Screen
                    name="Cart"
                    component={Cart}
                    options={{
                        tabBarLabel: 'Cart',
                        tabBarIcon: ({ color }) => (
                            <FontAwesome name="shopping-cart" size={24} color={color} />
                        ),
                    }}
                />
                <Tab.Screen
                    name="Search"
                    component={Search}
                    options={{
                        tabBarLabel: 'Search',
                        tabBarIcon: ({ color }) => (
                            <FontAwesome name="search" size={24} color={color} />
                        ),
                    }}
                />              
                <Tab.Screen
                    name="Contact"
                    component={Contact}
                    options={{
                        tabBarLabel: 'Contact',
                        tabBarIcon: ({ color }) => (
                            <Ionicons name="person" size={24} color={color} />
                        ),
                    }}
                />
            </Tab.Navigator>

    );
};

export default Main;