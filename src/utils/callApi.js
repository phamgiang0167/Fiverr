import axios from 'axios';
import { BASE_URL, TOKEN, TOKEN_BY_CLASS} from 'settings/apiConfig';

const callApi = (endpoint, method = 'GET', data = null) => {
  return axios({
    url: `${BASE_URL}/${endpoint}`,
    method,
    data,
    headers: {'token': TOKEN, 'tokenByClass': TOKEN_BY_CLASS}
  });
};

export default callApi;
