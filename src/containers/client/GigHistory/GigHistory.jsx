
import React from 'react'
import { useState, useEffect } from 'react'
import { Redirect } from 'react-router'
import { USER } from 'settings/varConfig'
import GigItemHistory from "./components/GigItemHistory/GigItemHistory"
import userManagement from 'apis/QuanLiNguoiDung'
const initialValue = {
    "name": "",
    "rating": 10,
    "price":'',
    "proServices": '',
    "localSellers": '',
    "onlineSellers": '',
    "deliveryTime": '',
    "type": null,
    "subType": null
}
export default function GigHistory() {
    const [job, setJob] = useState([])
    useEffect(() => {
        userManagement.getListGigBooked(userLoggedIn._id)
        .then((data) => {
            // console.log(data)
            setJob(data.data.bookingJob)
        })
    }, [])
    if (!localStorage.getItem(USER)) {
        return <Redirect to="/" />
    }
    const userLoggedIn = JSON.parse(localStorage.getItem(USER))
    
    const renderListGig = () => {
        let gig = [...job].reverse()
        return gig?.map((item, index) => {
            return (
               <GigItemHistory data={item}/>
            )
        })
    }
    if(job.length == 0) return <></>
    return (
        <div className="gig" style={{minHeight: "100vh"}}>
            <div className="row">
                <div className="col-sm-2 col-md-3"></div>
                <div className="col-sm-8 col-md-6 p-4">
                    <div className="create__gig d-flex justify-content-between align-items-center">
                        <span>
                            History
                        </span>
                        
                    </div>
                    {renderListGig()}
                </div>
                <div className="col-sm-2 col-md-3"></div>
            </div>
        </div>
    )
}
