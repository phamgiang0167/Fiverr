
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
    }, [])
    const renderComment = () => {
        return comment.content
    }
    
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
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Recusandae nobis labore nesciunt illum dolorum earum, nostrum possimus sint inventore. Corrupti asperiores quas, accusantium nihil illo aperiam numquam nisi deleniti. Qui?
            <div className="comment__content">
                {comment.content}
            </div>
            <hr />
        </div>
    )
}
