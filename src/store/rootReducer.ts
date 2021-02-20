import { combineReducers } from "redux";
import {productsReducer} from "./products/productsReducer";
import {cartReducer} from "./cart/cartReducer";
import {appReducer} from "./app/appReducer";

export const rootReducer = combineReducers({
    products: productsReducer,
    cart: cartReducer,
    app: appReducer
})

type RootReducerType = typeof rootReducer
export type AppStateType = ReturnType<RootReducerType>