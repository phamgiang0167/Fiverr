import React from 'react'
import { memo } from 'react'
import { useState } from 'react';
import { useFormik } from "formik"
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import Loading from 'components/client/Loading/Loading';
import {actSignIn} from 'store/actions/user'
function Signin(props) {
    const { display, setDisplaySignin, setDisplaySignup } = props
    const { loading, userLoggedIn } = useSelector(state => state.validateUser)
    const [displayLoading, setDisplayLoading] = useState(false)
    const dispatch = useDispatch()
    const inititalValues = {
        "email": "",
        "password": ""
    }
    const formik = useFormik({
        initialValues: inititalValues,
        onSubmit: async values => {
            dispatch(actSignIn(values))
            
        },
    });
    const showLoading = () => {
        setDisplayLoading(true)
    }
    if (!display) return <></>
    return (
        <div className="signin__container">
            <div className="signin__overplay" onClick={() => setDisplaySignin(false)}></div>
            <div className="signin">
                <form
                    className="signin__box"
                    onSubmit={(e) => {
                        e.preventDefault()
                        formik.handleSubmit(e)
                    }}
                >
                    <h3>Sign in</h3>

                    <input
                        type="email"
                        placeholder="Email"
                        name="email"
                        onChange={formik.handleChange}
                    />
                    <input
                        type="password"
                        placeholder="Password"
                        name="password"
                        onChange={formik.handleChange}
                    />

                    <button type="submit" onClick={() => showLoading()}>Sign In</button>
                </form>
                <div className="signin__footer">
                    <span>Not a member yet?</span>
                    <button onClick={() => {
                        setDisplaySignin(false)
                        setDisplaySignup(true)
                    }}> Join now</button>
                </div>
            </div>

            <Loading display={loading.status} msg={loading.msg}/>
        </div>
    )
}

export default memo(Signin)
