import React from "react";
import {combineReducers, createStore} from "redux";

const loginReducer = (state = {}, action: any) => {
    return state
}

const registerReducer = (state = {}, action: any) => {
    return state
}

const forgotReducer = (state = {}, action: any) => {
    return state
}

const setPassReducer = (state = {}, action: any) => {
    return state
}

const profileReducer = (state = {}, action: any) => {
    return state
}

const rootReducer = combineReducers({
    loginReducer,
    registerReducer,
    forgotReducer,
    setPassReducer,
    profileReducer
})

export const store = createStore(rootReducer)