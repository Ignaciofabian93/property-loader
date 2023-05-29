import axios from "axios";

const baseUrl = "http://localhost:5000";

const axiosUrl = axios.create({ baseURL: baseUrl });

export default axiosUrl;
