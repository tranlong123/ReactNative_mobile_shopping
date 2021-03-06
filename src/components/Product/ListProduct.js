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

export default function ListProduct({ navigation }) {
    const [products, setProducts] = useState([])
    useEffect(() => {
        fetch('http://localhost:3000/api/v1/product')
            .then((res) => res.json())
            .then((data) => setProducts(data.data))
    }, [])

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
                <Text style={styles.titleStyle}>Product List</Text>
                <View style={{ width: 30 }}></View>
            </View>
            <ScrollView style={styles.wrapper}>
                {products.map(
                    (item, index) =>
                        item && (
                            <View style={styles.ProductContainer} key={index}>
                                <Image
                                    style={styles.ProductImage}
                                    source={{
                                        uri: item.productPhotos[0].url,
                                    }}
                                />
                                <View style={styles.ProductInfo}>
                                    <Text style={styles.txtName}>
                                        {item.name}
                                    </Text>
                                    <Text style={styles.txtPrice}>
                                        {helper.formatPrice(item.price)} VND
                                    </Text>
                                    <Text style={styles.txtDesc}> </Text>
                                    <TouchableOpacity
                                        onPress={() => {
                                            navigation.navigate('PRODUCT', {
                                                id: item.id,
                                            })
                                        }}
                                    >
                                        <Text style={styles.ShowDetail}>
                                            Show detail
                                        </Text>
                                    </TouchableOpacity>
                                </View>
                            </View>
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
        fontFamily: 'sans-serif',
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
        fontFamily: 'sans-serif',
        color: '#777',
        fontSize: 20,
        fontWeight: 400,
        marginTop: 4,
    },
    txtPrice: {
        fontFamily: 'sans-serif',
        color: '#ff3333',
    },
    txtDesc: {},

    ShowDetail: {
        color: '#3EBA77',
    },
})
