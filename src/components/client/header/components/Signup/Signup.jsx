import React from 'react'
import { memo } from 'react'
import { DatePicker, Space } from 'antd';
import { useState } from 'react';
import { useFormik } from "formik"
import { useDispatch } from 'react-redux';
import {actSignUp} from 'store/actions/user'
import { useSelector } from 'react-redux';
import Loading from 'components/client/Loading/Loading';
import { USER } from 'settings/varConfig';
function Signup(props) {
    const { display, setDisplaySignup, setDisplaySignin } = props
    const [birthday, setBirthday] = useState("")
    const {loading, userLoggedIn} = useSelector(state => state.validateUser)
    const [displayLoading, setDisplayLoading] = useState(false)
    const dispatch = useDispatch()
    const inititalValues = {
        "name": "",
        "email": "",
        "password": "",
        "phone": "",
        "skill": [],
        "certification": [],
        "birthday": birthday,
        "gender": true,
        "type": "CLIENT"
    }
    const formik = useFormik({
        initialValues: inititalValues,
        onSubmit: async values => {
            await dispatch(actSignUp(values))
        },
    });
    const showLoading = () => {
        setDisplayLoading(true)
    }
    if (!display) return <></>
    return (
        <div className="signup__container">
            <div className="signup__overplay" onClick={() => setDisplaySignup(false)}></div>
            <div className="signup">
                <form
                    className="signup__box"
                    onSubmit={(e) => {
                        e.preventDefault()
                        formik.handleSubmit(e)
                    }}
                >
                    <h3>Join Fiverr</h3>
                    <input
                        type="text"
                        placeholder="Fullname"
                        name="name"
                        onChange={formik.handleChange}
                    />
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
                    <input
                        type="text"
                        placeholder="Phone"
                        name="phone"
                        onChange={formik.handleChange}
                    />
                    <select name="gender" id="gender" required onChange={formik.handleChange}>
                        <option value="" disabled selected hidden>Gender</option>
                        <option value="true">Male</option>
                        <option value="false">Female</option>
                    </select>
                    <DatePicker onChange={(date, dateString) => formik.setFieldValue("birthday", dateString)} />
                    <button type="submit" onClick={() => showLoading()}>Sign up</button>
                </form>
                <div className="signup__footer">
                    <span>Already a member?</span>
                    <button onClick={() => {
                        setDisplaySignin(true)
                        setDisplaySignup(false)
                    }}>Sign up</button>
                </div>
            </div>
            
            <Loading display={loading.status}/>
        </div>
    )
}

export default memo(Signup)
