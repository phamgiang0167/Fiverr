import {callApi} from 'utils/callApi';

const subJobManagement = {
    fechListSubJob() {
        return callApi(`api/sub-type-jobs`);
    },
    fetchDetailSubJob(id){
        return callApi('api/sub-type-jobs/' + id)
    }
    
};

export default subJobManagement;