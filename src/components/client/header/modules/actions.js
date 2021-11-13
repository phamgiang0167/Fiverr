import validateUser from 'apis/XacThucNguoiDung'
import {
    SIGNUP_SUCCESS,
    SIGNUP__REQUEST,
    SIGNUP__FAIL,
    SIGNIN__REQUEST,
    SIGNIN__SUCCESS
} from './types'

const signupSuccess = (data) => ({
    type: SIGNUP_SUCCESS,
    payload: data
})
const signupRequest = () => ({
    type: SIGNUP__REQUEST,
})
const signupFail = (err) => ({
    type:SIGNUP__FAIL,
    payload: err
})

const signinRequest = () => ({
    type: SIGNIN__REQUEST,
})

const signinSuccess = (data) => ({
    type: SIGNIN__SUCCESS,
    payload: data
})
export const actSignIn = (values) => {
    return dispatch => {
        dispatch(signinRequest())
        validateUser.signin(values)
            .then((data) => {
                dispatch(signinSuccess(data.data.user))
            })
            .catch(err => err.response.status)
    }
}
export const actSignUp = (values) => {
    return dispatch => {
        dispatch(signupRequest())
        validateUser.signup(values)
            .then((data) => {
                const {birthday, 
                    bookingJob, 
                    certification, 
                    email, 
                    gender, 
                    name, 
                    phone, 
                    skill, 
                    _id} = data.data
                const userInfo = {
                    birthday: birthday,
                    bookingJob: bookingJob,
                    certification: certification,
                    email: email,
                    gender: gender,
                    name: name,
                    phone: phone,
                    skill: skill,
                    _id: _id
                }
                dispatch(signupSuccess(userInfo))
            })
            .catch(err => dispatch(signupFail(err.respon.status)))
    }
}

