import React, { useState, useEffect } from 'react'
import {
    View,
    Text,
    TouchableOpacity,
    StyleSheet,
    ScrollView,
    Image,
    Button,
} from 'react-native'
import { FontAwesome5 } from '@expo/vector-icons'
import { insertProduct } from '../../redux/action'
import { useDispatch, useSelector } from 'react-redux'
import helper from '../../api/helper'

export default function OrderProduct({
    navigation,
    productId,
    quantityOrdered,
}) {
    const [product, setProduct] = useState({ productPhotos: [{ url: '' }] })

    useEffect(() => {
        fetch(`http://localhost:3000/api/v1/product/${productId}`)
            .then((res) => res.json())
            .then((data) => setProduct(data))
    }, [productId])

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
                    <Text style={styles.txtQuantity}>
                        Quantity orderd: {quantityOrdered}
                    </Text>
                    <TouchableOpacity
                        onPress={() => {
                            navigation.navigate('PRODUCT', {
                                id: product.id,
                            })
                            console.log(product.id)
                        }}
                    >
                        <Text style={styles.ShowDetail}>View product</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </>
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
        color: '#333',
        fontSize: 20,
        fontWeight: 400,
        marginTop: 4,
    },
    txtQuantity: {
        color: '#444',
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
