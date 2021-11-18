import {callApi, callApiUser} from 'utils/callApi';

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
    }
    
};

export default jobManagement;