import axios from 'axios'
import constant from './constant'

const initialState = {
    user: {},
    cart: {},
}

const checkProductExist = (cart, product) => {
    let index = -1
    cart.orderDetails.forEach((orderDetail, i) => {
        if (orderDetail.product.id == product.id) {
            index = i
        }
    })
    return index
}

export function reducer(state = initialState, action) {
    const newState = { ...state }

    console.group(action.type)
    console.log('OldState: ', state)
    console.log('Payload: ', action.payload)

    switch (action.type) {
        case constant.LOGIN:
            newState.user = action.payload
            break
        case constant.LOGOUT:
            newState.user = {}
            newState.cart = {}
            break
        case constant.INSERT_PRODUCT:
            const index = checkProductExist(newState.cart, action.payload)
            if (index == -1) {
                newState.cart.orderDetails = [
                    ...newState.cart.orderDetails,
                    { quantityOrdered: 1, product: { ...action.payload } },
                ]
            } else {
                newState.cart.orderDetails[index].quantityOrdered++
            }
            break
        case constant.REMOVE_PRODUCT:
            break
        case constant.SET_CART:
            newState.cart = action.payload
            break
        case constant.REMOVE_CART:
            break
        default:
            break
    }

    console.log('NewState: ', newState)
    console.groupEnd()
    return newState
}
