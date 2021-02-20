import {GET_PRODUCTS} from "../actionTypes";

interface ProductsState {
    products: string[]
}

const initialState = {
    products: []
}

export const productsReducer = (state:ProductsState = initialState, action:any) => {
    switch (action.type) {
        case GET_PRODUCTS:
            return {...state, products: action.payload}
        default: return state
    }
}