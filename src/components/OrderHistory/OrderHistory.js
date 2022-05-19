/* eslint-disable no-undef */
import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';


// eslint-disable-next-line no-unused-vars
export default function OrderHistory({ navigation }) {
    return (
        <View style={{ flex: 1, backgroundColor: 'blue' }}>
            <TouchableOpacity
                onPress={() => {
                    navigation.navigate('MAIN');
                }}
            >
                <Text>
                    goto Main
                </Text>
            </TouchableOpacity>

        </View>
    );
};
