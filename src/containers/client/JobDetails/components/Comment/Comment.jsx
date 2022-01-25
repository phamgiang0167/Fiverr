
import userManagement from 'apis/QuanLiNguoiDung'
import React from 'react'
import { useState } from 'react'
import { useEffect } from 'react'

export default function Comment({comment}) {
    const [user, setUser] = useState({})
    useEffect(() => {
        let idUser = ""
        if(typeof comment.user === "object"){
            
            idUser = {...comment.user}
            idUser = idUser._id
        }else{
            idUser = comment.user
        }
        userManagement.getUsetDetails(idUser)
            .then((data) => {
                setUser(data.data)
            })
    }, [comment.user])
    
    
    if(!user) return (<></>)
    return (
        <div class="comment">
            <div className="d-flex align-items-center mb-2">
                <div className="comment__logo mr-2"
                    style={{backgroundImage: `url(${user.avatar ? user.avatar : '/images/item_default.png'})`}}
                >
                </div>
                <div className="comment__name font-weight-bold">
                    {user.name}
                    
                </div>
            </div>
            
            <div className="comment__content">
                {comment.content}
            </div>
            <hr />
        </div>
    )
}
