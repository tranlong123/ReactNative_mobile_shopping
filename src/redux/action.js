import constant from './constant'

export function login(user) {
    return {
        type: constant.LOGIN,
        payload: user,
    }
}

export function logout() {
    return {
        type: constant.LOGOUT,
    }
}

export function insertProduct(product) {
    return {
        type: constant.INSERT_PRODUCT,
        payload: product,
    }
}

export function removeProduct(product) {
    return {
        type: constant.REMOVE_PRODUCT,
        payload: product,
    }
}

export function clearProduct(product) {
    return {
        type: constant.CLEAR_PRODUCT,
        payload: product,
    }
}

export function setCart(cart) {
    return {
        type: constant.SET_CART,
        payload: cart,
    }
}

export function removeCart() {
    return {
        type: constant.REMOVE_CART,
    }
}
