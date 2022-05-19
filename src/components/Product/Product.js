import React from 'react';
import {
    View, Text, TouchableOpacity,
    StyleSheet, ScrollView, Image, Button,
} from 'react-native';
import { FontAwesome5 } from '@expo/vector-icons';

export default function Product({ navigation, ProName, ProPhoto, ProPrice, ProDescript }) {
    return (
        <View style={styles.container}>
            <View style={styles.swapper} >
                <View style={styles.header}>
                    <TouchableOpacity
                        onPress={() => {
                            navigation.navigate('LISTPRODUCT');
                        }}
                        style={styles.backIcon}
                    >
                        <FontAwesome5 name="chevron-left" size={30} color="#34B089" />
                    </TouchableOpacity>
                    <Text style={styles.titleStyle} >Product</Text>
                    <TouchableOpacity
                        onPress={() => {
                            navigation.navigate('MAIN');
                        }}
                        style={styles.backIcon}
                    >
                        <FontAwesome5 name="home" size={30} color="#34B089" />
                    </TouchableOpacity>
                </View>
                <ScrollView horizontal={true} style={styles.ImageList} >
                        <Image
                            style={styles.ProductImage}
                            source={{ uri: 'https://cdn.tokyolife.com.vn/forlife/media/catalog/product/cache/61a8c7eb4804248abfa4aef0c8bbd396/i/7/i733-060e_1.jpg' }}

                        />
                        <Image
                            style={styles.ProductImage}
                            source={{ uri: 'https://cdn.tokyolife.com.vn/forlife/media/catalog/product/cache/61a8c7eb4804248abfa4aef0c8bbd396/_/o/_o_polo_nam_c_c_i7pol505i_ghi_m_290000_5_5.jpg' }}

                        />
                        <Image
                            style={styles.ProductImage}
                            source={{ uri: 'https://cdn.tokyolife.com.vn/forlife/media/catalog/product/cache/61a8c7eb4804248abfa4aef0c8bbd396/1/2/12_11_.jpg' }}

                        />
                        <Image
                            style={styles.ProductImage}
                            source={{ uri: 'https://cdn.tokyolife.com.vn/forlife/media/catalog/product/cache/61a8c7eb4804248abfa4aef0c8bbd396/_/o/_o_polo_nam_c_c_c_ch_n_d_ng_m_i7pol501g_en_290_000.jpg_2__1_1.jpg' }}

                        />
                </ScrollView>
                <Text style={styles.ProductName}>Áo Polo I7POL004K</Text>
                <Text style={styles.ProductPrice}>450000 VND</Text>
                <Text style={styles.ProductDesc}>SUNSTOP UV MASTER vải mát lạnh nhờ sử dụng sợi Rayon làm mát cơ thể giúp người mặc cảm thấy thoải mái ngay cả khi đi giữa trưa hè.
                    Công nghệ chống nắng Hightech (công nghệ cao): chỉ số chống nắng UPF 50+ chặn đứng tác nhân gây đen sạm, lão hóa, ung thư da, duy trì khả năng chống UV sau nhiều lần giặt trong suốt quá trình sử dụng.
                    Bảo vệ tốt nhất - ngăn tới 98% tia UV được Viện Dệt May Việt Nam kiểm nghiệm và xác nhận.
                    Thiết kế thời trang, gọn gàng, an toàn khi di chuyển.
                    Bảo vệ toàn diện với Áo khoác, Chân váy, Găng tay, khẩu trang.
                    Đầy đủ cho cả gia đình (Nam, nữ, trẻ em).
                    Cam kết 1 đổi 1 trong 14 ngày nếu Quý Khách không hài lòng.
                </Text>
                <View style={styles.BuyButton}>
                    <Button
                        title="Đưa vào giỏ hàng"
                        color='#34B089'
                        onPress={() => {
                            navigation.navigate('MAIN');
                        }}
                    />
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
    swapper: {
        flex: 1,
        backgroundColor: '#fff',
        shadowOffset: { width: 2, height: 4 },
        shadowOpacity: 0.2,
        shadowRadius: 3,
    },
    header: {
        height: 40,
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    backIcon: {
        height: 30,
        width: 30,
        marginLeft: 8,
        marginRight: 8,
    },
    titleStyle: {
        fontFamily: 'Avenir',
        color: '#34B089',
        fontSize: 30,
    },
    ImageList: {
        flex: 1,
        flexDirection: 'row',
        height: 240,
    },
    ProductImage: {
        height: 240,
        width: 150,
    },
    ProductName: {
        padding: 4,
        color: '#34B089',
        fontSize: 20,
    },
    ProductPrice: {
        padding: 4,

    },
    ProductDesc: {
        padding: 4,

    },
    BuyButton: {
        padding: 10,
    },
})



{/* <TouchableOpacity
onPress={() => {
    navigation.navigate('LISTPRODUCT');
}}
>
<Text>
    goto ListProduct
</Text>
</TouchableOpacity>
<TouchableOpacity
onPress={() => {
    navigation.navigate('MAIN');
}}
>
<Text>
    goto Cart
</Text>
</TouchableOpacity> */}