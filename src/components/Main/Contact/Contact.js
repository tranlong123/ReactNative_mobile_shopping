import React, { useState, useEffect } from 'react'
import {
    StyleSheet,
    View,
    Text,
    StatusBar,
    TouchableOpacity,
} from 'react-native'
import { useDispatch, useSelector } from 'react-redux'
import helper from '../../../common/helper'
import logger from '../../../common/logger'

import FontAwesome from 'react-native-vector-icons/FontAwesome'
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
import { logout } from '../../../redux/action'

const ProfileItem = ({ icon, name }) => (
    <View style={styles.itemContainer}>
        <MaterialCommunityIcons name={icon} size={26} color="#34B089" />
        <Text style={[styles.itemText, { marginLeft: icon ? 20 : 0 }]}>
            {name}
        </Text>
        <FontAwesome name="angle-right" size={26} color="#34B089" />
    </View>
)

export default function Contact({ navigation }) {
    const dispatch = useDispatch()

    // const [UserInfo, setUserInfo] = useState([])
    // useEffect(() => {
    //     fetch('http://localhost:4040/api/v1/user/info')
    //         .then((res) => res.json())
    //         .then((data) => setUserInfo(data.data))
    // }, [])

    const cart = useSelector((state) => state.cart)
    const orderDetails = cart.orderDetails

    const handleLogout = async () => {
        await handleSaveCart()
        await helper.post('http://localhost:3000/logout')
        navigation.navigate('AUTHENTICATION')
        dispatch(logout())
    }

    async function handleSaveCart() {
        // pre-processing data
        const cartId = cart.id
        const orders = orderDetails.map((orderDetail) => ({
            quantityOrdered: orderDetail.quantityOrdered,
            productId: orderDetail.product.id,
        }))
        logger.log(cartId, orders)

        // call api
        const saveResult = await helper.put(
            'http://localhost:3000/cms/v1/order/' + cartId,
            { status: 'Cart', orders },
        )
        logger.log(saveResult)
    }

    return (
        <View style={styles.screenContainer}>
            <StatusBar barStyle="light-content" />

            <View style={styles.bodyContainer}>
                <View style={styles.userContainer}>
                    <View style={styles.avatarContainer}>
                        <MaterialIcons name="person" size={26} color="#fff" />
                    </View>
                    <View style={styles.textContainer}>
                        <Text style={styles.nameText}>
                            {useSelector((state) => state).user.username}
                        </Text>
                    </View>
                </View>

                {/*  */}
                <View style={styles.divider} />

                <TouchableOpacity
                    onPress={() => {
                        navigation.navigate('CHANGEINFO')
                    }}
                >
                    <ProfileItem
                        icon="format-list-bulleted"
                        name="S???a th??ng tin"
                    />
                </TouchableOpacity>

                <TouchableOpacity
                    onPress={() => {
                        navigation.navigate('ORDERHISTORY')
                    }}
                >
                    <ProfileItem icon="cart-outline" name="????n h??ng ???? mua" />
                </TouchableOpacity>

                {/* <TouchableOpacity>
                    <ProfileItem icon="eye-outline" name="S???n ph???m ???? xem" />
                </TouchableOpacity>

                <TouchableOpacity>
                    <ProfileItem
                        icon="heart-outline"
                        name="S???n ph???m y??u th??ch"
                    />
                </TouchableOpacity>

                <TouchableOpacity>
                    <ProfileItem
                        icon="bookmark-outline"
                        name="S???n ph???m mua sau"
                    />
                </TouchableOpacity> */}

                {/* <TouchableOpacity>
                    <ProfileItem icon="star-outline" name="S???n ph???m ????nh gi??" />
                </TouchableOpacity>

                <View style={styles.divider} />
                <TouchableOpacity>
                    <ProfileItem name="??u ????i cho ch??? th??? ng??n h??ng" />
                </TouchableOpacity>

                <TouchableOpacity>
                    <ProfileItem name="C??i ?????t" />
                </TouchableOpacity>
                <View style={styles.divider} /> */}
                <TouchableOpacity>
                    <ProfileItem icon="headphones" name="H??? tr???" />
                </TouchableOpacity>

                <TouchableOpacity onPress={handleLogout}>
                    <ProfileItem icon="logout" name="????ng xu???t" />
                </TouchableOpacity>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    screenContainer: {
        flex: 1,
    },
    bodyContainer: {
        flex: 1,
        backgroundColor: '#ededed',
    },
    //
    userContainer: {
        backgroundColor: '#fff',
        flexDirection: 'row',
        paddingHorizontal: 20,
        paddingVertical: 22,
        alignItems: 'center',
    },
    avatarContainer: {
        width: 60,
        height: 60,
        borderRadius: 30,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#34B089',
    },
    textContainer: {
        flex: 1,
        marginLeft: 20,
    },

    nameText: {
        color: '#34B089',
        fontSize: 24,
        fontWeight: '500',
    },
    //
    itemContainer: {
        backgroundColor: '#fff',
        flexDirection: 'row',
        paddingHorizontal: 20,
        paddingVertical: 10,
        alignItems: 'center',
    },
    itemText: {
        flex: 1,
        color: '#34B089',
    },
    //
    divider: {
        height: 10,
    },
})
