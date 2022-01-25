import {callApi, callApiUser} from 'utils/callApi';
import axios from 'axios';
import { TOKEN, TOKEN_BY_CLASS, TOKEN_USER } from 'settings/apiConfig';
import { USER } from 'settings/varConfig';
const jobManagement = {
    fechJobByName(name) {
        return callApi(`api/jobs/by-name?name=${name}`);
    },
    fechJobs(){
        return callApi('api/jobs')
    },
    fetchJobBySubtype(id, skip, limit){
        return callApi('api/jobs/by-sub-type?subType=' + id)
    },
    fetchJob(id){
        return callApi(`api/jobs/${id}`)
    },
    bookJob(id){
        return callApiUser(`api/jobs/booking/${id}`, "PATCH")
    },
    createJob(values){
        return callApiUser(`api/jobs`, "POST", values)
    },
    editJob(id, values){
        // console.log(id, values)
        return callApiUser(`api/jobs/${id}`, "PUT", values)
    },
    deleteJob(id){
        // console.log(id)
        return callApiUser(`api/jobs/${id}`, "DELETE")
    },
    completeJob(id){
        return callApiUser(`api/jobs/done/${id}`, "PATCH")
    },
    changeImage(file, id){
        console.log(file)
        let myData = new FormData();
        myData.append('job', file);

        
        return axios({
            url: 'https://fiverr.cybersoft.edu.vn/api/jobs/upload-image/' + id,
            method: "POST",
            data: myData,
            headers: {
                'Content-Type': 'multipart/form-data',
                'token': TOKEN,
                'tokenByClass': TOKEN_BY_CLASS
            }
        })
    }
    
};

export default jobManagement;