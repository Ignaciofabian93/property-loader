import axios from "axios";

const baseUrl = "https://property-loader-server-kjxr-dev.fl0.io";

const axiosUrl = axios.create({ baseURL: baseUrl });

export default axiosUrl;
