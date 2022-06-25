import React, { useState, useEffect, useRef } from 'react'
import {
    View,
    Text,
    TouchableOpacity,
    StyleSheet,
    Dimensions,
    TextInput,
} from 'react-native'
import { FontAwesome5 } from '@expo/vector-icons'
import { login, setCart } from '../../redux/action'
import { useDispatch, useSelector } from 'react-redux'
import axios from 'axios'
import helper from '../../common/helper'
import logger from '../../common/logger'
import register from '../../common/register'

const deviceWidth = Dimensions.get('screen').width

function Test({ navigation }) {
    const dispatch = useDispatch()

    const [isSignIn, setIsSignIn] = useState(true)
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [check, setCheck] = useState(false)
    const [upUsername, setUpUsername] = useState('')
    const [upEmail, setUpEmail] = useState('')
    const [upPassword, setUpPassword] = useState('')
    const [rePassword, setRePassword] = useState('')
    const [checkPw, setCheckPw] = useState(false)
    const [message, setMessage] = useState('')

    const signIn = () => {
        setIsSignIn(true)
        setCheckPw(false)
        setMessage('')
    }

    const signUp = () => {
        setIsSignIn(false)
        setMessage('')
    }

    const isFalse = () => {
        setCheck(false)
    }

    const isTrue = () => {
        setCheck(true)
    }

    const handleLogin = async () => {
        await checkLogin()
    }
    const getCart = async () => {
        const response = await helper.get(
            'http://localhost:3000/cms/v1/order/cart',
        )
        dispatch(setCart(response.data))
    }

    const checkLogin = async () => {
        const loginResponse = await helper.post('http://localhost:3000/login', {
            email,
            password,
        })
        gotoMain(loginResponse)
    }

    const gotoMain = async (res) => {
        if (res.data.msg == 'Login success') {
            dispatch(login(res.data.data))
            await getCart()
            navigation.navigate('MAIN')
            isFalse()
            setMessage('')
        } else {
            setMessage('Tài khoản hoặc mật khẩu không chính xác')
            isTrue()
        }
    }

    const registerUser = () => {
        if (!upUsername) {
            setMessage('Vui lòng nhập tên')
        } else if (!upEmail) {
            setMessage('Vui lòng nhập email')
        } else if (!upPassword || !rePassword) {
            setMessage('Vui lòng nhập mật khẩu')
        } else if (upPassword == rePassword) {
            register(upEmail, upUsername, upPassword)
            setMessage('Đăng Ký Thành Công')
        } else {
            setMessage('Mật khẩu nhập lại không khớp')
        }
    }

    const signInJSX = (
        <View>
            <TextInput style={{ display: 'none' }} />
            <TextInput
                style={styles.InputStyle}
                placeholder="Enter your email"
                onChange={(event) => {
                    setEmail(event.target.value)
                }}
            />
            <TextInput
                secureTextEntry
                style={styles.InputStyle}
                placeholder="Enter your password"
                onChange={(event) => {
                    setPassword(event.target.value)
                }}
            />
            <Text style={styles.messageCenter}>{message}</Text>
            <TouchableOpacity
                onPress={() => {
                    handleLogin()
                }}
                style={styles.ButtonStyle}
            >
                <Text style={styles.ButtonText}>SIGN IN NOW</Text>
            </TouchableOpacity>
            {/* <Text style={!check ? styles.trueCheck : styles.falseCheck}>
                email or password incorrect
            </Text> */}
        </View>
    )
    const signUpJSX = (
        <View>
            <TextInput
                style={styles.InputStyle}
                placeholder="Enter your name"
                onChange={(event) => {
                    setUpUsername(event.target.value)
                }}
            />
            <TextInput
                style={styles.InputStyle}
                placeholder="Enter your email"
                onChange={(event) => {
                    setUpEmail(event.target.value)
                }}
            />
            <TextInput
                secureTextEntry
                style={styles.InputStyle}
                placeholder="Enter your password"
                onChange={(event) => {
                    setUpPassword(event.target.value)
                }}
            />
            <TextInput
                secureTextEntry
                style={styles.InputStyle}
                placeholder="Re-enter your password"
                onChange={(event) => {
                    setRePassword(event.target.value)
                }}
            />
            <Text style={styles.messageCenter}>{message}</Text>
            <TouchableOpacity style={styles.ButtonStyle} onPress={registerUser}>
                <Text style={styles.ButtonText}>SIGN UP NOW</Text>
            </TouchableOpacity>
        </View>
    )

    const mainJSX = isSignIn ? signInJSX : signUpJSX

    return (
        <View style={styles.container}>
            <View style={styles.iconStyle}>
                <FontAwesome5 name="shopify" size={90} color="#fff" />
            </View>

            {mainJSX}

            <View style={styles.controlStyle}>
                <TouchableOpacity style={styles.SignInStyle} onPress={signIn}>
                    <Text
                        style={
                            isSignIn ? styles.activeStyle : styles.inactiveStyle
                        }
                    >
                        SIGN IN
                    </Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.SignUpStyle} onPress={signUp}>
                    <Text
                        style={
                            !isSignIn
                                ? styles.activeStyle
                                : styles.inactiveStyle
                        }
                    >
                        SIGN UP
                    </Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#3EBA77',
        padding: 20,
        justifyContent: 'space-between',
        alignItems: 'center',
    },

    iconStyle: {
        paddingTop: 10,
    },

    controlStyle: {
        flexDirection: 'row',
        width: deviceWidth * 0.7,
        marginBottom: 20,
    },

    activeStyle: {
        fontSize: 20,
        margin: 8,
        color: '#3EBA77',
    },
    inactiveStyle: {
        fontSize: 20,
        margin: 8,
        color: '#D7D7D7',
    },
    messageCenter: {
        textAlign: 'center',
        color: '#fdcb6e',
        fontSize: 15,
        paddingBottom: 8,
    },
    SignInStyle: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        borderBottomLeftRadius: 20,
        borderTopLeftRadius: 20,
        marginRight: 1,
    },
    SignUpStyle: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        borderBottomRightRadius: 20,
        borderTopRightRadius: 20,
        marginLeft: 1,
    },
    InputStyle: {
        width: deviceWidth * 0.8,
        height: 50,
        backgroundColor: '#fff',
        marginBottom: 10,
        borderRadius: 20,
        paddingLeft: 30,
    },
    ButtonStyle: {
        width: deviceWidth * 0.8,
        height: 50,
        borderRadius: 20,
        borderWidth: 1,
        borderColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
    ButtonText: {
        fontFamily: 'sans-serif',
        color: '#fff',
        fontWeight: '400',
    },
    falseCheck: {
        color: 'red',
        fontSize: 15,
    },
    trueCheck: {
        color: '#3EBA77',
    },
})

export default Test
