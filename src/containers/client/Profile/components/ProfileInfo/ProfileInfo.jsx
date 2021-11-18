import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import moment from "moment"
import { actChangeProfileGender, actChangeProfileBirthday, actAddNewBox } from "store/actions/user"
import Loading from 'components/client/Loading/Loading'
import Swal from "sweetalert2"
import ProfileBasic from '../ProfileBasic/ProfileBasic'
import ProfileDescription from '../ProfileDescription/ProfileDescription'
export default function ProfileInfo() {
    const dispatch = useDispatch()
    let { userLoggedIn } = useSelector(state => state.validateUser)
    userLoggedIn = JSON.parse(userLoggedIn)
    
    if (!userLoggedIn) return <Loading />
    return (
        <div className="profile__info">
            <ProfileBasic userLoggedIn={userLoggedIn}/>
            <ProfileDescription userLoggedIn={userLoggedIn}/>
        </div>
    )
}
