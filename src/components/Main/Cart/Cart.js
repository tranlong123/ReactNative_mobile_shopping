import React, { useEffect, useState } from 'react'
import {
    View,
    Text,
    TouchableOpacity,
    Button,
    StyleSheet,
    ScrollView,
    Image,
    Alert,
} from 'react-native'
import { useIsFocused } from '@react-navigation/native'
import { useSelector } from 'react-redux'

import CartItem from './CartItem'

export default function Cart({ navigation }) {
    const [count, setCount] = useState(0)
    const createAlert = () =>
        Alert.alert('Notice', 'Buy now?', [
            {
                text: 'Cancel',
                onPress: () => console.log('Cancel Pressed'),
                style: 'cancel',
            },
            { text: 'OK', onPress: () => console.log('OK Pressed') },
        ])

    // !important create rerender event
    useEffect(() => {
        console.log(count)
        setCount((count) => count + 1)
    }, [useIsFocused()])

    const orderDetails = useSelector((state) => state.cart).orderDetails

    return (
        <View style={styles.container}>
            <ScrollView style={styles.wrapper}>
                {orderDetails.map((orderDetail, index) => (
                    <CartItem
                        navigation={navigation}
                        orderDetail={orderDetail}
                        handleRerender={setCount}
                        key={index}
                    ></CartItem>
                ))}
            </ScrollView>
            <View style={styles.BuyButton}>
                <Button
                    title="Buy now"
                    color="#34B089"
                    onPress={() => {
                        createAlert()
                    }}
                />
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 10,
    },
    wrapper: {
        backgroundColor: '#fff',
        shadowOffset: { width: 2, height: 4 },
        shadowOpacity: 0.2,
        shadowRadius: 3,
    },
    RemoveIcon: {
        height: 30,
        width: 30,
        marginRight: 6,
    },
    titleStyle: {
        color: '#34B089',
        fontSize: 30,
    },
    BuyButton: {
        padding: 10,
    },
})
