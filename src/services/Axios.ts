import axios from 'axios';

const Axios = axios.create({
  baseURL: 'https://themealdb.com/api/json/v1/1',
  timeout: 60000,
});

Axios.interceptors.request.use(async (config: any) => {
  return config;
});

Axios.interceptors.response.use(
  async response => {
    return response;
  },
  async error => {
    console.log(error?.response);
    return Promise.reject(error.response);
  },
);

export default Axios;
