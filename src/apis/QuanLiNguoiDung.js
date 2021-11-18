import axios from 'axios';
import { TOKEN_BY_CLASS, TOKEN_USER } from 'settings/apiConfig';
import { callApi, callApiUser } from 'utils/callApi';

const userManagement = {
    updateProfileUser(_id, values) {
        // console.log(_id, values)
        return callApi(`api/users/${_id}`, "PUT", values);
    },
    updateProfileImage(file) {
        let myData = new FormData();
        myData.append('avatar', file);

        
        return axios({
            url: 'https://fiverr.cybersoft.edu.vn/api/users/upload-avatar',
            method: "POST",
            data: myData,
            headers: {
                'Content-Type': 'multipart/form-data',
                'token': localStorage.getItem(TOKEN_USER),
                'tokenByClass': TOKEN_BY_CLASS
            }
        })
       



    },
    getUsetDetails(id) {
        return callApi(`api/users/${id}`)
    }
};

export default userManagement;