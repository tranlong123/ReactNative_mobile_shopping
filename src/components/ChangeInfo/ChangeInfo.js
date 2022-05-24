import React from 'react';
import {
    View, Text, TouchableOpacity,
    StyleSheet, TextInput,
} from 'react-native';
import { FontAwesome5 } from '@expo/vector-icons';

export default function ChangeInfo({ navigation }) {
    return (
        <View style={styles.container}>
            <View style={styles.wrapper}>
                <View style={styles.header}>
                    <TouchableOpacity
                        onPress={() => {
                            navigation.navigate('MAIN');
                        }}
                        style={styles.backIcon}
                    >
                        <FontAwesome5 name="chevron-left" size={30} color="#34B089" />
                    </TouchableOpacity>
                    <Text style={styles.titleStyle} >User Infomation </Text>
                    <View style={{ width: 20 }} ></View>
                </View>
                <View style={styles.body}>
                    <TextInput
                        style={styles.textInput}
                        placeholder="Enter your name"
                        autoCapitalize="none"
                        // value={txtName}
                        underlineColorAndroid="transparent"
                    />
                    <TextInput
                        style={styles.textInput}
                        placeholder="Enter your address"
                        autoCapitalize="none"
                        // value={txtAddress}
                        underlineColorAndroid="transparent"
                    />
                    <TextInput
                        style={styles.textInput}
                        placeholder="Enter your phone number"
                        autoCapitalize="none"
                        // value={txtPhone}
                        underlineColorAndroid="transparent"
                    />
                    <TouchableOpacity style={styles.signInContainer}>
                        <Text style={styles.signInTextStyle}>CHANGE YOUR INFOMATION</Text>
                    </TouchableOpacity>
                </View>
            </View>
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
        fontFamily: 'roboto',
        color: '#34B089',
        fontSize: 30,
    },
    body: { flex: 10, backgroundColor: '#F6F6F6', justifyContent: 'center' },
    textInput: {
        height: 45,
        marginHorizontal: 20,
        backgroundColor: '#FFFFFF',
        fontFamily: 'Avenir',
        paddingLeft: 20,
        borderRadius: 20,
        marginBottom: 20,
        borderColor: '#2ABB9C',
        borderWidth: 1
    },
    signInTextStyle: {
        color: '#FFF', fontFamily: 'Avenir', fontWeight: '600', paddingHorizontal: 20
    },
    signInContainer: {
        marginHorizontal: 20,
        backgroundColor: '#2ABB9C',
        borderRadius: 20,
        height: 45,
        alignItems: 'center',
        justifyContent: 'center',
        alignSelf: 'stretch'
    },
})



