import axios from 'axios';

const instance = axios.create({
  baseURL: import.meta.env.VITE_API_URL,
  headers: {
    Authorization: `Client-ID ${import.meta.env.VITE_API_ACCESS_KEY}`
  },
})

instance.interceptors.request.use(async (config) => {
  // To DO
  return config;
}, (error) => {
  return Promise.reject(error)
});

instance.interceptors.response.use(function (response) {
  return response;
}, function (error) {

  // To DO

  return Promise.reject(error);
});
export default instance
