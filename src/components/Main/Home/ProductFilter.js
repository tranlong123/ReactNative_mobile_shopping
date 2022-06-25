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
import helper from '../../../api/helper'
import { AntDesign } from '@expo/vector-icons';

export default function ProductFilter({ navigation }) {
    const [id, setId] = useState('')
    const [filterPrice, setFilterPrice] = useState(0)

    const [checkM, setCheckM] = useState(false)
    const [checkS, setCheckS] = useState(false)
    const [checkL, setCheckL] = useState(false)
    const [checkXL, setCheckXL] = useState(false)
    const [checkXXL, setCheckXXL] = useState(false)

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
                <Text style={styles.titleStyle}>Product Filter</Text>
                <View style={{ width: 30 }}></View>
            </View>
            <View style={styles.filter}>
                <Text style={{ paddingRight: 10 }} > Choose size </Text>
                <TouchableOpacity
                    style={!checkM ? styles.sizeFilter : styles.sizeFilterInClick}
                    onPress={() => {
                        if (checkM == true) {
                            setCheckM(false)
                        } else {
                            setCheckM(true)
                        }
                    }}
                >
                    <Text>M</Text>
                </TouchableOpacity>
                <TouchableOpacity
                    style={!checkS ? styles.sizeFilter : styles.sizeFilterInClick}
                    onPress={() => {
                        if (checkS == true) {
                            setCheckS(false)
                        } else {
                            setCheckS(true)
                        }
                    }}
                >
                    <Text>S</Text>
                </TouchableOpacity>
                <TouchableOpacity
                    style={!checkL ? styles.sizeFilter : styles.sizeFilterInClick}
                    onPress={() => {
                        if (checkL == true) {
                            setCheckL(false)
                        } else {
                            setCheckL(true)
                        }
                    }}
                >
                    <Text>L</Text>
                </TouchableOpacity>
                <TouchableOpacity
                    style={!checkXL ? styles.sizeFilter : styles.sizeFilterInClick}
                    onPress={() => {
                        if (checkXL == true) {
                            setCheckXL(false)
                        } else {
                            setCheckXL(true)
                        }
                    }}
                >
                    <Text>XL</Text>
                </TouchableOpacity>
                <TouchableOpacity
                    style={!checkXXL ? styles.sizeFilter : styles.sizeFilterInClick}
                    onPress={() => {
                        if (checkXXL == true) {
                            setCheckXXL(false)
                        } else {
                            setCheckXXL(true)
                        }
                    }}
                >
                    <Text>XXL</Text>
                </TouchableOpacity>
            </View>
            <View style={styles.filter}>
                <Text style={{ paddingRight: 2 }}  > Choose price </Text>
                <TouchableOpacity
                    style={filterPrice == 1 ? styles.red : styles.green}
                    onPress={() => {
                        if (filterPrice == 1) {
                            setFilterPrice(0)
                        }
                        else {
                            setFilterPrice(1)
                        }
                    }}
                >
                    <Text> <AntDesign name="left" size={14} color="black" /> 300K</Text>
                </TouchableOpacity>

                <TouchableOpacity
                    style={filterPrice == 2 ? styles.red : styles.green}
                    onPress={() => {
                        if (filterPrice == 2) {
                            setFilterPrice(0)
                        } else {
                            setFilterPrice(2)
                        }
                    }}
                >
                    <Text>300K-400K</Text>
                </TouchableOpacity>
                <TouchableOpacity
                    style={filterPrice == 3 ? styles.red : styles.green}
                    onPress={() => {
                        if (filterPrice == 3) {
                            setFilterPrice(0)
                        } else {
                            setFilterPrice(3)
                        }
                    }}
                >
                    <Text> <AntDesign name="right" size={14} color="black" /> 400K</Text>
                </TouchableOpacity>
            </View>
            <View style={styles.filter}>
            <TouchableOpacity
                style={styles.button}
                onPress={() => {

                }}
            >
                <Text>START FILTER</Text>
            </TouchableOpacity>
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
                                    <Text style={styles.txtDesc}>
                                        {' '}
                                        Description{' '}
                                    </Text>
                                    <TouchableOpacity
                                        onPress={() => {
                                            navigation.navigate('PRODUCT', {
                                                id: item.id,
                                            })
                                        }}
                                    >
                                        <Text style={styles.ShowDetail}>
                                            SHOW DETAIL
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
    filter: {
        backgroundColor: '#fff',
        flexDirection: 'row',
        padding: 5,

    },

    sizeFilter: {
        padding: 5,
        width: 40,
        height: 30,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#34B089'
    },
    sizeFilterInClick: {
        padding: 5,
        width: 40,
        height: 30,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#ff0000'
    },
    green: {
        padding: 5,
        width: 80,
        height: 30,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#34B089'
    },
    red: {
        padding: 5,
        width: 80,
        height: 30,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#ff0000'
    },
    button:{
        padding: 5,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#34B089'
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
    txtDesc: {},

    ShowDetail: {
        color: '#1a53ff',
    },
})
