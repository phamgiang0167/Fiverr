import callApi from 'utils/callApi';

const mainJobManagement = {
    fetchMainJob(){
        return callApi('api/type-jobs')
    }
    
};

export default mainJobManagement;