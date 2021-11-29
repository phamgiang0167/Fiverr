import userManagement from 'apis/QuanLiNguoiDung'
import React, { useEffect } from 'react'
import { useState } from 'react'
import { useHistory } from 'react-router-dom'
export default function JobItem(props) {
    const { data } = props
    const [user, setUser] = useState({})
    const history = useHistory()
    useEffect(() => {
        userManagement.getUsetDetails(data.userCreated)
            .then((user) => {
                setUser(user.data)
            })
            .catch(err => setUser({
                name: "Unknown",
                avatar: "/images/item_default.png"
            }))

    }, [data.userCreated])

    return (
        <div className="job__item-container">
            <div className="job__item">
                <div
                    className="job__logo" style={{ backgroundImage: `url(${data.image ? data.image : '/images/item_default.png'})`}}
                    onClick={() => history.push(`/job-details/${data._id}`)}
                    onError={(e) => {
                        console.log('a')
                    }}
                >

                </div>
                <div className="job__item-details">

                    <div className="job__author">
                        <div 
                            className="author__logo"
                            style={{ backgroundImage: `url(${user.avatar})` }}>
                        </div>
                        <div className="author__name" >
                            {user.name}
                        </div>
                    </div>
                    <div className="job__content" onClick={() => history.push(`/job-details/${data._id}`)}>
                        {data.name}
                    </div>
                    <div className="job__rating">
                        <i class="fas fa-star"></i>
                        <span>{data.rating}</span>
                    </div>
                    <div className="job__price">
                        <i class="fas fa-heart"></i>
                        <span>starting at <span>${data.price}</span></span>
                    </div>
                </div>
            </div>

        </div>
    )
}
