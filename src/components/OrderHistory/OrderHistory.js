import React, { useEffect, useState } from 'react'
import {
    View,
    Text,
    TouchableOpacity,
    StyleSheet,
    ScrollView,
    Dimensions,
} from 'react-native'
import { FontAwesome5 } from '@expo/vector-icons'
import OrderItem from './OrderItem'
import { useIsFocused } from '@react-navigation/native'
import helper from '../../api/helper'

const deviceWidth = Dimensions.get('screen').width

export default function OrderHistory({ navigation }) {
    const [orders, setOrders] = useState([])
    useEffect(async () => {
        const response = await helper.get('http://localhost:3000/cms/v1/order')
        setOrders(response.data.data)
    }, [useIsFocused()])

    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <TouchableOpacity
                    onPress={() => {
                        navigation.navigate('MAIN')
                    }}
                    style={styles.backIcon}
                >
                    <FontAwesome5
                        name="chevron-left"
                        size={30}
                        color="#34B089"
                    />
                </TouchableOpacity>
                <Text style={styles.titleStyle}>Order History</Text>
                <TouchableOpacity
                    onPress={() => {
                        navigation.navigate('MAIN')
                    }}
                    style={styles.backIcon}
                >
                    <FontAwesome5 name="home" size={30} color="#34B089" />
                </TouchableOpacity>
            </View>
            <ScrollView style={styles.wrapper}>
                {orders.map(
                    (order, index) =>
                        order.status != 'Cart' && (
                            <OrderItem
                                navigation={navigation}
                                key={index}
                                orderId={order.id}
                            ></OrderItem>
                        ),
                )}
            </ScrollView>
        </View>
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
})
