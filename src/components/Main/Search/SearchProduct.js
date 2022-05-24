import { useState } from 'react'
import { Text, StyleSheet, Image, TouchableOpacity } from 'react-native'
export default function SearchProduct({ navigation, item }) {
    const [product, setProduct] = useState({ productPhotos: [{ url: '' }] })
    fetch(`http://mobile-uet.ml:4040/api/v1/product/${item._id}`)
        .then((res) => res.json())
        .then((data) => setProduct(data))
    item = item._source

    return (
        <TouchableOpacity
            onPress={() => {
                navigation.navigate('PRODUCT')
            }}
            style={styles.productItem}
        >
            <Image
                style={styles.productImage}
                source={{ uri: product.productPhotos[0].url }}
            />
            <Text style={styles.productName}>{item.name}</Text>
            <Text style={styles.productPrice}>{item.price} VND</Text>
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
