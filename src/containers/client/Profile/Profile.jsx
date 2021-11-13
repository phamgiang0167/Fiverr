import React from 'react'
import ProfileInfo from './components/ProfileInfo/ProfileInfo'

export default function Profile() {
    return (
        <div className="profile" >
            <div className="row">
                <div className="col-6 col-md-4">
                    <ProfileInfo />
                </div>
                <div className="col-6 col-md-8">
                </div>
            </div>
            
        </div>
    )
}
