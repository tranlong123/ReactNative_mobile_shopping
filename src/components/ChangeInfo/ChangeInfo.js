import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';


export default function ChangeInfo({ navigation }) {
    return (
        <View style={{ flex: 1, backgroundColor: 'red' }}>
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
