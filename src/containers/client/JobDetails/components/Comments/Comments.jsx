import commentsManagement from 'apis/QuanLiBinhLuan'
import React, {useState, useEffect} from 'react'
import { USER } from 'settings/varConfig'
import Comment from '../Comment/Comment'

let comment = {}
export default function Comments({ id }) {
    const [comments, setComments] = useState([])
    const userLoggedIn = JSON.parse(localStorage.getItem(USER))
    let avatar 
    if(userLoggedIn){
        avatar = userLoggedIn.avatar
    }
    useEffect(() => {
        commentsManagement.fetchCommentByJob(id)
            .then((data) => {
                setComments(data.data)
            })
            .catch(err => console.log(err))
    }, [comment])
    const renderCommnets = (list) => {
        const lstReverse = [...list].reverse()
        return lstReverse?.map((item, index) => {
            return <Comment comment={item}/>
        })
    }
    const handleSubmitComment = (e) => {
        if(e.code == "Enter"){
            commentsManagement.postComment({content: e.target.value, job: id})
                .then((data)=>{
                    setComments([...comments, data.data])
                })
            e.target.value = ""
        }
    }
    return (
        <div className="comments">
            <div className="comments__user">
                <div className="user__logo" style={{ backgroundImage: `url(${avatar ? avatar : '/images/item_default.png'})` }}>

                </div>
                <div className="user__comment">
                    <textarea class="form-control" id="comment" rows="3"
                        onKeyUp={(e) => handleSubmitComment(e)}
                    ></textarea>
                </div>
            </div>
            <hr />
            <div className="content__list">
                {renderCommnets(comments)}
            </div>
        </div>
    )
}
