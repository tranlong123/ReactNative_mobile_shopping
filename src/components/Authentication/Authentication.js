import React, { Component } from 'react';
import {
    View, Text, TouchableOpacity,
    StyleSheet,
    Dimensions,
    TextInput,
} from 'react-native';
import { FontAwesome5 } from '@expo/vector-icons';
import axios from 'axios';
import register from '../../api/register';

const deviceWidth = Dimensions.get('screen').width;


export default class Authentication extends Component {

    constructor(props, navigation) {
        super(props);
        this.state = {
            isSignIn: true,
            email: '', password: '', check: false,
            upUsername: '', upEmail: '', upPassword: '', rePassword: ''
        }
        this.gotoMain = this.gotoMain.bind(this)
        this.registerUser = this.registerUser.bind(this)
    }

    isFalse() {
        this.setState({ check: false })
    }

    isTrue() {
        this.setState({ check: true })
    }

    signIn() {
        this.setState({ isSignIn: true })
    }

    signUp() {
        this.setState({ isSignIn: false })
    }

    handleSignIn() {
        console.log(this.state.email, this.state.password)
        axios.post('http://localhost:3000/login', this.state)
            .then((res) => this.gotoMain(res))

    }

    gotoMain(res) {
        if (res.data.msg == 'Login success') {
            this.props.navigation.navigate('MAIN')
            this.isFalse()
        } else {
            this.isTrue()
        }
    }

    registerUser(){
        const { upUsername, upEmail, upPassword}= this.state;
        register (upUsername, upEmail, upPassword)
        .then(res=>{
            console.log(res)
        })
    }

    render() {
        const signInJSX = (
            <View>
                <TextInput style={styles.InputStyle} placeholder="Enter your email"
                    onChange={(event) => {
                        this.setState({ email: event.target.value })
                    }}
                />
                <TextInput secureTextEntry style={styles.InputStyle} placeholder="Enter your password"
                    onChange={(event) => {
                        this.setState({ password: event.target.value })
                    }}
                />
                <TouchableOpacity
                    onPress={() => {
                        this.handleSignIn()
                    }
                    }
                    style={styles.ButtonStyle}
                >
                    <Text style={styles.ButtonText}>SIGN IN NOW</Text>
                </TouchableOpacity>
                <Text style={!this.state.check ? styles.trueCheck : styles.falseCheck}>email or password incorrect</Text>
            </View>
        );
        const signUpJSX = (
            <View>
                <TextInput
                    style={styles.InputStyle}
                    placeholder="Enter your username"
                    onChange={(event) => {
                        this.setState({ upUsername: event.target.value })
                    }}                
                />
                <TextInput
                    style={styles.InputStyle}
                    placeholder="Enter your email"
                    onChange={(event) => {
                        this.setState({ upEmail: event.target.value })
                    }}
                />
                <TextInput
                    secureTextEntry
                    style={styles.InputStyle}
                    placeholder="Enter your password"
                    onChange={(event) => {
                        this.setState({ upPassword: event.target.value })
                    }}
                />
                <TextInput
                    secureTextEntry
                    style={styles.InputStyle}
                    placeholder="Re-enter your password"
                    onChange={(event) => {
                        this.setState({ rePassword: event.target.value })
                    }}
                />
                <TouchableOpacity
                    style={styles.ButtonStyle}
                    onPress={this.registerUser}
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
    },
    falseCheck: {
        color: 'red',
        fontSize: 15
    },
    trueCheck: {
        color: '#3EBA77',
    }
})
