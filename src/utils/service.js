import axios from "axios";
console.log(process.env.REACT_APP_API);

const service = axios.create({
  baseURL: process.env.REACT_APP_API,
  timeout: 5000,
});

service.interceptors.request.use(
  (config) => {
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

service.interceptors.response.use(
  (response) => {
    return response;
  },
  (error) => {
    return Promise.reject(error);
  }
);

export default service;
