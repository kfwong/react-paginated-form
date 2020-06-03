import Axios from 'axios';

const axios = Axios.create({
  baseURL: 'https://reqres.in',
});

axios.defaults.timeout = 20000;

export default axios;

export const getUser = () => {
  return axios.get('/api/user/1').then(res => res.data.data);
};

