import React from 'react';
import { 
    View, Text, TouchableOpacity, 
    StyleSheet, ScrollView, Image
} from 'react-native';

import Header from '../Home/header';

export default function Search ({ navigation }) {
    return (
        <>
            <Header />
            <ScrollView style={styles.wrapper}>
                <View style={styles.ProductContainer}>
                    <Image
                        style={styles.ProductImage}
                        source={{ uri: 'https://cdn.tokyolife.com.vn/forlife/media/catalog/product/cache/61a8c7eb4804248abfa4aef0c8bbd396/i/7/i733-060e_1.jpg' }}
                    />
                    <View style={styles.ProductInfo}>
                        <Text style={styles.txtName} >Áo Polo I7POL004K</Text>
                        <Text style={styles.txtPrice}>450000 VND</Text>
                        <Text style={styles.txtDesc}> Description </Text>
                        <TouchableOpacity
                            onPress={() => {
                                navigation.navigate('PRODUCT');
                            }}
                        >
                            <Text style={styles.ShowDetail} >SHOW DETAIL</Text>
                        </TouchableOpacity>
                    </View>
                </View>
                <View style={styles.ProductContainer}>
                    <Image
                        style={styles.ProductImage}
                        source={{ uri: 'https://cdn.tokyolife.com.vn/forlife/media/catalog/product/cache/61a8c7eb4804248abfa4aef0c8bbd396/i/7/i733-060e_1.jpg' }}
                    />
                    <View style={styles.ProductInfo}>
                        <Text style={styles.txtName} >Áo Polo I7POL004K</Text>
                        <Text style={styles.txtPrice}>450000 VND</Text>
                        <Text style={styles.txtDesc}> Description </Text>
                        <TouchableOpacity
                            onPress={() => {
                                navigation.navigate('PRODUCT');
                            }}
                        >
                            <Text style={styles.ShowDetail} >SHOW DETAIL</Text>
                        </TouchableOpacity>
                    </View>
                </View>
                <View style={styles.ProductContainer}>
                    <Image
                        style={styles.ProductImage}
                        source={{ uri: 'https://cdn.tokyolife.com.vn/forlife/media/catalog/product/cache/61a8c7eb4804248abfa4aef0c8bbd396/i/7/i733-060e_1.jpg' }}
                    />
                    <View style={styles.ProductInfo}>
                        <Text style={styles.txtName} >Áo Polo I7POL004K</Text>
                        <Text style={styles.txtPrice}>450000 VND</Text>
                        <Text style={styles.txtDesc}> Description </Text>
                        <TouchableOpacity
                            onPress={() => {
                                navigation.navigate('PRODUCT');
                            }}
                        >
                            <Text style={styles.ShowDetail} >SHOW DETAIL</Text>
                        </TouchableOpacity>
                    </View>
                </View>
                
                
            </ScrollView>
        </>
    );
}

const styles = StyleSheet.create({
    wrapper: {
        backgroundColor: '#fff',
        shadowOffset: { width: 2, height: 4 },
        shadowOpacity: 0.2,
        shadowRadius: 3,
    },

    ProductContainer: {
        flexDirection: 'row',
        marginTop: 6,
        paddingLeft: 16,
        paddingBottom: 8,
        borderTopColor: '#F0F0F0',
        borderTopWidth: 1,
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
        width: 90
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
    txtDesc: {
    },

    ShowDetail: {
        color: '#1a53ff',

    },
})



