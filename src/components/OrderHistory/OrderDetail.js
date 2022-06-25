import React, { useState, useEffect } from 'react'
import {
    View,
    Text,
    TouchableOpacity,
    StyleSheet,
    ScrollView,
    Image,
} from 'react-native'
import { FontAwesome5 } from '@expo/vector-icons'
import helper from '../../common/helper'
import logger from '../../common/logger'
import OrderProduct from './OrderProduct'

export default function OrderDetail({ navigation, route }) {
    const orderDetails = route.params.order.orderDetails
    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <TouchableOpacity
                    onPress={() => {
                        navigation.goBack()
                    }}
                    style={styles.backIcon}
                >
                    <FontAwesome5
                        name="chevron-left"
                        size={30}
                        color="#34B089"
                    />
                </TouchableOpacity>
                <Text style={styles.titleStyle}>Order details</Text>
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
                {orderDetails.map(
                    (item, index) =>
                        item && (
                            <OrderProduct
                                key={index}
                                navigation={navigation}
                                productId={item.product.id}
                                quantityOrdered={item.quantityOrdered}
                            ></OrderProduct>
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
        height: 40,
        flexDirection: 'row',
        justifyContent: 'space-between',
        backgroundColor: '#fff',
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
    ProductContainer: {
        flexDirection: 'row',
        paddingLeft: 16,
        paddingBottom: 8,
        borderTopColor: '#F0F0F0',
        borderTopWidth: 1,
    },
    ProductInfo: {
        justifyContent: 'space-between',
        marginLeft: 16,
    },
    ProductImage: {
        height: 120,
        width: 90,
    },
    txtName: {
        fontFamily: 'roboto',
        color: '#BCBCBC',
        fontSize: 20,
        fontWeight: 400,
        marginTop: 4,
    },
    txtPrice: {
        fontFamily: 'roboto',
        color: '#1a53ff',
    },
    txtDesc: {},

    ShowDetail: {
        color: '#1a53ff',
    },
})
