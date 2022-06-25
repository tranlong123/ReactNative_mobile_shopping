import {
    StyleSheet,
    ImageBackground,
    Text,
    TouchableOpacity,
    View,
} from 'react-native'
import logger from '../../../common/logger'
export default function BanNerItem({ navigation, imageUrl, id }) {
    return (
        <TouchableOpacity
            onPress={() => {
                navigation.navigate('LISTCATEITEM', { id: id })
                logger.log(id)
            }}
        >
            <ImageBackground
                style={styles.bannerImage}
                source={{ uri: imageUrl }}
            >
                <View
                    style={{
                        flex: 1,
                        flexDirection: 'column',
                        justifyContent: 'center',
                        alignItems: 'center',
                    }}
                ></View>
            </ImageBackground>
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
        shadowColor: 'black',
        shadowOffset: { width: 2, height: 4 },
        shadowOpacity: 0.2,
        shadowRadius: 3,
    },
})
