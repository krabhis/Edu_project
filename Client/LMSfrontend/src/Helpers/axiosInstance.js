import axios from "axios";

const BASE_URL="http://localhost:3001/api/v1";//url of backened (api endpoint)

const axiosInstance= axios.create();

axiosInstance.defaults.baseURL=BASE_URL;
axiosInstance.defaults.withCredentials=true;

export default axiosInstance; 