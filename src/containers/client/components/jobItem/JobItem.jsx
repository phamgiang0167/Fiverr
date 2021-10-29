import React from 'react'
import {useHistory} from 'react-router-dom'
export default function JobItem(props) {
    const history = useHistory()
    console.log(history)
    const { data } = props
    console.log(data)
    return (
        <div className="job__item-container">
            <div className="job__item">
                <div
                    className="job__logo" style={{ backgroundImage: "url(/images/item_default.png)" }}
                    onClick={() => history.replace(`/job-details/${data._id}`)}
                >

                </div>
                <div className="job__item-details">

                    <div className="job__author">
                        <div className="author__logo" style={{ backgroundImage: `url(/images/item_default.png)` }}>

                        </div>
                        <div className="author__name" >
                            name
                        </div>
                    </div>
                    <div className="job__content" onClick={() => history.replace(`/job-details/${data._id}`)}>
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
