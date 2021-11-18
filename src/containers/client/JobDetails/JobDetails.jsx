import jobManagement from 'apis/QuanLiCongViec'
import userManagement from 'apis/QuanLiNguoiDung'
import React from 'react'
import { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import { useParams } from 'react-router'
import {actBookJob} from "store/actions/user"
export default function JobDetails() {
    const { id } = useParams()
    const [job, setJob] = useState({})
    const [user, setUser] = useState({})
    const dispatch = useDispatch()
    useEffect(() => {
        jobManagement.fetchJob(id)
            .then((res) => {
                setJob(res.data)
                userManagement.getUsetDetails(res.data.userCreated)
                    .then((user) =>{
                        setUser(user.data)
                    })
            })
            .catch(err => console.log(err))
    }, [])
    // console.log(job)
    if (job === {}) return (<></>)
    return (
        <div className="details" >
            {/* <div className="detail__linked d-flex">
                <a className="linked__type">
                    {job['type'].name}
                </a>
                <span> </span>
                <a className="linked__subType">
                    {job.name}
                </a>
            </div> */}
            <div className="row">
                <div className="col-md-7">
                    <div className="details__title">
                        {job.name}
                    </div>
                    <div className="details__user">
                        <div className="user__logo" style={{backgroundImage: `url(${user.avatar})`}}>

                        </div>
                        <div className="user__name">
                            {user.name}
                        </div>
                        <div className="user__rating">
                            <div>
                                <span><i class="fas fa-star"></i></span>
                                <span>{job.rating}</span>
                            </div>
                        </div>
                    </div>
                    <div className="details__image" >
                        <div className="image" style={{backgroundImage: `url(${job.image})`}}>

                        </div>
                    </div>
                    
                </div>
                <div className="col-md-5">
                    <div className="detail__booking">
                        <div className="booking__box">
                            <div className="booking__title">Basic</div>
                            <div className="d-flex justify-content-between px-4 py-4 font-weight-bold">
                                <span className="">Package</span>
                                <span>{job.price} $</span>
                            </div>
                            <div className="pb-4 px-4 text-center">
                                <button 
                                    className={`btn booking ${job.usersBooking == (undefined || null)? "active" : "disabled"}`}
                                    onClick={() => dispatch(actBookJob(job._id))}
                                >
                                    Booking({job.price}$)
                                </button>
                            </div>
                        </div>

                    </div>
                </div>
            </div>

        </div>
    )
}
