import {callApi, callApiUser} from 'utils/callApi';

const mainJobManagement = {
    fetchMainJob(){
        return callApi('api/type-jobs')
    },
    fetchMainJobDetails(id){
        return callApi(`api/type-jobs/${id}`)
    }
    
};

export default mainJobManagement;