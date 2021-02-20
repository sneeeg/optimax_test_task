import {Dispatch} from "redux";
import {GET_PRODUCTS, HIDE_LOADER, SHOW_LOADER} from "../actionTypes";


export function showLoader() {
    return {
        type: SHOW_LOADER
    }
}


export function hideLoader() {
    return {
        type: HIDE_LOADER
    }
}


export function fetchProducts() {
    return async (dispatch:Dispatch):Promise<void> => {
        dispatch(showLoader())
        const response = await fetch('/data.json')
        const json = await response.json()
        dispatch({type: GET_PRODUCTS, payload: json})
        dispatch(hideLoader())
    }
}