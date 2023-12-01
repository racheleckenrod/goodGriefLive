import axios from 'axios';

const axiosInstance = axios.create({
    baseUrl: 'http://localhost:3030',
    withCredentials: true,
});

export default axiosInstance;
export { axiosInstance as axios }; 