import React from 'react'
import {useSelector } from 'react-redux'

import Loading from 'components/client/Loading/Loading'

import ProfileBasic from '../ProfileBasic/ProfileBasic'
import ProfileDescription from '../ProfileDescription/ProfileDescription'
export default function ProfileInfo() {
    let { userLoggedIn } = useSelector(state => state.validateUser)
    userLoggedIn = JSON.parse(userLoggedIn)
    if (!userLoggedIn) return <Loading />
    return (
        <div className="profile__info">
            <ProfileBasic/>
            <ProfileDescription/>
        </div>
    )
}
