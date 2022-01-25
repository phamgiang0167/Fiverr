import jobManagement from 'apis/QuanLiCongViec'
import userManagement from 'apis/QuanLiNguoiDung'
import React from 'react'
import { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import { useParams } from 'react-router'
import { USER } from 'settings/varConfig'
import {actBookJob} from "store/actions/user"
import Comments from './components/Comments/Comments'
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
                        <div className="user__logo" style={{backgroundImage: `url(${user.avatar ? user.avatar : '/images/item_default.png'})`}}>

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
                        <div className="image" 
                            style={{backgroundImage: `url(${job.image ? job.image : '/images/item_default.png'})`}}
                        >
                        </div>
                    </div>
                    <Comments id={id} />
                </div>
                <div className="col-md-5">
                    <div className="detail__booking">
                        <div className="booking__box">
                            <div className="booking__title">Basic</div>
                            <div className="d-flex justify-content-between px-4 py-4 font-weight-bold">
                                <span className="">Package</span>
                                <span>{job.price} $</span>
                            </div>
                            <div className="d-flex justify-content-between px-4 py-4 font-weight-bold">
                                <span className="">Pro services</span>
                                <span>{job.proServices ? "Yes" : "No" }</span>
                                
                            </div>
                            <div className="d-flex justify-content-between px-4 py-4 font-weight-bold">
                                <span className="">Local sellers</span>
                                <span>{job.localSellers ? "Yes" : "No" }</span>
                                
                            </div>
                            <div className="d-flex justify-content-between px-4 py-4 font-weight-bold">
                                <span className="">Online Sellers</span>
                                <span>{job.onlineSellers ? "Yes" : "No" }</span>
                                
                            </div>
                            <div className="d-flex justify-content-between px-4 py-4 font-weight-bold">
                                <span className="">Delivery</span>
                                <span>{job.deliveryTime ? "Yes" : "No" }</span>
                                
                            </div>
                            <div className="pb-4 px-4 text-center">
                                <button 
                                    className={
                                        `
                                            btn booking 
                                            ${job.usersBooking == (undefined || null) && JSON.parse(localStorage.getItem(USER))?._id !== user._id ? "active" : "disabled"}
                                        `
                                    }
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
