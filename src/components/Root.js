import React from 'react'
import { StatusBar } from 'react-native'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { Provider } from 'react-redux'

import Main from './Main/Main'
import Authentication from './Authentication/Authentication'
import ChangeInfo from './ChangeInfo/ChangeInfo'
import OrderHistory from './OrderHistory/OrderHistory'
import ListProduct from './Product/ListProduct'
import Product from './Product/Product'
import CateListItem from './Product/CateListItem'
import Test from './test'
import ProductFilter from './Main/Home/ProductFilter'

import { store } from '../redux/store'
import OrderDetail from './OrderHistory/OrderDetail'

StatusBar.setHidden(true)

const Stack = createNativeStackNavigator()

export default function Root() {
    return (
        <NavigationContainer>
            <Stack.Navigator
                initialRouteName="TEST"
                screenOptions={{
                    headerShown: false,
                }}
            >
                <Stack.Screen
                    name="AUTHENTICATION"
                    component={Authentication}
                />
                <Stack.Screen name="MAIN" component={Main} />
                <Stack.Screen name="PRODUCT" component={Product} />
                <Stack.Screen name="ORDERHISTORY" component={OrderHistory} />
                <Stack.Screen name="ORDERDETAIL" component={OrderDetail} />
                <Stack.Screen name="CHANGEINFO" component={ChangeInfo} />
                <Stack.Screen name="LISTPRODUCT" component={ListProduct} />
                <Stack.Screen name="LISTCATEITEM" component={CateListItem} />
                <Stack.Screen name="TEST" component={Test} />
                <Stack.Screen name="PRODUCTFILTE" component={ProductFilter} />
            </Stack.Navigator>
        </NavigationContainer>
    )
}
