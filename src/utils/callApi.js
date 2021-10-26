import axios from 'axios';
import { DOMAIN, TOKEN, TOKEN_BY_CLASS} from 'settings/apiConfig';

const callApi = (endpoint, method = 'GET', data = null) => {
  return axios({
    url: `${DOMAIN}/${endpoint}`,
    method,
    data,
    headers: {'token': TOKEN, 'tokenByClass': TOKEN_BY_CLASS}
  });
};

export default callApi;
