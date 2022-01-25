import userManagement from 'apis/QuanLiNguoiDung'
import validateUser from 'apis/XacThucNguoiDung'
import Swal from "sweetalert2"
import flatpickr from "flatpickr"
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
import { TOKEN_USER } from 'settings/apiConfig'
import jobManagement from 'apis/QuanLiCongViec'

const signupSuccess = () => ({
    type: SIGNUP_SUCCESS
})
const signupRequest = () => ({
    type: SIGNUP__REQUEST,
})
const signupFail = (err) => ({
    type: SIGNUP__FAIL,
    payload: err
})

const signinRequest = () => ({
    type: SIGNIN__REQUEST,
})

const signinSuccess = (data) => ({
    type: SIGNIN__SUCCESS,
    payload: data
})

const signinFail = (data) => ({
    type: SIGNIN__FAIL,
    payload: data
})

export const actSignIn = (values) => {
    console.log(values)
    return dispatch => {
        dispatch(signinRequest())
        validateUser.signin(values)
            .then((data) => {
                localStorage.setItem(TOKEN_USER, data.data.token)
                dispatch(signinSuccess(data.data.user))
            })
            .catch(err => dispatch(signinFail(err.response)))
    }
}
export const actSignUp = (values) => {
    return dispatch => {
        dispatch(signupRequest())
        validateUser.signup(values)
            .then((data) => {
                console.log(data)
                
                dispatch(signupSuccess())
                Swal.fire({
                    icon: "success",
                    title: 'Success',
                    text: 'Sign up success',
                })
            })
            .catch(err => dispatch(signupFail(err.response.status)))
    }
}
export const actChangeProfileName = (user) => {
    return async dispatch => {
        Swal.fire({
            title: 'Change your name',
            input: 'text',
            inputAttributes: {
                autocapitalize: 'off'
            },
            showCancelButton: true,
            confirmButtonText: 'Look up',
            showLoaderOnConfirm: true,
            preConfirm: (name) => {

                return userManagement.updateProfileUser(user._id, { ...user, name: name })
                    .then((user) => {
                        Swal.fire({
                            icon: "success",
                            title: 'Success',
                            text: 'Changed your name',
                        })
                    })
                    .catch(err => Swal.fire("something went wrong"))
            },
            allowOutsideClick: () => !Swal.isLoading()
        }).then((result) => {
            if (result.isConfirmed) {

                dispatch({
                    type: CHANGE_NAME,
                    payload: { ...user, name: result.value }
                })

            }
        })
    }
}
export const actChangeProfileGender = (user) => {
    // console.log(user)
    return async dispatch => {
        const { value: gender } = await Swal.fire({
            title: 'Change your gender',
            input: 'select',
            inputOptions: {
                "Male": 'Male',
                'Female': 'Female'
            },
            inputPlaceholder: 'Select gender',
            showCancelButton: true,

        })
        if (gender) {
            let genderStatus = gender === "Male" ? true : false
            userManagement.updateProfileUser(user._id, { ...user, "gender": genderStatus })
                .then((response) => {
                    // console.log(response)
                    dispatch({
                        type: CHANGE_PROFILE_GENDER,
                        payload: { ...user, "gender": genderStatus }
                    })
                    Swal.fire({
                        icon: "success",
                        title: 'Success',
                        text: `Change gender to "${gender}"" success`,
                    })
                })
                .catch(err => Swal.fire(`Error: ${err.response}`))
        }
    }
}
export const actChangeProfileBirthday = (user) => {
    return async dispatch => {
        let flatpickrInstance

        Swal.fire({
            title: 'Change your date of birth',
            html: '<input class="swal2-input" id="expiry-date">',
            stopKeydownPropagation: false,
            preConfirm: () => {
                if (flatpickrInstance.selectedDates[0] > new Date()) {
                    Swal.showValidationMessage(`Your date of birth is not valid`)
                }
            },
            willOpen: () => {
                flatpickrInstance = flatpickr(
                    Swal.getPopup().querySelector('#expiry-date')
                )
            }
        })
            .then((result) => {
                const payload = { ...user, birthday: flatpickrInstance.selectedDates[0] }
                userManagement.updateProfileUser(user._id, payload)
                    .then((response) => {
                        Swal.fire({
                            icon: "success",
                            title: 'Success',
                            text: 'Changed your date of birth',
                        })
                        dispatch({
                            type: CHANGE_PROFILE_BIRTHDAY,
                            payload: payload
                        })
                    })
                    .catch(err => Swal.fire(`Error: ${err.response}`))

            })

    }
}
export const actAddNewBox = (type, user, values) => {
    return dispatch => {
        let list = user[type]
        list.push(values)
        userManagement.updateProfileUser(user._id, { ...user, [type]: list })
            .then((res) => {
                dispatch({
                    type: ADD_NEW,
                    payload: { ...user, [type]: list }
                })
                Swal.fire({
                    icon: 'success',
                    title: `Your ${type} has been saved`,
                    showConfirmButton: false,
                    timer: 1500
                })
            })
            .catch(err => Swal.fire("Error: " + err.response.status))
    }
}

export const actDeleteItem = (type, user, values) => {
    return dispatch => {
        Swal.fire({
            title: 'Are you sure?',
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
        }).then((result) => {
            if (result.isConfirmed) {
                const index = user[type].indexOf(values);
                if (index > -1) {
                    user[type].splice(index, 1);
                }
                userManagement.updateProfileUser(user._id, user)
                    .then((reponse) => {
                        Swal.fire(
                            'Deleted!',
                            `Your ${type} has been deleted.`,
                            'success'
                        )
                        dispatch({
                            type: DELETE_ITEM,
                            payload: user
                        })
                    })
                    .catch(err => Swal.fire(
                        'Oops!',
                        'Something went wrong!',
                        'Error'
                    ))

            }
        })
    }
}

export const actBookJob = (idJob) => {
    return dispatch => {
        Swal.fire({
            title: 'Are you sure?',
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes!'
        }).then((result) => {
            if (result.isConfirmed) {
                jobManagement.bookJob(idJob)
                    .then((job) => {
                        userManagement.getUsetDetails(job.data.usersBooking)
                            .then((user) => {
                                dispatch({
                                    type: BOOK_JOB,
                                    payload: user.data
                                })
                                window.location.reload()
                            })

                        Swal.fire(
                            'Success!',
                            'Your ....',
                            'success'
                        )
                    })
                    .catch(err => Swal.fire("ERROR", "", "error"))
            }
        })
    }
}