import React, { Component } from 'react';
import {
    View, Text, TouchableOpacity,
    StyleSheet, Dimensions, TextInput,
} from 'react-native';
import { FontAwesome5 } from '@expo/vector-icons';

const deviceWidth = Dimensions.get('window').width;


export default class Authentication extends Component {


    signIn() {
        this.setState({ isSignIn: true })
    }

    signUp() {
        this.setState({ isSignIn: false })
    }

    constructor(props, navigation) {
        super(props);
        this.state = { isSignIn: true }
        this.gotoMain = this.gotoMain.bind(this)
    }

    gotoMain() {
        this.props.navigation.navigate('MAIN')
    }

    render() {
        const signInJSX = (
            <View>
                <TextInput style={styles.InputStyle} placeholder="Enter your email" />
                <TextInput secureTextEntry style={styles.InputStyle} placeholder="Enter your password" />
                <TouchableOpacity
                    onPress={this.gotoMain}
                    style={styles.ButtonStyle}
                >
                    <Text style={styles.ButtonText}>SIGN IN NOW</Text>
                </TouchableOpacity>
            </View>
        );
        const signUpJSX = (
            <View>
                <TextInput style={styles.InputStyle} placeholder="Enter your name" />
                <TextInput style={styles.InputStyle} placeholder="Enter your email" />
                <TextInput secureTextEntry style={styles.InputStyle} placeholder="Enter your password" />
                <TextInput secureTextEntry style={styles.InputStyle} placeholder="Re-enter your password" />
                <TouchableOpacity
                    style={styles.ButtonStyle}
                >
                    <Text style={styles.ButtonText}>SIGN UP NOW</Text>
                </TouchableOpacity>
            </View>
        );

        const { isSignIn } = this.state;
        const mainJSX = this.state.isSignIn ? signInJSX : signUpJSX;

        return (
            <View style={styles.container}>

                <View style={styles.iconStyle} >
                    <FontAwesome5 name="shopify" size={90} color="#fff" />
                </View>

                {mainJSX}

                <View style={styles.controlStyle}>
                    <TouchableOpacity
                        style={styles.SignInStyle}
                        onPress={this.signIn.bind(this)}
                    >
                        <Text style={isSignIn ? styles.activeStyle : styles.inactiveStyle}>SIGN IN</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        style={styles.SignUpStyle}
                        onPress={this.signUp.bind(this)}
                    >
                        <Text style={!isSignIn ? styles.activeStyle : styles.inactiveStyle}>SIGN UP</Text>
                    </TouchableOpacity>
                </View>

            </View>


        );
    };
};


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
    }
})
