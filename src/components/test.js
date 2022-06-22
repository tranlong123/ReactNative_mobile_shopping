import React, { useState, useEffect } from 'react'
import {
    StyleSheet,
    View,
    Text,
    TextInput,
    TouchableOpacity,
    Dimensions,
    ScrollView,
} from 'react-native'
import { login, logout } from '../redux/action'
import { useDispatch, useSelector } from 'react-redux'

function Test({ navigation }) {
    const dispatch = useDispatch()
    return (
        <View>
            <Text>Test Page</Text>
            <Text>
                The user is:{' '}
                {JSON.stringify(useSelector((state) => state.user))}
            </Text>
            <TouchableOpacity
                onPress={() => {
                    dispatch(login({ email: 'test', username: 'test' }))
                }}
            >
                <Text>Login</Text>
            </TouchableOpacity>
            <TouchableOpacity
                onPress={() => {
                    dispatch(logout())
                }}
            >
                <Text>Logout</Text>
            </TouchableOpacity>
            <TouchableOpacity
                onPress={() => {
                    navigation.navigate('AUTHENTICATION')
                }}
            >
                <Text>Back to Authentication page</Text>
            </TouchableOpacity>
        </View>
    )
}

export default Test
