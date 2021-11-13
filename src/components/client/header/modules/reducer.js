
import {
    SIGNUP_SUCCESS,
    SIGNUP__REQUEST,
    SIGNUP__FAIL,
    SIGNIN__REQUEST,
    SIGNIN__SUCCESS
} from './types'
import { USER } from "settings/varConfig"
const initialState = {
    loading: {
        msg: "loading...",
        status: false
    },
    userLoggedIn: localStorage.getItem(USER)
}

const validateUser = (state = initialState, { type, payload }) => {
    switch (type) {
        case SIGNUP__REQUEST:
            return {...state, loading: {msg: "Signing up", status: true}}
        case SIGNUP_SUCCESS:
            localStorage.setItem(USER, JSON.stringify(payload))
            window.location.reload()
            return {...state, userLoggedIn: payload, loading: {msg: "Success", status: false}}
        case SIGNUP__FAIL:
            return {...state, loading: {msg: `Error, code: ${payload}`, status: true} }
        case SIGNIN__REQUEST:
            return {...state, loading: {msg: "Signing in", status: true}}
        case SIGNIN__SUCCESS:
            localStorage.setItem(USER, JSON.stringify(payload))
            window.location.reload()
            return {...state, userLoggedIn: payload, loading: {msg: "Login success", status: false}}
        default: return { ...state }
    }
}

export default validateUser