import { StyleSheet, View, Text, TouchableOpacity } from 'react-native'
import { FontAwesome5 } from '@expo/vector-icons'
import logger from '../../../common/logger'
export default function Header({ navigation }) {
    return (
        <>
            <View style={styles.headerContainer}>
                {/* <TextInput
                style={styles.inputContainer}
                placeholder="What do you want to buy?"
                /> */}
                <FontAwesome5
                    name="store"
                    size={24}
                    color="#fff"
                    style={styles.icon}
                />
                <View style={styles.inputContainer}>
                    <Text
                        style={{
                            color: '#fff',
                            fontSize: 24,
                            fontFamily: 'sans-serif',
                        }}
                    >
                        Clothing Store
                    </Text>
                </View>

                <TouchableOpacity
                    style={styles.shopIcon}
                    onPress={() => {
                        navigation.navigate('PRODUCTFILTE')
                    }}
                >
                    <FontAwesome5 name="list" size={24} color="#fff" />
                </TouchableOpacity>
            </View>
        </>
    )
}
const styles = StyleSheet.create({
    headerContainer: {
        flexDirection: 'row',
        paddingTop: 10,
        backgroundColor: '#34B089',
    },
    inputContainer: {
        height: 30,
        marginLeft: 10,
        marginBottom: 8,
        paddingLeft: 10,
        borderRadius: 5,
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
    },

    icon: {
        alignItems: 'center',
        justifyContent: 'center',
        marginLeft: 10,
    },

    shopIcon: {
        paddingHorizontal: 20,
        alignItems: 'center',
        justifyContent: 'center',
        marginBottom: 10,
    },
})
