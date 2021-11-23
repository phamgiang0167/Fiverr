
import {
    SIGNUP_SUCCESS,
    SIGNUP__REQUEST,
    SIGNUP__FAIL,
    SIGNIN__REQUEST,
    SIGNIN__SUCCESS,
    SIGNIN__FAIL,
    CHANGE_PROFILE_GENDER,
    CHANGE_PROFILE_BIRTHDAY,
    ADD_NEW,
    DELETE_ITEM,
    CHANGE_NAME,
    BOOK_JOB
} from '../constants/user'
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
            // window.location.reload()
            return {...state, loading: {msg: "Success", status: false}}
        case SIGNUP__FAIL:
            setTimeout(() => {
                window.location.reload()
            }, 3000)
            return {...state, loading: {msg: `Error, code: ${payload}`, status: true} }
        case SIGNIN__REQUEST:
            return {...state, loading: {msg: "Signing in", status: true}}
        case SIGNIN__SUCCESS:
            window.location.reload()
            localStorage.setItem(USER, JSON.stringify(payload))
            return {...state, userLoggedIn: payload, loading: {msg: "Login success", status: false}}
        case SIGNIN__FAIL:
            setTimeout(() => {
                window.location.reload()
            }, 3000)
            return {...state, userLoggedIn: payload, loading: {msg: payload.data.message, status: true}}
        case CHANGE_PROFILE_GENDER:
        case CHANGE_PROFILE_BIRTHDAY:
        case ADD_NEW:
        case DELETE_ITEM:
        case CHANGE_NAME:
        case BOOK_JOB:
            localStorage.setItem(USER, JSON.stringify(payload))
            return {...state, userLoggedIn: JSON.stringify(payload)}

        default: return { ...state }

    }
}

export default validateUser