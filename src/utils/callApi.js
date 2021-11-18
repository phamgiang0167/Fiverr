import axios from 'axios';
import { DOMAIN, TOKEN, TOKEN_BY_CLASS, TOKEN_USER} from 'settings/apiConfig';

export const callApi = (endpoint, method = 'GET', data = null) => {
  return axios({
    url: `${DOMAIN}/${endpoint}`,
    method,
    data,
    headers: {'token': TOKEN, 'tokenByClass': TOKEN_BY_CLASS}
  });
};

export const callApiUser = (endpoint, method = 'GET', data = null) => {
  return axios({
    url: `${DOMAIN}/${endpoint}`,
    method,
    data,
    headers: {'token': localStorage.getItem(TOKEN_USER), 'tokenByClass': TOKEN_BY_CLASS}
  });
};

