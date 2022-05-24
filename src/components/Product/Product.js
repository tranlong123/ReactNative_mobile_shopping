import React, { useState } from 'react'
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

export default function Product({ navigation, id = 2 }) {
    const [product, setProduct] = useState({ productPhotos: [{ url: '' }] })
    fetch(`http://mobile-uet.ml:4040/api/v1/product/${id}`)
        .then((res) => res.json())
        .then((data) => setProduct(data))

    return (
        <View style={styles.container}>
            <View style={styles.swapper}>
                <View style={styles.header}>
                    <TouchableOpacity
                        onPress={() => {
                            navigation.navigate('LISTPRODUCT')
                        }}
                        style={styles.backIcon}
                    >
                        <FontAwesome5
                            name="chevron-left"
                            size={30}
                            color="#34B089"
                        />
                    </TouchableOpacity>
                    <Text style={styles.titleStyle}>Product</Text>
                    <TouchableOpacity
                        onPress={() => {
                            navigation.navigate('MAIN')
                        }}
                        style={styles.backIcon}
                    >
                        <FontAwesome5 name="home" size={30} color="#34B089" />
                    </TouchableOpacity>
                </View>
                <ScrollView horizontal={true} style={styles.ImageList}>
                    {product.productPhotos.map((item, index) => (
                        <Image
                            style={styles.ProductImage}
                            source={{
                                uri: item.url,
                            }}
                            key={index}
                        />
                    ))}
                </ScrollView>
                <Text style={styles.ProductName}>{product.name}</Text>
                <Text style={styles.ProductPrice}>{product.price}</Text>
                <Text style={styles.ProductDesc}>{product.description}</Text>
                <View style={styles.BuyButton}>
                    <Button
                        title="Đưa vào giỏ hàng"
                        color="#34B089"
                        onPress={() => {
                            navigation.navigate('MAIN')
                        }}
                    />
                </View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#34B089',
        padding: 10,
    },
    swapper: {
        flex: 1,
        backgroundColor: '#fff',
        shadowOffset: { width: 2, height: 4 },
        shadowOpacity: 0.2,
        shadowRadius: 3,
    },
    header: {
        height: 40,
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    backIcon: {
        height: 30,
        width: 30,
        marginLeft: 8,
        marginRight: 8,
    },
    titleStyle: {
        fontFamily: 'roboto',
        color: '#34B089',
        fontSize: 30,
    },
    ImageList: {
        flex: 1,
        flexDirection: 'row',
        height: 240,
    },
    ProductImage: {
        height: 240,
        width: 150,
    },
    ProductName: {
        padding: 4,
        color: '#34B089',
        fontSize: 20,
    },
    ProductPrice: {
        padding: 4,
    },
    ProductDesc: {
        padding: 4,
    },
    BuyButton: {
        padding: 10,
    },
})

{
    /* <TouchableOpacity
onPress={() => {
    navigation.navigate('LISTPRODUCT');
}}
>
<Text>
    goto ListProduct
</Text>
</TouchableOpacity>
<TouchableOpacity
onPress={() => {
    navigation.navigate('MAIN');
}}
>
<Text>
    goto Cart
</Text>
</TouchableOpacity> */
}
