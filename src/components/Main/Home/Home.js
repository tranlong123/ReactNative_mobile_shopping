import {
    StyleSheet,
    Text,
    View,
    Dimensions,
    ScrollView,
    TouchableOpacity,
} from 'react-native'
import React, { useState, useEffect } from 'react'

import ProductItem from './product_item'
import Header from './Header'
import BanNerItem from './BannerItem'
import helper from '../../../common/helper'

const deviceWidth = Dimensions.get('screen').width

export default function Home({ navigation }) {
    const [products, setProducts] = useState([])
    const [bnList, setBannerList] = useState([])

    useEffect(() => {
        fetch('http://localhost:3000/api/v1/product')
            .then((res) => res.json())
            .then((data) => setProducts(data.data))
    }, [])

    useEffect(() => {
        fetch('http://localhost:3000/api/v1/productLine')
            .then((res) => res.json())
            .then((data) => setBannerList(data.data))
    }, [])

    return (
        <ScrollView>
            <Header navigation={navigation} />
            {/* Category */}
            <View style={styles.ListName}>
                <Text style={styles.listNameText}>List of Categories</Text>
            </View>
            <View>
                <ScrollView nestedScrollEnabled={true} horizontal={true}>
                    <View style={styles.bannerList}>
                        {bnList.map((item, index) => (
                            <BanNerItem
                                navigation={navigation}
                                imageUrl={item.imageUrl}
                                id={item.id}
                                key={index}
                            />
                        ))}
                    </View>
                </ScrollView>
            </View>
            {/* Producitem */}
            <TouchableOpacity
                style={styles.ListName}
                onPress={() => {
                    navigation.navigate('LISTPRODUCT')
                }}
            >
                <Text style={styles.listNameText}>Product</Text>
                {/* <Text style={styles.seeMore}>List view</Text> */}
            </TouchableOpacity>
            <View style={[styles.Top_product, { width: deviceWidth }]}>
                <View style={styles.flexDrRow}>
                    {helper.getRandom(products).map((item, index) => (
                        <ProductItem
                            navigation={navigation}
                            name={item.name}
                            imageUrl={item.productPhotos[0].url}
                            price={item.price}
                            id={item.id}
                            key={index}
                        />
                    ))}
                </View>
            </View>
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    wrapper: {
        margin: 8,
        height: 200,
        backgroundColor: '#fff',
        shadowColor: '#2E272B',
        shadowOffset: { width: 2, height: 4 },
        shadowOpacity: 0.2,
    },
    flexDrRow: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'space-around',
    },
    ListName: {
        flexDirection: 'row',
        marginTop: 8,
    },
    listNameText: {
        marginLeft: 8,
        fontSize: 20,
        fontWeight: 'bold',
        color: '#AFAEAF',
    },
    seeMore: {
        fontSize: 20,
        color: '#1a53ff',
        position: 'absolute',
        fontFamily: 'sans-serif',
        right: 10,
    },
    Top_product: {
        height: 224,
        display: 'flex',
    },
    bannerList: {
        flexDirection: 'row',
        overflowY: 'hidden',
    },
})
