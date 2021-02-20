import {HIDE_LOADER, SHOW_LOADER} from "../actionTypes";

interface AppState {
    isLoading: boolean
}

const initialState = {
    isLoading: false
}


export const appReducer = (state:AppState = initialState, action:any) => {
    switch (action.type) {
        case SHOW_LOADER:
            return{...state, isLoading:true}
        case HIDE_LOADER:
            return{...state, isLoading:false}
        default: return state
    }
}