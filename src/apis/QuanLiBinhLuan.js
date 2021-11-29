import {callApi, callApiUser} from 'utils/callApi';

const commentsManagement = {
    fetchCommentByJob(id){
        return callApi(`api/comments/by-job/${id}`)
    },
    postComment(content){
        return callApiUser('api/comments', "POST", content)
    }
    
};

export default commentsManagement;