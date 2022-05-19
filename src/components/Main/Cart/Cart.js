import React from 'react';
import {
    View, Text, TouchableOpacity,
    StyleSheet, ScrollView, Image, Button,
} from 'react-native';

export default function Cart({ navigation }) {
    return (
        <View style={styles.container}>
            
            {/* <View style={styles.wrapper}> */}
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
            {/* </View> */}
            <View style={styles.BuyButton}>
                    <Button
                        title="Buy now"
                        color='#34B089'
                        onPress={() => {
                            navigation.navigate('MAIN');
                        }}
                    />
                </View>

        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
            // backgroundColor: '#34B089',
        padding: 10,
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
        fontFamily: 'Avenir',
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
        width: 90
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
    txtDesc: {
    },

    ShowDetail: {
        color: '#1a53ff',

    },
    BuyButton: {
        padding: 10,
    },
})
