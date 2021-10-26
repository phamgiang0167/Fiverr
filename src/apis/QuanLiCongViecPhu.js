import callApi from 'utils/callApi';

const subJobManagement = {
    fechListSubJob() {
        return callApi(`api/sub-type-jobs`);
    },

    
};

export default subJobManagement;