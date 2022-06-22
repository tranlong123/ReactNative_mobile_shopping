import constant from './constant'

const initialState = {
    user: {},
    cart: {},
}

export function reducer(state = initialState, action) {
    const newState = { ...state }

    switch (action.type) {
        case constant.LOGIN:
            console.log('LOGIN')
            newState.user = action.payload
            break
        case constant.LOGOUT:
            console.log('LOGOUT')
            newState.user = {}
            break
        case constant.INSERT_PRODUCT:
            console.log('INSERT_PRODUCT')
            break
        case constant.REMOVE_PRODUCT:
            console.log('REMOVE_PRODUCT')
            break
        case constant.REMOVE_CART:
            console.log('REMOVE_CART')
            break
        default:
            break
    }
    return newState
}