import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';

export default function CartItem({ navigation, CartItemName, CartItemPrice, CartItemDes }) {
    return (
        <>
            <View style={styles.ProductContainer}>
                <Image
                    style={styles.ProductImage}
                    source={{ uri: 'https://cdn.tokyolife.com.vn/forlife/media/catalog/product/cache/61a8c7eb4804248abfa4aef0c8bbd396/i/7/i733-060e_1.jpg' }}
                />
                <View style={styles.ProductInfo}>
                    <Text style={styles.txtName} >{CartItemName}</Text>


                    <Text style={styles.txtPrice}>{CartItemPrice}</Text>
                    <Text style={styles.txtDesc}> {CartItemDes} </Text>
                    <TouchableOpacity
                        onPress={() => {
                            navigation.navigate('PRODUCT');
                        }}
                    >
                        <Text style={styles.ShowDetail} >SHOW DETAIL</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </>
    );
}

