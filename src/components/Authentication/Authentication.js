import React, { useState, useEffect } from 'react'
import {
    View, Text, TouchableOpacity,
    StyleSheet,
    Dimensions,
    TextInput,
} from 'react-native';
import { FontAwesome5 } from '@expo/vector-icons';
import { login, setCart } from '../../redux/action';
import { useDispatch, useSelector } from 'react-redux'
import axios from 'axios'
import helper from '../../api/helper';

const deviceWidth = Dimensions.get('screen').width;

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

    const signIn = () => {
        setIsSignIn(true)
    }

    const signUp = () => {
        setIsSignIn(false)
    }

    const isFalse = () => {
        setCheck(false)
    }

    const isTrue = () => {
        setCheck(true)
    }

    const handleLogin = async () => {
        await checkLogin()
        await getCart()
    }
    const getCart = async () => {
        const response = await helper.get(
            'http://localhost:3000/cms/v1/order/cart',
        )
        dispatch(setCart(response.data))
    }

    const checkLogin = async () => {
        const loginResponse = await helper.post(
            'http://localhost:3000/login',
            {email,password},
        )
        gotoMain(loginResponse)
    }

    const gotoMain = (res) => {
        if (res.data.msg == 'Login success') {
            dispatch(login(res.data.data))
            navigation.navigate('MAIN')
            isFalse()
        } else {
            isTrue()
        }
    }

    const handleSignIn = () => {
        axios.post('http://localhost:3000/login',{email,password})
            .then((res) =>gotoMain(res))
        getCart()
    }

    const registerUser = () => {
        // const { upUsername, upEmail, upPassword } = { upUsername, upEmail, upPassword }
        register(upUsername, upEmail, upPassword)
            .then(res => {
                console.log(res)
            })
    }

    const signInJSX = (
        <View>
            <TextInput style={styles.InputStyle} placeholder="Enter your email"
                onChange={(event) => {
                    setEmail(event.target.value)
                }}
            />
            <TextInput secureTextEntry style={styles.InputStyle} placeholder="Enter your password"
                onChange={(event) => {
                    setPassword(event.target.value)
                }}
            />
            <TouchableOpacity
                onPress={() => {
                    handleLogin()
                }}
                style={styles.ButtonStyle}
            >
                <Text style={styles.ButtonText}>SIGN IN NOW</Text>
            </TouchableOpacity>
            <Text style={!check ? styles.trueCheck : styles.falseCheck}>email or password incorrect</Text>
        </View>
    );
    const signUpJSX = (
        <View>
            <TextInput
                style={styles.InputStyle}
                placeholder="Enter your username"
                onChange={(event) => {
                    setUpUsername(event.target.value)
                }}
            />
            <TextInput
                style={styles.InputStyle}
                placeholder="Enter your email"
                onChange={(event) => {
                    setUpEmail({ upEmail: event.target.value })
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
            <TouchableOpacity
                style={styles.ButtonStyle}
                onPress={registerUser}
            >
                <Text style={styles.ButtonText}>SIGN UP NOW</Text>
            </TouchableOpacity>
        </View>
    );


    const mainJSX = isSignIn ? signInJSX : signUpJSX;

    return (
        <View style={styles.container}>
            <View style={styles.iconStyle} >
                <FontAwesome5 name="shopify" size={90} color="#fff" />
            </View>

            {mainJSX}

            <View style={styles.controlStyle}>
                <TouchableOpacity
                    style={styles.SignInStyle}
                    onPress={signIn}
                >
                    <Text style={isSignIn ? styles.activeStyle : styles.inactiveStyle}>SIGN IN</Text>
                </TouchableOpacity>
                <TouchableOpacity
                    style={styles.SignUpStyle}
                    onPress={signUp}
                >
                    <Text style={!isSignIn ? styles.activeStyle : styles.inactiveStyle}>SIGN UP</Text>
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
        color: '#D7D7D7'
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
        fontFamily: 'roboto',
        color: '#fff',
        fontWeight: '400',
    },
    falseCheck: {
        color: 'red',
        fontSize: 15
    },
    trueCheck: {
        color: '#3EBA77',
    }
})

export default Test
