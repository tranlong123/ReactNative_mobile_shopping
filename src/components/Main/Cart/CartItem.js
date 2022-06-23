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
import { useDispatch, useSelector } from 'react-redux'
import helper from '../../../api/helper'
import {
    removeProduct,
    insertProduct,
    clearProduct,
} from '../../../redux/action'

export default function CartItem({ navigation, orderDetail, handleRerender }) {
    const [product, setProduct] = useState({ productPhotos: [{ url: '' }] })
    const dispatch = useDispatch()

    useEffect(async () => {
        const response = helper.get(
            `http://localhost:3000/api/v1/product/${orderDetail.product.id}`,
        )
        setProduct((await response).data)
    }, [orderDetail])

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
                    <Text style={styles.txtPrice}>
                        {helper.formatPrice(product.price)} VND
                    </Text>
                    <View style={styles.numberOfProduct}>
                        <TouchableOpacity
                            onPress={() => {
                                dispatch(insertProduct(product))
                                handleRerender((count) => count + 1)
                            }}
                        >
                            <Text style={styles.quantityTxt}>+</Text>
                        </TouchableOpacity>
                        <Text style={styles.quantityTxt}>
                            {orderDetail.quantityOrdered}
                        </Text>
                        <TouchableOpacity
                            onPress={() => {
                                dispatch(removeProduct(product))
                                handleRerender((count) => count + 1)
                            }}
                        >
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
                <TouchableOpacity
                    onPress={() => {
                        dispatch(clearProduct(product))
                        handleRerender((count) => count + 1)
                    }}
                    style={styles.RemoveIcon}
                >
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
        color: '#BCBCBC',
        fontSize: 15,
        fontWeight: 400,
        marginTop: 4,
    },
    txtPrice: {
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
