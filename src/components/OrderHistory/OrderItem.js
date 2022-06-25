import React, { useState, useEffect } from 'react'
import {
    View,
    Text,
    TouchableOpacity,
    StyleSheet,
    ScrollView,
    Dimensions,
} from 'react-native'
import { FontAwesome5 } from '@expo/vector-icons'
import { useIsFocused } from '@react-navigation/native'
import helper from '../../api/helper'

const deviceWidth = Dimensions.get('screen').width

export default function OrderItem({ navigation, orderId }) {
    const [order, setOrder] = useState({})
    useEffect(async () => {
        const response = await helper.get(
            'http://localhost:3000/cms/v1/order/' + orderId,
        )
        setOrder(response.data)
    }, [useIsFocused()])

    console.log('order', order)

    const calculateTotal = () => {
        if (!order?.orderDetails) return 0
        let total = 0
        order.orderDetails.forEach((orderDetail) => {
            total += orderDetail.quantityOrdered * orderDetail.product.price
        })
        return helper.formatPrice(total)
    }

    return (
        <TouchableOpacity
            onPress={() => {
                navigation.navigate('ORDERDETAIL', { order: order })
            }}
        >
            <View style={styles.OrderContainer}>
                <View style={styles.orderRow}>
                    <View style={styles.rowBetween}>
                        <Text style={styles.titleTxt}>Order id:</Text>
                        <Text style={{ color: '#2ABB9C' }}>{order.id}</Text>
                    </View>
                    <View style={styles.rowBetween}>
                        <Text style={styles.titleTxt}>OrderTime:</Text>
                        <Text style={{ color: '#C21C70' }}>
                            {helper.formatDate(order.order_date)}
                        </Text>
                    </View>
                    <View style={styles.rowBetween}>
                        <Text style={styles.titleTxt}>OrderStatus:</Text>
                        <Text style={{ color: '#C21C70' }}>{order.status}</Text>
                    </View>
                    <View style={styles.rowBetween}>
                        <Text style={styles.titleTxt}>Total: </Text>
                        <Text style={{ color: '#C21C70', fontWeight: 'bold' }}>
                            {calculateTotal()} VND
                        </Text>
                    </View>
                </View>
            </View>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#34B089',
        padding: 10,
    },
    header: {
        backgroundColor: '#fff',
        height: 40,
        flexDirection: 'row',
        justifyContent: 'space-between',
        shadowOffset: { width: 2, height: 4 },
        shadowOpacity: 0.2,
        shadowRadius: 3,
    },
    wrapper: {
        backgroundColor: '#fff',
        shadowOffset: { width: 2, height: 4 },
        shadowOpacity: 0.2,
        shadowRadius: 3,
    },
    backIcon: {
        height: 30,
        width: 30,
    },
    titleStyle: {
        fontFamily: 'roboto',
        color: '#34B089',
        fontSize: 30,
    },
    OrderContainer: {
        height: deviceWidth / 3,
        flexDirection: 'row',
        paddingLeft: 10,
        paddingBottom: 8,
        borderTopColor: '#F0F0F0',
        borderTopWidth: 1,
    },
    orderRow: {
        backgroundColor: '#FFF',
        width: deviceWidth * 0.8,
        margin: 10,
        shadowOffset: { width: 2, height: 2 },
        shadowColor: '#DFDFDF',
        shadowOpacity: 0.2,
        padding: 10,
        borderRadius: 2,
        justifyContent: 'space-around',
    },
    rowBetween: {
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    titleTxt: { color: '#9A9A9A', fontWeight: 'bold' },
})
