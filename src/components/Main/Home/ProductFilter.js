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
import { AntDesign } from '@expo/vector-icons'

export default function ProductFilter({ navigation }) {
    const [filterPrice, setFilterPrice] = useState(0)
    // 0:ko chọn ,1:<300,2:300-400,3:>400

    const [checkM, setCheckM] = useState(false)
    const [checkS, setCheckS] = useState(false)
    const [checkL, setCheckL] = useState(false)
    const [checkXL, setCheckXL] = useState(false)
    const [checkXXL, setCheckXXL] = useState(false)

    const [checkMan, setCheckMan] = useState(false)
    const [checkWoman, setCheckWoman] = useState(false)

    const [checkSort, setCheckSort] = useState(0)
    // 0:ko chọn, 1:thấp đến cao, 2:cao đến thấp

    // Load data
    const [products, setProducts] = useState([])
    useEffect(() => {
        fetch('http://localhost:3000/api/v1/product')
            .then((res) => res.json())
            .then((data) => setProducts(data.data))
    }, [])

    useEffect(() => {
        handleSort()
    }, [checkSort])

    const handleFilter = async () => {
        console.log('Handle filter')
        const size = getSizes()
        const productLine = getProductLine()
        const { priceFrom, priceTo } = getPrice()
        console.log(
            'productLine',
            productLine,
            'size',
            size,
            'priceFrom',
            priceFrom,
            'priceTo',
            priceTo,
        )
        console.log(products)

        const response = await helper.get(
            `http://localhost:3000/api/v1/product?productLine=${productLine}&size=${size}&priceFrom=${priceFrom}&priceTo=${priceTo}`,
        )
        setProducts([...response.data.data])
        handleSort()
    }

    const getSizes = () => {
        const sizes = []
        if (checkM) sizes.push('M')
        if (checkS) sizes.push('S')
        if (checkL) sizes.push('L')
        if (checkXL) sizes.push('XL')
        if (checkXXL) sizes.push('XXL')

        return sizes.join(',')
    }

    const getProductLine = () => {
        let productLine = null
        if (checkMan) {
            if (checkWoman) productLine = null
            else productLine = 1
        } else {
            if (checkWoman) productLine = 2
            else productLine = null
        }
        return productLine
    }

    const getPrice = () => {
        let priceFrom = 0
        let priceTo = 99999999
        switch (filterPrice) {
            case 1: {
                priceTo = 300000 - 1
                break
            }
            case 2: {
                priceFrom = 300000
                priceTo = 400000
                break
            }
            case 3: {
                priceFrom = 400000 + 1
                break
            }
            default:
                break
        }

        return { priceFrom, priceTo }
    }

    const handleSort = () => {
        switch (checkSort) {
            case 0: {
                // id từ thấp đến cao
                setProducts((products) => {
                    return [
                        ...products.sort(function (a, b) {
                            return a.id - b.id
                        }),
                    ]
                })
                break
            }
            case 1: {
                // giá từ thấp đến cao
                setProducts((products) => {
                    return [
                        ...products.sort(function (a, b) {
                            return a.price - b.price
                        }),
                    ]
                })
                break
            }
            case 2: {
                // giá từ cao đến thấp
                setProducts((products) => {
                    return [
                        ...products.sort(function (a, b) {
                            return b.price - a.price
                        }),
                    ]
                })
                break
            }
            default:
                break
        }
    }

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
                <Text style={{ width: 90 }}> Choose size </Text>
                <TouchableOpacity
                    style={
                        !checkM ? styles.sizeFilter : styles.sizeFilterInClick
                    }
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
                    style={
                        !checkS ? styles.sizeFilter : styles.sizeFilterInClick
                    }
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
                    style={
                        !checkL ? styles.sizeFilter : styles.sizeFilterInClick
                    }
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
                    style={
                        !checkXL ? styles.sizeFilter : styles.sizeFilterInClick
                    }
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
                    style={
                        !checkXXL ? styles.sizeFilter : styles.sizeFilterInClick
                    }
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
                <Text style={{ width: 90 }}> Choose price </Text>
                <TouchableOpacity
                    style={filterPrice == 1 ? styles.red : styles.green}
                    onPress={() => {
                        if (filterPrice == 1) {
                            setFilterPrice(0)
                        } else {
                            setFilterPrice(1)
                        }
                    }}
                >
                    <Text>
                        {' '}
                        <AntDesign name="left" size={14} color="black" /> 300K
                    </Text>
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
                    <Text>
                        {' '}
                        <AntDesign name="right" size={14} color="black" /> 400K
                    </Text>
                </TouchableOpacity>
            </View>

            <View style={styles.filter}>
                <Text style={{ width: 90 }}> User </Text>
                <TouchableOpacity
                    style={checkMan ? styles.userOnclick : styles.user}
                    onPress={() => {
                        if (checkMan == true) {
                            setCheckMan(false)
                        } else {
                            setCheckMan(true)
                        }
                    }}
                >
                    <Text>Man</Text>
                </TouchableOpacity>
                <TouchableOpacity
                    style={checkWoman ? styles.userOnclick : styles.user}
                    onPress={() => {
                        if (checkWoman == true) {
                            setCheckWoman(false)
                        } else {
                            setCheckWoman(true)
                        }
                    }}
                >
                    <Text>Woman</Text>
                </TouchableOpacity>
            </View>

            <View style={styles.filter}>
                <Text style={{ width: 90 }}> Sort by price </Text>
                <TouchableOpacity
                    style={
                        checkSort == 1 ? styles.buttonOnClick : styles.button
                    }
                    onPress={() => {
                        if (checkSort == 1) {
                            setCheckSort(0)
                        } else {
                            setCheckSort(1)
                        }
                    }}
                >
                    <Text>Low To High</Text>
                    <AntDesign name="arrowup" size={16} color="black" />
                </TouchableOpacity>
                <TouchableOpacity
                    style={
                        checkSort == 2 ? styles.buttonOnClick : styles.button
                    }
                    onPress={() => {
                        if (checkSort == 2) {
                            setCheckSort(0)
                        } else {
                            setCheckSort(2)
                        }
                    }}
                >
                    <Text>High To Low</Text>
                    <AntDesign name="arrowdown" size={16} color="black" />
                </TouchableOpacity>
            </View>

            <View style={styles.filter}>
                <TouchableOpacity style={styles.button} onPress={handleFilter}>
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
        backgroundColor: '#34B089',
    },
    sizeFilterInClick: {
        padding: 5,
        width: 40,
        height: 30,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#ff0000',
    },
    green: {
        padding: 5,
        width: 80,
        height: 30,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#34B089',
    },
    red: {
        padding: 5,
        width: 80,
        height: 30,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#ff0000',
    },
    button: {
        padding: 5,
        justifyContent: 'center',
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#34B089',
    },
    buttonOnClick: {
        padding: 5,
        justifyContent: 'center',
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#ff0000',
    },
    user: {
        width: 60,
        height: 30,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#34B089',
    },
    userOnclick: {
        width: 60,
        height: 30,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#ff0000',
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
