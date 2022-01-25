import React, { useState } from 'react'
import { useEffect } from 'react';
import userManagement from 'apis/QuanLiNguoiDung';
import 'react-toastify/dist/ReactToastify.css';
export default function GigItem({ data}) {
    const [userBooking, setUserBooking] = useState({})
   
    console.log(data)
    return (
        <div className="gig__item">
            <hr />
            <div className="row">
                <div className="col-sm-4">
                    <div className="item__logo" id="item__logo" style={{ backgroundImage: `url(${data.image ? data.image : "/images/item_default.png"})` }}>
                    </div>
                </div>
                <div className="col-sm-8 px-2">
                    <div className="item__name font-weight-bold py-2 text-center text-sm-left">
                        {data.name}
                    </div>
                    

                </div>
            </div>
        </div>
    )
}
