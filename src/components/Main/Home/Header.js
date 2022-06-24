import {
  StyleSheet,
  View,
  TextInput,
  TouchableOpacity
} from 'react-native'
import { Entypo } from '@expo/vector-icons';

export default function Header({navigation}) {
  return (
    <>
      <View style={styles.headerContainer}>
        <TextInput
          style={styles.inputContainer}
          placeholder="What do you want to buy?"
        />
        <TouchableOpacity
          style={styles.Shop_bag_Container}
          onPress={() => {
            navigation.navigate('PRODUCTFILTE')
        }}
        >
          <Entypo name="grid" size={24} color="#fff" />
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
    backgroundColor: '#fff',
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
  },
  inputText: {
    color: '#999999',
    fontSize: 16,
    marginLeft: 8,
    fontWeight: '100%',
  },
  Shop_bag_Container: {
    paddingHorizontal: 20,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 10,
  },
})