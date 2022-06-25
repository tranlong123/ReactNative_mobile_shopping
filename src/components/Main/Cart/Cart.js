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
import { useDispatch, useSelector } from 'react-redux'

import CartItem from './CartItem'
import helper from '../../../common/helper'
import logger from '../../../common/logger'
import { setCart } from '../../../redux/action'

export default function Cart({ navigation }) {
    const [count, setCount] = useState(0)
    const dispatch = useDispatch()
    const createAlert = () =>
        Alert.alert('Notice', 'Buy now?', [
            {
                text: 'Cancel',
                onPress: () => logger.log('Cancel Pressed'),
                style: 'cancel',
            },
            { text: 'OK', onPress: () => logger.log('OK Pressed') },
        ])

    // !important create rerender event
    useEffect(() => {
        logger.log(count)
        setCount((count) => count + 1)
    }, [useIsFocused()])

    const cart = useSelector((state) => state.cart)
    const orderDetails = cart.orderDetails

    async function handleBuyCart() {
        // pre-processing data
        const cartId = cart.id
        const orders = orderDetails.map((orderDetail) => ({
            quantityOrdered: orderDetail.quantityOrdered,
            productId: orderDetail.product.id,
        }))
        logger.log(cartId, orders)

        // call api
        const buyResult = await helper.put(
            'http://localhost:3000/cms/v1/order/' + cartId,
            { status: 'Ordered', orders },
        )
        logger.log(buyResult)

        navigation.navigate('ORDERHISTORY')

        // get new cart
        const response = await helper.get(
            'http://localhost:3000/cms/v1/order/cart',
        )
        dispatch(setCart(response.data))
    }

    const calculateTotal = () => {
        let total = 0
        orderDetails.forEach((orderDetail) => {
            total += orderDetail.quantityOrdered * orderDetail.product.price
        })
        return helper.formatPrice(total)
    }

    return (
        <View style={styles.container}>
            <ScrollView style={styles.wrapper}>
                {!orderDetails[0] ? (
                    <Text style={styles.emptyCartMessages}>Giỏ hàng trống</Text>
                ) : (
                    orderDetails.map((orderDetail, index) => (
                        <CartItem
                            navigation={navigation}
                            orderDetail={orderDetail}
                            handleRerender={setCount}
                            key={index}
                        ></CartItem>
                    ))
                )}
            </ScrollView>
            <View style={styles.BuyButton}>
                <View style={styles.totalArea}>
                    <Text style={styles.totalTxt}>Tổng tiền</Text>
                    <Text style={styles.totalTxt}>{calculateTotal()} VND</Text>
                </View>
                <Button
                    title="Buy now"
                    color="#34B089"
                    onPress={() => {
                        handleBuyCart()
                    }}
                    disabled={orderDetails[0] ? false : true}
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
    emptyCartMessages: {
        textAlign: 'center',
        padding: 10,
        fontSize: 30,
        color: '#777',
    },
    totalArea: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        padding: 4,
    },
    totalTxt: {
        fontSize: 20,
        color: '#777',
    },
})
