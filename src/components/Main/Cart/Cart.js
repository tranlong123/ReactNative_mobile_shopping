import React from 'react';
import {
    View, Text, TouchableOpacity,
    Button, StyleSheet, ScrollView, Image, Alert,
} from 'react-native';

import { Fontisto } from '@expo/vector-icons';

export default function Cart({ navigation }) {

    const createAlert = () =>
        Alert.alert(
            "Notice",
            "Buy now?",
            [
                {
                    text: "Cancel",
                    onPress: () => console.log("Cancel Pressed"),
                    style: "cancel"
                },
                { text: "OK", onPress: () => console.log("OK Pressed") }
            ]
        );

    return (
        <View style={styles.container}>

            <ScrollView style={styles.wrapper}>
                <View style={styles.ProductContainer}>
                    <Image
                        style={styles.ProductImage}
                        source={{ uri: 'https://cdn.tokyolife.com.vn/forlife/media/catalog/product/cache/61a8c7eb4804248abfa4aef0c8bbd396/i/7/i733-060e_1.jpg' }}
                    />
                    <View style={styles.ProductInfo}>
                        <Text style={styles.txtName} >Áo Polo I7POL004K</Text>
                        <Text style={styles.txtPrice}>450000 VND</Text>
                        <View style={styles.numberOfProduct}>
                            <TouchableOpacity
                                onPress={() => {

                                }}
                            >
                                <Text style={styles.quantityTxt}>+</Text>
                            </TouchableOpacity>
                            <Text style={styles.quantityTxt} >1</Text>
                            <TouchableOpacity
                                onPress={() => {

                                }}
                            >
                                <Text style={styles.quantityTxt}>-</Text>
                            </TouchableOpacity>
                        </View>
                        <TouchableOpacity
                            onPress={() => {
                                navigation.navigate('PRODUCT');
                            }}
                        >
                            <Text style={styles.ShowDetail} >SHOW DETAIL</Text>
                        </TouchableOpacity>
                    </View>
                    <TouchableOpacity
                        onPress={() => {

                        }}
                        style={styles.RemoveIcon}
                    >
                        <Fontisto name="shopping-basket-remove" size={24} color="#34B089" />
                    </TouchableOpacity>
                </View>


            </ScrollView>
            <View style={styles.BuyButton}>
                <Button
                    title="Buy now"
                    color='#34B089'
                    onPress={() => {
                        createAlert()
                    }}
                />
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 10,
    },
    wrapper: {
        backgroundColor: '#fff',
        shadowOffset: { width: 2, height: 4 },
        shadowOpacity: 0.2,
        shadowRadius: 3,
    },
    RemoveIcon: {
        height: 30,
        width: 30,
        marginRight: 6,
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
    BuyButton: {
        padding: 10,
    },
})
