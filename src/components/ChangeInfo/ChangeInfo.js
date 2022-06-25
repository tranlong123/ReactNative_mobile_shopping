import React, { useState } from 'react'
import {
    View,
    Text,
    TouchableOpacity,
    StyleSheet,
    TextInput,
} from 'react-native'
import { FontAwesome5, Feather } from '@expo/vector-icons'
import { useDispatch, useSelector } from 'react-redux'
import helper from '../../common/helper'
import logger from '../../common/logger'
import { login } from '../../redux/action'


export default function ChangeInfo({ navigation }) {
    const [SeePassWord, setSeePassWord] = useState(true)
    const [iconSeePassWord, setIconSeePassWord] = useState('eye')
    const [SeeRePassWord, setSeeRePassWord] = useState(true)
    const [iconSeeRePassWord, setIconSeeRePassWord] = useState('eye')

    const dispatch = useDispatch()
    const [user, setUser] = useState({
        ...useSelector((state) => state).user,
        password: '',
        rePassword: '',
    })
    const [message, setMessage] = useState('')
    const handleChangeInfo = async () => {
        if (user.password != user.rePassword) {
            setMessage('Password is not match')
            return
        }
        const response = await helper.put(
            'http://localhost:3000/cms/v1/user/' + user.email,
            user,
        )
        setMessage('Your info is updated', JSON.stringify(response))
        handleUpdateLocal(response.data.result)
    }

    const handleUpdateLocal = (user) => {
        dispatch(login(user))
    }

    return (
        <View style={styles.container}>
            <View style={styles.wrapper}>
                <View style={styles.header}>
                    <TouchableOpacity
                        onPress={() => {
                            navigation.navigate('MAIN')
                        }}
                        style={styles.backIcon}
                    >
                        <FontAwesome5
                            name="chevron-left"
                            size={30}
                            color="#34B089"
                        />
                    </TouchableOpacity>
                    <Text style={styles.titleStyle}>User Infomation </Text>
                    <View style={{ width: 20 }}></View>
                </View>
                <View style={styles.body}>
                    <TextInput
                        style={styles.textInput}
                        placeholder="Change your name"
                        autoCapitalize="none"
                        autoFocus={true}
                        value={user.username}
                        onChange={(event) =>
                            setUser((user) => ({
                                ...user,
                                username: event.target.value,
                            }))
                        }
                        underlineColorAndroid="transparent"
                    />
                    <View style={styles.textInput}>
                        <TextInput
                            style={{
                                flex: 1,
                                paddingLeft: 0,
                            }}
                            placeholder="Change password"
                            autoCapitalize="none"
                            secureTextEntry={SeePassWord}
                            value={user.password}
                            onChange={(event) =>
                                setUser((user) => ({
                                    ...user,
                                    password: event.target.value,
                                }))
                            }
                            underlineColorAndroid="transparent"
                        />
                        <TouchableOpacity
                            onPress={() => {
                                if (SeePassWord == true) {
                                    setSeePassWord(false)
                                    setIconSeePassWord('eye-off')
                                } else {
                                    setSeePassWord(true)
                                    setIconSeePassWord('eye')
                                }
                            }}
                        >
                            <Feather name={iconSeePassWord} size={24} color="#3EBA77" style={{ padding: 10 }} />
                        </TouchableOpacity>
                    </View>


                    <View style={styles.textInput}>
                        <TextInput
                            style={{
                                flex: 1,
                                paddingLeft: 0,
                            }}
                            placeholder="Re-enter password"
                            autoCapitalize="none"
                            secureTextEntry={SeeRePassWord}
                            value={user.rePassword}
                            onChange={(event) =>
                                setUser((user) => ({
                                    ...user,
                                    rePassword: event.target.value,
                                }))
                            }
                            underlineColorAndroid="transparent"
                        />
                        <TouchableOpacity
                            onPress={() => {
                                if (SeeRePassWord == true) {
                                    setSeeRePassWord(false)
                                    setIconSeeRePassWord('eye-off')
                                } else {
                                    setSeeRePassWord(true)
                                    setIconSeeRePassWord('eye')
                                }
                            }}
                        >
                            <Feather name={iconSeeRePassWord} size={24} color="#3EBA77" style={{ padding: 10 }} />
                        </TouchableOpacity>
                    </View>
                    {message ? (
                        <Text style={styles.messageCenter}>{message}</Text>
                    ) : (
                        <Text></Text>
                    )}
                    <TouchableOpacity
                        style={styles.signInContainer}
                        onPress={handleChangeInfo}
                    >
                        <Text style={styles.signInTextStyle}>
                            CHANGE YOUR INFOMATION
                        </Text>
                    </TouchableOpacity>
                </View>
            </View>
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
    },
    wrapper: {
        flex: 1,
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
        fontFamily: 'sans-serif',
        color: '#34B089',
        fontSize: 30,
    },
    body: { flex: 10, backgroundColor: '#F6F6F6', justifyContent: 'center' },
    textInput: {
        height: 45,
        flexDirection: 'row',
        marginHorizontal: 20,
        backgroundColor: '#FFFFFF',
        paddingLeft: 20,
        borderRadius: 20,
        marginBottom: 20,
        borderColor: '#2ABB9C',
        borderWidth: 1,
    },
    signInTextStyle: {
        color: '#FFF',

        fontWeight: '600',
        paddingHorizontal: 20,
    },
    signInContainer: {
        marginHorizontal: 20,
        backgroundColor: '#2ABB9C',
        borderRadius: 20,
        height: 45,
        alignItems: 'center',
        justifyContent: 'center',
        alignSelf: 'stretch',
    },
    messageCenter: {
        textAlign: 'center',
        color: 'red',
        fontSize: 15,
        paddingBottom: 8,
    },
})
