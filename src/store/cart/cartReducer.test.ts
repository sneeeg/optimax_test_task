import {cartReducer} from './cartReducer'
import {clearCart} from "./cartAction";

let state = {
    items: [],
    totalPrice: 100,
    totalCount: 1
}

let action = clearCart()

it('should be cart totalPrice clean', () => {
    let newState = cartReducer(state,action)
    expect(newState.totalPrice).toBe(0)
})

it('should be cart totalCount clean', () => {
    let newState = cartReducer(state,action)
    expect(newState.totalCount).toBe(0)
})