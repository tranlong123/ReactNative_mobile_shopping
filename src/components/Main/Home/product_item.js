import { Text, StyleSheet, Image, TouchableOpacity } from 'react-native'
import helper from '../../../common/helper'
import logger from '../../../common/logger'
export default function ProductItem({ navigation, imageUrl, name, price, id }) {
    return (
        <TouchableOpacity
            onPress={() => {
                navigation.navigate('PRODUCT', { id: id })
            }}
            style={styles.productItem}
        >
            <Image style={styles.productImage} source={{ uri: imageUrl }} />
            <Text style={styles.productName}>{name}</Text>
            <Text style={styles.productPrice}>
                {helper.formatPrice(price)} VND
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
