import axios from 'axios'
import { useEffect, useState } from 'react'
import { Text, StyleSheet, Image, TouchableOpacity } from 'react-native'
import helper from '../../../api/helper'
export default function SearchProduct({ navigation, item }) {
    const [product, setProduct] = useState({ productPhotos: [{ url: '' }] })
    useEffect(() => {
        axios
            .get(`http://localhost:3000/api/v1/product/${item._id}`)
            .then((res) => setProduct(res.data))
    }, [item])

    return (
        <TouchableOpacity
            onPress={() => {
                navigation.navigate('PRODUCT', { id: product.id })
            }}
            style={styles.productItem}
        >
            <Image
                style={styles.productImage}
                source={{ uri: product.productPhotos[0].url }}
            />
            <Text style={styles.productName}>{product.name}</Text>
            <Text style={styles.productPrice}>
                {helper.formatPrice(product.price)} VND
            </Text>
        </TouchableOpacity>
    )
}
const styles = StyleSheet.create({
    productItem: {
        shadowColor: 'black',
        shadowOffset: { width: 2, height: 4 },
        shadowOpacity: 0.2,
        shadowRadius: 3,
        padding: 10,
        borderRadius: 8,
        flexBasis: '45%',
    },
    productImage: {
        marginBottom: 10,
        height: 150,
        borderRadius: 8,
    },
    productName: {
        color: 'gray',
        fontSize: 16,
    },

    productPrice: {
        color: '#ff3333',
        fontSize: 14,
    },
})
