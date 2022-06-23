import React, { useState, useEffect } from 'react'
import { View, Text, TouchableOpacity } from 'react-native'
import { login, logout, setCart } from '../redux/action'
import { useDispatch, useSelector } from 'react-redux'
import axios from 'axios'
import helper from '../api/helper'

function Test({ navigation }) {
    const dispatch = useDispatch()

    const handleLogin = async () => {
        await checkLogin()
        await getCart()
    }

    const checkLogin = async () => {
        const payload = {
            email: 'nguoidung01@gmail.com',
            password: 'nguoidung01',
        }
        const loginResponse = await helper.post(
            'http://localhost:3000/login',
            payload,
        )
        dispatch(login(loginResponse.data.data))
    }

    const getCart = async () => {
        const response = await helper.get(
            'http://localhost:3000/cms/v1/order/cart',
        )

        // // createCartIfNotExist
        // if (!response.data) {
        //     const createCart = await helper.post(
        //         'http://localhost:3000/cms/v1/order',
        //     )
        //     response = await helper.get(
        //         'http://localhost:3000/cms/v1/order/cart',
        //     )
        // }
        dispatch(setCart(response.data))
    }

    return (
        <View>
            <Text>Test Page</Text>
            <Text>
                The user is:{' '}
                {JSON.stringify(useSelector((state) => state.user))}
            </Text>
            <Text>
                The cart is:{' '}
                {JSON.stringify(useSelector((state) => state.cart))}
            </Text>
            <TouchableOpacity onPress={handleLogin}>
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
