// your axios instance that you wish to apply the interceptor to
import axios from "axios";
import {SERVER_BASE_URL} from '../config/app.config';
const apiClient = axios.create({
    baseURL: SERVER_BASE_URL,
});
export default apiClient;
