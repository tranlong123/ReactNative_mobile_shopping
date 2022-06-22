import React, { useState, useEffect } from 'react'
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
import { Fontisto } from '@expo/vector-icons'
import helper from '../../../api/helper'

export default function CartItem({ navigation, orderDetail }) {
    const [product, setProduct] = useState({ productPhotos: [{ url: '' }] })

    useEffect(async () => {
        const response = helper.get(
            `http://localhost:3000/api/v1/product/${orderDetail.product.id}`,
        )
        setProduct((await response).data)
    }, [])

    return (
        <>
            <View style={styles.ProductContainer}>
                <Image
                    style={styles.ProductImage}
                    source={{
                        uri: product.productPhotos[0].url,
                    }}
                />
                <View style={styles.ProductInfo}>
                    <Text style={styles.txtName}>{product.name}</Text>
                    <Text style={styles.txtPrice}>{product.price} VND</Text>
                    <View style={styles.numberOfProduct}>
                        <TouchableOpacity onPress={() => {}}>
                            <Text style={styles.quantityTxt}>+</Text>
                        </TouchableOpacity>
                        <Text style={styles.quantityTxt}>
                            {orderDetail.quantityOrdered}
                        </Text>
                        <TouchableOpacity onPress={() => {}}>
                            <Text style={styles.quantityTxt}>-</Text>
                        </TouchableOpacity>
                    </View>
                    <TouchableOpacity
                        onPress={() => {
                            navigation.navigate('PRODUCT', { id: product.id })
                        }}
                    >
                        <Text style={styles.ShowDetail}>SHOW DETAIL</Text>
                    </TouchableOpacity>
                </View>
                <TouchableOpacity onPress={() => {}} style={styles.RemoveIcon}>
                    <Fontisto
                        name="shopping-basket-remove"
                        size={24}
                        color="#34B089"
                    />
                </TouchableOpacity>
            </View>
        </>
    )
}

const styles = StyleSheet.create({
    ProductContainer: {
        flexDirection: 'row',
        paddingLeft: 16,
        paddingBottom: 8,
        borderTopColor: '#F0F0F0',
        borderTopWidth: 1,
        justifyContent: 'space-between',
        shadowOffset: { width: 2, height: 4 },
        shadowOpacity: 0.2,
        shadowRadius: 3,
    },
    ProductInfo: {
        justifyContent: 'space-between',
        marginLeft: 16,
    },
    ProductImage: {
        marginTop: 8,
        height: 120,
        width: 90,
    },
    txtName: {
        fontFamily: 'Avenir',
        color: '#BCBCBC',
        fontSize: 20,
        fontWeight: 400,
        marginTop: 4,
    },
    txtPrice: {
        fontFamily: 'Avenir',
        color: '#1a53ff',
    },
    numberOfProduct: {
        flexDirection: 'row',
    },
    quantityTxt: {
        fontSize: 16,
        paddingLeft: 6,
        paddingRight: 6,
    },
    ShowDetail: {
        color: '#1a53ff',
    },
})
