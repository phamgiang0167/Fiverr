import callApi from 'utils/callApi';

const jobManagement = {
    fechJobByName(name) {
        return callApi(`api/jobs/by-name?name=${name}`);
    },
    fechJobs(){
        return callApi('api/jobs')
    }
    
};

export default jobManagement;