import axios from 'axios';

const axiosInstance = axios.create({
    baseURL: '/api',
    withCredentials: true,
});

export default axiosInstance;
export { axiosInstance as axios }; 