import React from 'react'
import ProfileInfo from './components/ProfileInfo/ProfileInfo'

export default function Profile() {
    return (
        <div className="profile">
            <div className="row">
                <div className="col-sm-2 col-md-3"></div>
                <div className="col-sm-8 col-md-6">
                    <ProfileInfo />
                </div>
                <div className="col-sm-2 col-md-3"></div>
            </div>
        </div>
    )
}
