import {
    StyleSheet,
    ImageBackground,
    Text,
    TouchableOpacity,
} from 'react-native';
import { View } from 'react-native-web';
export default function BanNerItem({ imageUrl, descipt }) {
    return (
        <TouchableOpacity>
            <ImageBackground
                style={styles.bannerImage}
                source={{ uri: imageUrl }}
            >
                <View style={{
                    flex: 1,
                    flexDirection: 'column',
                    justifyContent: 'center',
                    alignItems: 'center',
                }}>
                    <Text style={styles.text}>{descipt}</Text>
                </View>
            </ImageBackground >
        </TouchableOpacity>
    )
}
const styles = StyleSheet.create({
    bannerImage: {
        width: 300,
        height: 200,
        marginRight: 10,
        borderRadius: 10,
        elevation: 1,
    },
    text: {
        fontSize: 40,
        color: '#34B089',
    }

})
