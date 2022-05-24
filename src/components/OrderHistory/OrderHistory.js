import React from 'react';
import {
    View, Text, TouchableOpacity,
    StyleSheet, ScrollView, Image, Dimensions
} from 'react-native';
import { FontAwesome5 } from '@expo/vector-icons';

const deviceWidth = Dimensions.get('screen').width;

export default function OrderHistory({ navigation }) {
    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <TouchableOpacity
                    onPress={() => {
                        navigation.navigate('MAIN');
                    }}
                    style={styles.backIcon}
                >
                    <FontAwesome5 name="chevron-left" size={30} color="#34B089" />
                </TouchableOpacity>
                <Text style={styles.titleStyle} >Order History</Text>
                <View style={{ width: 30 }} ></View>
            </View>
            <ScrollView style={styles.wrapper}>
                <View style={styles.OrderContainer}>
                    <View style={styles.orderRow}>
                        <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                            <Text style={{ color: '#9A9A9A', fontWeight: 'bold' }}>Order id:</Text>
                            <Text style={{ color: '#2ABB9C' }}>ORD</Text>
                        </View>
                        <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                            <Text style={{ color: '#9A9A9A', fontWeight: 'bold' }}>OrderTime:</Text>
                            <Text style={{ color: '#C21C70' }}>2022-04-24 00:00:00</Text>
                        </View>
                        <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                            <Text style={{ color: '#9A9A9A', fontWeight: 'bold' }}>Product:</Text>
                            <Text style={{ color: '#2ABB9C' }}>Quần Shorts Nam I7SHP513I</Text>
                        </View>
                        <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                            <Text style={{ color: '#9A9A9A', fontWeight: 'bold' }}>quantity ordered:</Text>
                            <Text style={{ color: '#C21C70', fontWeight: 'bold' }}>1</Text>
                        </View>
                    </View>
                </View>


                <View style={styles.OrderContainer}>
                    <View style={styles.orderRow}>
                        <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                            <Text style={{ color: '#9A9A9A', fontWeight: 'bold' }}>Order id:</Text>
                            <Text style={{ color: '#2ABB9C' }}>ORD</Text>
                        </View>
                        <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                            <Text style={{ color: '#9A9A9A', fontWeight: 'bold' }}>OrderTime:</Text>
                            <Text style={{ color: '#C21C70' }}>2022-04-24 00:00:00</Text>
                        </View>
                        <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                            <Text style={{ color: '#9A9A9A', fontWeight: 'bold' }}>Product:</Text>
                            <Text style={{ color: '#2ABB9C' }}>Quần Shorts Nam I7SHP513I</Text>
                        </View>
                        <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                            <Text style={{ color: '#9A9A9A', fontWeight: 'bold' }}>quantity ordered:</Text>
                            <Text style={{ color: '#C21C70', fontWeight: 'bold' }}>1</Text>
                        </View>
                    </View>
                </View>


                <View style={styles.OrderContainer}>
                    <View style={styles.orderRow}>
                        <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                            <Text style={{ color: '#9A9A9A', fontWeight: 'bold' }}>Order id:</Text>
                            <Text style={{ color: '#2ABB9C' }}>ORD</Text>
                        </View>
                        <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                            <Text style={{ color: '#9A9A9A', fontWeight: 'bold' }}>OrderTime:</Text>
                            <Text style={{ color: '#C21C70' }}>2022-04-24 00:00:00</Text>
                        </View>
                        <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                            <Text style={{ color: '#9A9A9A', fontWeight: 'bold' }}>Product:</Text>
                            <Text style={{ color: '#2ABB9C' }}>Quần Shorts Nam I7SHP513I</Text>
                        </View>
                        <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                            <Text style={{ color: '#9A9A9A', fontWeight: 'bold' }}>quantity ordered:</Text>
                            <Text style={{ color: '#C21C70', fontWeight: 'bold' }}>1</Text>
                        </View>
                    </View>
                </View>


                <View style={styles.OrderContainer}>
                    <View style={styles.orderRow}>
                        <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                            <Text style={{ color: '#9A9A9A', fontWeight: 'bold' }}>Order id:</Text>
                            <Text style={{ color: '#2ABB9C' }}>ORD</Text>
                        </View>
                        <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                            <Text style={{ color: '#9A9A9A', fontWeight: 'bold' }}>OrderTime:</Text>
                            <Text style={{ color: '#C21C70' }}>2022-04-24 00:00:00</Text>
                        </View>
                        <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                            <Text style={{ color: '#9A9A9A', fontWeight: 'bold' }}>Product:</Text>
                            <Text style={{ color: '#2ABB9C' }}>Quần Shorts Nam I7SHP513I</Text>
                        </View>
                        <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                            <Text style={{ color: '#9A9A9A', fontWeight: 'bold' }}>quantity ordered:</Text>
                            <Text style={{ color: '#C21C70', fontWeight: 'bold' }}>1</Text>
                        </View>
                    </View>
                </View>



                <View style={styles.OrderContainer}>
                    <View style={styles.orderRow}>
                        <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                            <Text style={{ color: '#9A9A9A', fontWeight: 'bold' }}>Order id:</Text>
                            <Text style={{ color: '#2ABB9C' }}>ORD</Text>
                        </View>
                        <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                            <Text style={{ color: '#9A9A9A', fontWeight: 'bold' }}>OrderTime:</Text>
                            <Text style={{ color: '#C21C70' }}>2022-04-24 00:00:00</Text>
                        </View>
                        <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                            <Text style={{ color: '#9A9A9A', fontWeight: 'bold' }}>Product:</Text>
                            <Text style={{ color: '#2ABB9C' }}>Quần Shorts Nam I7SHP513I</Text>
                        </View>
                        <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                            <Text style={{ color: '#9A9A9A', fontWeight: 'bold' }}>quantity ordered:</Text>
                            <Text style={{ color: '#C21C70', fontWeight: 'bold' }}>1</Text>
                        </View>
                    </View>
                </View>

            </ScrollView>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#34B089',
        padding: 10,
    },
    header: {
        backgroundColor: '#fff',
        height: 40,
        flexDirection: 'row',
        justifyContent: 'space-between',
        shadowOffset: { width: 2, height: 4 },
        shadowOpacity: 0.2,
        shadowRadius: 3,
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
        fontFamily: 'roboto',
        color: '#34B089',
        fontSize: 30,
    },
    OrderContainer: {
        height: deviceWidth / 3,
        flexDirection: 'row',
        paddingLeft: 10,
        paddingBottom: 8,
        borderTopColor: '#F0F0F0',
        borderTopWidth: 1,

    },
    orderRow: {
        backgroundColor: '#FFF',
        width: deviceWidth * 0.8,
        margin: 10,
        shadowOffset: { width: 2, height: 2 },
        shadowColor: '#DFDFDF',
        shadowOpacity: 0.2,
        padding: 10,
        borderRadius: 2,
        justifyContent: 'space-around'
    }
})

