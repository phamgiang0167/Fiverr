import callApi from 'utils/callApi';

const validateUser= {
    signup(values) {
        return callApi(`api/auth/signup`, "POST" ,values);
    },
    signin(values){
        return callApi(`api/auth/signin`, "POST", values)
    }
    
};

export default validateUser;