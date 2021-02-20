import {
    ADD_PRODUCT_CART,
    CLEAR_CART,
    MINUS_CART_ITEM,
    PLUS_CART_ITEM,
    REMOVE_CART_ITEM
} from "../actionTypes";

export const addProductToCart = (productObj:any) => ({
    type: ADD_PRODUCT_CART,
    payload: productObj,
})

export const clearCart = () => ({
    type: CLEAR_CART,
})

export const removeCartItem = (id:number) => ({
    type: REMOVE_CART_ITEM,
    payload: id,
})

export const plusCartItem = (id:number) => ({
    type: PLUS_CART_ITEM,
    payload: id,
})

export const minusCartItem = (id:number) => ({
    type: MINUS_CART_ITEM,
    payload: id,
})